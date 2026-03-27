'use client';

import { useState } from 'react';

type ProductGalleryProps = {
  images: readonly string[];
  title: string;
};

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeImages = images.length > 0 ? images : [''];
  const activeImage = safeImages[activeIndex] ?? safeImages[0];

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_104px] md:items-start">
      <div className="flex min-h-[620px] items-center justify-center rounded-[1.5rem] bg-white px-2 py-2 md:min-h-[680px]">
        {activeImage ? (
          <img
            src={activeImage}
            alt={title}
            className="h-full max-h-[660px] w-full object-contain"
          />
        ) : null}
      </div>

      <div className="grid content-start grid-cols-2 gap-3 md:grid-cols-1">
        {safeImages.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex aspect-square items-center justify-center rounded-[1.25rem] border bg-white p-1.5 transition-colors ${
                isActive ? 'border-[#c92b38] ring-2 ring-[#f4d7db]' : 'border-[#eadfd5] hover:border-[#cfb9aa]'
              }`}
              aria-label={`Zobrazit obrázek ${index + 1} produktu ${title}`}
              aria-pressed={isActive}
            >
              {image ? (
                <img
                  src={image}
                  alt={`${title} náhled ${index + 1}`}
                  className="h-full w-full object-scale-down"
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
