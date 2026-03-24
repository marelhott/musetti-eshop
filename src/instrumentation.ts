function createStorageShim() {
  const storage = new Map<string, string>();

  return {
    getItem(key: string) {
      return storage.has(key) ? storage.get(key)! : null;
    },
    setItem(key: string, value: string) {
      storage.set(String(key), String(value));
    },
    removeItem(key: string) {
      storage.delete(String(key));
    },
    clear() {
      storage.clear();
    },
    key(index: number) {
      return Array.from(storage.keys())[index] ?? null;
    },
    get length() {
      return storage.size;
    },
  };
}

export function register() {
  const storage = createStorageShim();

  try {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: storage,
      writable: true,
    });
  } catch {
    // Ignore environments that do not allow overriding the global.
  }

  try {
    Object.defineProperty(globalThis, 'sessionStorage', {
      configurable: true,
      value: createStorageShim(),
      writable: true,
    });
  } catch {
    // Ignore environments that do not allow overriding the global.
  }
}
