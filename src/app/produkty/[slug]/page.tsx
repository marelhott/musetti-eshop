import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ProductCard } from '@/components/ProductCard';
import {
  catalogCategories,
  getCategoryById,
  getProductBySlug,
  getProductsByCategory,
} from '@/data/catalog';
import { getSourceProductDetail } from '@/lib/sourceProductDetail';

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const params = new Map();

  for (const category of catalogCategories as Array<{ id: string }>) {
    const categoryProducts = getProductsByCategory(category.id);
    for (const product of categoryProducts) {
      params.set(product.slug, { slug: product.slug });
    }
  }

  return Array.from(params.values());
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);

  if (!category) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.categoryId).filter(
    (relatedProduct) => relatedProduct.slug !== product.slug,
  );
  const fallbackSourceDetail = await getSourceProductDetail(product.sourceUrl);
  const sourceDetail = product.detail ?? fallbackSourceDetail;
  const galleryImages = sourceDetail.galleryImages.length > 0 ? sourceDetail.galleryImages : product.images;
  const [primaryImage, ...secondaryImages] = galleryImages;

  return (
    <main className="bg-white">
      <section className="border-b border-[#efe4db] bg-[linear-gradient(180deg,#fff_0%,#f7f1eb_100%)]">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b7769]">
            <Link href="/" className="transition-colors hover:text-[#a5513a]">
              Domů
            </Link>
            <span>/</span>
            <Link href={category.pageHref} className="transition-colors hover:text-[#a5513a]">
              {category.label}
            </Link>
            <span>/</span>
            <span className="text-[#2d1e17]">{product.title}</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[2rem] border border-[#eadfd5] bg-white p-6 shadow-[0_24px_80px_rgba(77,48,34,0.08)] md:p-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-[#d9c8bb] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#7f695b]">
                  {category.label}
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#b0917e]">
                  {galleryImages.length} obrázků
                </span>
              </div>

              <div className="grid gap-3 md:grid-cols-[1fr_116px]">
                <div className="flex min-h-[780px] items-center justify-center rounded-[1.5rem] bg-white px-1 py-1 md:px-2">
                  <img
                    src={primaryImage}
                    alt={product.title}
                    className="h-full max-h-[760px] w-full object-contain"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                  {(galleryImages as readonly string[]).map((image: string, index: number) => (
                    <div
                      key={`${image}-${index}`}
                      className="flex h-28 items-center justify-center rounded-[1.25rem] border border-[#eadfd5] bg-white p-1.5"
                    >
                      <img
                        src={image}
                        alt={`${product.title} náhled ${index + 1}`}
                        className="h-full w-full object-scale-down"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: category.accent }}>
                Caffè Musetti detail
              </p>
              <h1 className="mt-3 text-[1.45rem] font-semibold leading-[1.02] text-[#2d1e17] md:text-[2.05rem]">
                {sourceDetail.title ?? product.title}
              </h1>
              <p className="mt-4 max-w-2xl text-[1.05rem] leading-7 text-[#6f5a4e]">
                {sourceDetail.lead ?? product.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {(product.variants as readonly string[]).map((variant: string) => (
                  <span
                    key={variant}
                    className="rounded-full bg-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#705d51] ring-1 ring-[#eadfd5]"
                  >
                    {variant}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-4">
                <div className="rounded-[1.75rem] border border-[#eadfd5] bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#9b7f70]">Cena</p>
                  <div className="mt-3 text-[2.2rem] font-semibold text-[#2d1e17]">{product.price}</div>
                  {product.compareAtPrice ? (
                    <div className="mt-2 text-sm text-[#9f8b7e] line-through">
                      {product.compareAtPrice}
                    </div>
                  ) : null}
                  {sourceDetail.stockLabel ? (
                    <div className="mt-4 inline-flex rounded-full bg-[#eef8f1] px-3 py-1 text-base font-medium text-[#2b8a57]">
                      {sourceDetail.stockLabel}
                    </div>
                  ) : null}
                </div>

                <div className="rounded-[1.75rem] border border-[#eadfd5] bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#9b7f70]">Přesné označení</p>
                  <div className="mt-4 grid gap-3 text-[0.95rem] text-[#6f5a4e] md:grid-cols-2">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[#a38b7c]">Výrobce</div>
                      <div className="mt-1 text-[1.05rem] font-medium text-[#2d1e17]">
                        {sourceDetail.manufacturer ?? 'Caffé Musetti'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[#a38b7c]">Kód produktu</div>
                      <div className="mt-1 text-[1.05rem] font-medium text-[#2d1e17]">
                        {sourceDetail.productCode ?? 'neuvedeno'}
                      </div>
                    </div>
                    {sourceDetail.shippingLabel ? (
                      <div className="md:col-span-2">
                        <div className="text-[11px] uppercase tracking-[0.2em] text-[#a38b7c]">Servis</div>
                        <div className="mt-1 text-[1.05rem] font-medium text-[#2d1e17]">
                          {sourceDetail.shippingLabel}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-[#eadfd5] bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#9b7f70]">Máte dotaz?</p>
                  <div className="mt-4 flex flex-wrap gap-5 text-[0.95rem] text-[#6f5a4e]">
                    <a href={`tel:${sourceDetail.contact.phone}`} className="transition-colors hover:text-[#a5513a]">
                      {sourceDetail.contact.phone}
                    </a>
                    <a
                      href={`mailto:${sourceDetail.contact.email}`}
                      className="transition-colors hover:text-[#a5513a]"
                    >
                      {sourceDetail.contact.email}
                    </a>
                    <Link href="/contatti" className="font-medium text-[#a5513a]">
                      {sourceDetail.contact.quickContactLabel}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href={category.pageHref}
                  className="rounded-full bg-[#2d1e17] px-6 py-3 text-[0.95rem] font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Zpět do kategorie
                </Link>
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#cfb9aa] px-6 py-3 text-[0.95rem] font-semibold text-[#6b5447] transition-colors hover:bg-[#faf5f0]"
                >
                  Zdrojový detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] border border-[#eadfd5] bg-white shadow-[0_18px_60px_rgba(77,48,34,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
              <div className="border-b border-[#efe4db] p-6 lg:border-b-0 lg:border-r">
                <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f70]">Obsah detailu</p>
                <div className="mt-6">
                  <div className="rounded-full bg-[#faf5f0] px-4 py-2 text-sm font-medium text-[#a5513a]">
                    Popis
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-8">
                  {sourceDetail.introTitle || sourceDetail.introSubtitle || sourceDetail.highlightLines.length > 0 ? (
                    <div className="rounded-[1.5rem] border border-[#eadfd5] bg-[linear-gradient(180deg,#fff_0%,#fbf6f1_100%)] p-5 md:p-6">
                      {sourceDetail.introTitle ? (
                        <h3 className="text-[1.05rem] font-semibold text-[#2d1e17]">
                          {sourceDetail.introTitle}
                        </h3>
                      ) : null}
                      {sourceDetail.introSubtitle ? (
                        <p className="mt-3 text-[0.96rem] leading-7 text-[#5f4a3d]">
                          {sourceDetail.introSubtitle}
                        </p>
                      ) : null}
                      {sourceDetail.highlightLines.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {(sourceDetail.highlightLines as readonly string[]).map((line: string) => (
                            <span
                              key={line}
                              className="rounded-full border border-[#e5d7cc] bg-white px-3 py-1.5 text-[0.8rem] text-[#6a5649]"
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="space-y-4">
                    {(sourceDetail.bodyParagraphs.length > 0
                      ? sourceDetail.bodyParagraphs
                      : [product.shortDescription]
                    ).map((paragraph: string) => (
                      <p key={paragraph} className="text-[0.95rem] leading-7 text-[#5f4a3d]">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {sourceDetail.specs.length > 0 ? (
                    <div className="rounded-[1.5rem] border border-[#efe4db] bg-[linear-gradient(180deg,#fff_0%,#f7f1eb_100%)] p-5 md:p-6">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#9b7f70]">
                        Technické údaje
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                        {sourceDetail.specs.map((spec: { label: string; value: string }) => (
                          <div
                            key={`${spec.label}-${spec.value}`}
                            className="rounded-[1.25rem] border border-[#eadfd5] bg-white p-4"
                          >
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[#a38b7c]">
                              {spec.label}
                            </div>
                            <div className="mt-2 text-[0.92rem] leading-6 text-[#2d1e17]">
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#efe4db] pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#9f8575]">Související produkty</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1e17] md:text-5xl">
                Další výběr v kategorii {category.label}
              </h2>
            </div>

            <Link
              href={category.pageHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#a5513a]"
            >
              Otevřít celou kategorii
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct: (typeof relatedProducts)[number]) => (
              <ProductCard
                key={`${category.id}-${relatedProduct.slug}`}
                product={relatedProduct}
                categoryLabel={category.label}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
