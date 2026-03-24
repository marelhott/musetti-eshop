import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { execFileSync } from 'node:child_process';

const root = '/Volumes/CODEX_DISK/apps/Eshop';

async function cleanup() {
  const entries = await readdir(root, { withFileTypes: true });
  const cleanupTargets = entries
    .filter((entry) => entry.isDirectory() && (entry.name === '.next' || entry.name.startsWith('.next-')))
    .map((entry) => entry.name);

  for (const target of cleanupTargets) {
    await rm(path.join(root, target), { recursive: true, force: true });
  }
}

function freePort(port) {
  try {
    const output = execFileSync('lsof', ['-ti', `tcp:${port}`], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();

    const pids = output
      .split('\n')
      .map((value) => value.trim())
      .filter(Boolean);

    for (const pid of pids) {
      try {
        process.kill(Number(pid), 'SIGTERM');
      } catch {}
    }
  } catch {}
}

async function main() {
  freePort(3001);
  await cleanup();

  const build = spawn(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['next', 'build'],
    {
      cwd: root,
      stdio: 'inherit',
      env: process.env,
    },
  );

  build.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    if (code !== 0) {
      process.exit(code ?? 1);
      return;
    }

    const start = spawn(
      process.platform === 'win32' ? 'npx.cmd' : 'npx',
      ['next', 'start', '-H', '0.0.0.0', '-p', '3001'],
      {
        cwd: root,
        stdio: 'inherit',
        env: process.env,
      },
    );

    start.on('exit', (startCode, startSignal) => {
      if (startSignal) {
        process.kill(process.pid, startSignal);
        return;
      }

      process.exit(startCode ?? 0);
    });
  });
}

main().catch((error) => {
  console.error('Failed to start clean dev server:', error);
  process.exit(1);
});
