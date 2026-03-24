export type CoffeeCategory = {
  id: 'beans' | 'capsules' | 'pods' | 'ground';
  label: string;
  headline: string;
  description: string;
  shortNote: string;
  href: string;
  shopUrl: string;
  accent: string;
  panelClassName: string;
  heroImages: string[];
  audience: string;
};

export type CzProduct = {
  slug: string;
  categoryId: CoffeeCategory['id'];
  category: string;
  title: string;
  shortDescription: string;
  price: string;
  compareAtPrice?: string;
  variants: string[];
  href: string;
  images: string[];
};

export const coffeeCategories: CoffeeCategory[] = [
  {
    id: 'beans',
    label: 'Zrnková káva',
    headline: 'Klasické balení pro espresso i každodenní domácí přípravu.',
    description:
      'Nová řada Caffé Musetti a na výběr z několika druhů Armonico, Intenso, Gentile a Deca. Přehledně, s jasným chuťovým rozlišením a silným vizuálním vstupem.',
    shortNote: '4 produkty',
    href: '#zrnkova-kava',
    shopUrl: 'https://www.musettishop.cz/zrnkova-kava-caffe-musetti',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
    audience: 'Pro zákazníky, kteří chtějí klasické balení a stabilní domácí espresso.',
    heroImages: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-armonico-1-kg-260395.jpg?v=1722618983',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-intenso-1-kg-194684.jpg?v=1722618986',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-gentile-05-kg-776445.jpg?v=1722618986',
    ],
  },
  {
    id: 'capsules',
    label: 'Kapsle Nespresso',
    headline: 'Recyklovatelné kapsle s rychlou volbou podle typu směsi.',
    description:
      'Zde naleznete zcela recyklovatelné kapsle do Nespresso kávovarů Caffé Musetti. Přehledně rozdělené na Intenso, Armonico a Gentile.',
    shortNote: '3 produkty',
    href: '#kapsle-nespresso',
    shopUrl: 'https://www.musettishop.cz/kapsle-nespresso-caffe-musetti',
    accent: '#8a6b59',
    panelClassName: 'from-[#fffaf5] via-[#fffdf9] to-[#efe4d7]',
    audience: 'Pro rychlou přípravu bez kompromisu v chuti a s jasnou variantovou volbou.',
    heroImages: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-armonico-118325.png?v=1734385107',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-gentile-855897.png?v=1734385109',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-intenso-632319.png?v=1734385110',
    ],
  },
  {
    id: 'pods',
    label: 'Pody',
    headline: 'Kompostovatelné pody pro jednoduchý, čistý a rychlý servis.',
    description:
      'Zde naleznete kompostovatelné pody v různých baleních od Caffé Musetti Gentile, Armonico a Intenso. Vizuálně jasné, produktově srozumitelné a snadno porovnatelné.',
    shortNote: '3 produkty',
    href: '#pody',
    shopUrl: 'https://www.musettishop.cz/pody-caffe-musetti',
    accent: '#79886e',
    panelClassName: 'from-[#f7fbf4] via-[#fcfdf9] to-[#e5eedc]',
    audience: 'Pro provozy i domácnosti, kde dává smysl čistá manipulace a udržitelnější formát.',
    heroImages: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-armonico-865874.png?v=1728419224',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-gentile-825652.jpg?v=1728667768',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-intenso-631227.jpg?v=1728667757',
    ],
  },
  {
    id: 'ground',
    label: 'Mletá káva',
    headline: 'Menší balení pro moka konvičku, domácí rytmus a rychlou volbu.',
    description:
      'Zde naleznete mletou kávu v různých baleních od Caffé Musetti. Crearoma, Gold Cuvée i Mio Espresso mají vlastní roli a vlastní typ zákazníka.',
    shortNote: '3 produkty',
    href: '#mleta-kava',
    shopUrl: 'https://www.musettishop.cz/mleta-kava-caffe-musetti',
    accent: '#486a3f',
    panelClassName: 'from-[#f7faf5] via-[#fcfdf9] to-[#dce9d7]',
    audience: 'Pro moka konvičku, menší balení a zákazníky, kteří chtějí rychlý vstup do značky.',
    heroImages: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-macinato-musetti-miscela-gold-cuvee-250g-254504.png?v=1739853920',
      'https://caffe-musetti.s26.cdn-upgates.com/_cache/5/5/55561c49037a86dd4e25d321ccacc125-vyr-123musetti-crearoma-250gr-coffeetrade-mleta-kava.webp',
      'https://caffe-musetti.s26.cdn-upgates.com/_cache/5/4/54c8d4cfdc61c4f4c6dc8117f550498e-musetti-mio-espresso-250g-coffeetrade-cz-mleta-kava.jpg',
    ],
  },
];

export const czProducts: CzProduct[] = [
  {
    slug: 'deca-500g-zrnkovka',
    categoryId: 'beans',
    category: 'Zrnková káva',
    title: 'Caffé Musetti Deca 500 g',
    shortDescription:
      'Bezkofeinová káva s jemným aromatem a plnou dochutí pro zákazníky, kteří chtějí chuť bez kofeinu.',
    price: '280 Kč',
    variants: ['500 g'],
    href: 'https://www.musettishop.cz/p/bezkofeinova-kava-museti-zrnkova',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-deca-05-kg-157242.jpg?v=1722618986',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-deca-05-kg-211300.png?v=1722842062',
    ],
  },
  {
    slug: 'armonico-1kg-zrnkovka',
    categoryId: 'beans',
    category: 'Zrnková káva',
    title: 'Caffé Musetti Armonico 1 kg',
    shortDescription:
      'Vyvážená směs se skvělou cremou pro zákazníky, kteří chtějí harmonické a jisté espresso.',
    price: '569 Kč',
    variants: ['1 kg'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-armonico-1-kg-zrnkova-kava',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-armonico-1-kg-260395.jpg?v=1722618983',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-armonico-1-kg-151264.png?v=1722841876',
    ],
  },
  {
    slug: 'gentile-500g-zrnkovka',
    categoryId: 'beans',
    category: 'Zrnková káva',
    title: 'Caffé Musetti Gentile 500 g',
    shortDescription:
      'Jemnější profil s nízkým obsahem kofeinu a sladší aromatikou pro klidnější každodenní přípravu.',
    price: '398 Kč',
    variants: ['500 g'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-gentile-500g-zrnkova-kava',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-gentile-05-kg-776445.jpg?v=1722618986',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-gentile-05-kg-774786.png?v=1722841983',
    ],
  },
  {
    slug: 'intenso-1kg-zrnkovka',
    categoryId: 'beans',
    category: 'Zrnková káva',
    title: 'Caffé Musetti Intenso 1 kg',
    shortDescription:
      'Intenzivní směs s plným tělem a trvalou dochutí pro zákazníky, kteří chtějí výrazný šálek bez kompromisu.',
    price: '499 Kč',
    variants: ['1 kg'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-intenso-1kg',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-intenso-1-kg-194684.jpg?v=1722618986',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-in-grani-intenso-1-kg-259754.jpg?v=1722841986',
    ],
  },
  {
    slug: 'armonico-kapsle',
    categoryId: 'capsules',
    category: 'Kapsle Nespresso',
    title: 'Caffé Musetti Armonico kapsle',
    shortDescription:
      'Vyvážená a krémová kapsle s tóny kakaa, čokolády a lískových oříšků.',
    price: '94 Kč',
    variants: ['10 ks', '50 ks'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-armonico-kapsle-nespresso-18-30-50-100ks',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-armonico-118325.png?v=1734385107',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-armonico-459948.png?v=1734339739',
    ],
  },
  {
    slug: 'gentile-kapsle',
    categoryId: 'capsules',
    category: 'Kapsle Nespresso',
    title: 'Caffé Musetti Gentile kapsle',
    shortDescription:
      'Aromatická a jemnější kapsle s ovocnými a mandlovými tóny pro lehčí profil a moderní zákazníky.',
    price: '99 Kč',
    variants: ['10 ks', '50 ks'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-gentile-kapsle-nespresso-18-30-50-100-ks',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-gentile-855897.png?v=1734385109',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-gentile-568334.png?v=1734339765',
    ],
  },
  {
    slug: 'intenso-kapsle',
    categoryId: 'capsules',
    category: 'Kapsle Nespresso',
    title: 'Caffé Musetti Intenso kapsle',
    shortDescription:
      'Intenzita 5/5, tóny kakaa a pečiva, silná a krémová chuť pro nejvýraznější kapslový výběr.',
    price: '89 Kč',
    variants: ['10 ks', '50 ks'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-intenso-kapsle-nespresso-18-30-50-100-ks',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-intenso-632319.png?v=1734385110',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/capsule-di-caffe-in-alluminio-musetti-compatibili-nespresso-miscela-intenso-139615.jpg?v=1734339799',
    ],
  },
  {
    slug: 'armonico-pods',
    categoryId: 'pods',
    category: 'Pody',
    title: 'Caffé Musetti Armonico Pods',
    shortDescription:
      'Kompostovatelné pody pro udržitelnější provoz a vyváženou extrakci bez zbytečné složitosti.',
    price: '118 Kč',
    variants: ['18 ks', '30 ks', '50 ks', '100 ks'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-gentile-pods-18-30-50-100-ks',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-armonico-865874.png?v=1728419224',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-armonico-270251.png?v=1728419224',
    ],
  },
  {
    slug: 'gentile-pods',
    categoryId: 'pods',
    category: 'Pody',
    title: 'Caffé Musetti Gentile Pods',
    shortDescription:
      'Kompostovatelné pody s jemnějším profilem pro čistou a pohodlnou přípravu v menších i větších baleních.',
    price: '125 Kč',
    variants: ['18 ks', '30 ks', '50 ks', '100 ks'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-gentile-pods-18-30-50-100-ks-1',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-gentile-825652.jpg?v=1728667768',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-gentile-409819.png?v=1728667768',
    ],
  },
  {
    slug: 'intenso-pods',
    categoryId: 'pods',
    category: 'Pody',
    title: 'Caffé Musetti Intenso Pods',
    shortDescription:
      'Kompostovatelné pody s intenzivnějším charakterem, kakaovými tóny a silnější, krémovou chutí.',
    price: '113 Kč',
    variants: ['18 ks', '30 ks', '50 ks', '100 ks'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-intenso-pods-18-30-50-100-ks',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-intenso-631227.jpg?v=1728667757',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/cialde-di-caffe-compostabili-musetti-miscela-intenso-252793.jpg?v=1728667758',
    ],
  },
  {
    slug: 'crearoma-mleta',
    categoryId: 'ground',
    category: 'Mletá káva',
    title: 'Caffé Musetti Crearoma 250 g',
    shortDescription:
      'Směs 40 % Arabica a 60 % Robusta doporučená i jako ranní káva díky vyššímu obsahu kofeinu.',
    price: '135 Kč',
    variants: ['250 g'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-crearoma-250g-mleta-kava',
    images: [
      'https://caffe-musetti.s26.cdn-upgates.com/_cache/5/5/55561c49037a86dd4e25d321ccacc125-vyr-123musetti-crearoma-250gr-coffeetrade-mleta-kava.webp',
      'https://caffe-musetti.s26.cdn-upgates.com/_cache/5/5/55561c49037a86dd4e25d321ccacc125-vyr-123musetti-crearoma-250gr-coffeetrade-mleta-kava.webp',
    ],
  },
  {
    slug: 'gold-cuvee-mleta',
    categoryId: 'ground',
    category: 'Mletá káva',
    title: 'Caffé Musetti Gold Cuvée 250 g',
    shortDescription:
      'Speciální výroční směs s bohatým aromatickým buketem, jemnou kyselostí a trvalými kakaovými tóny.',
    price: '212 Kč',
    variants: ['250 g'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-gold-cuve-250g-mleta-kava',
    images: [
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-macinato-musetti-miscela-gold-cuvee-250g-254504.png?v=1739853920',
      'https://cdn.shopify.com/s/files/1/0631/3947/9768/files/caffe-macinato-musetti-miscela-gold-cuvee-250g-254504.png?v=1739853920',
    ],
  },
  {
    slug: 'mio-espresso-mleta',
    categoryId: 'ground',
    category: 'Mletá káva',
    title: 'Caffé Musetti Mio Espresso 250 g',
    shortDescription:
      'Ikonická mletá káva pro moka rytmus a tradiční domácí přípravu v kompaktním balení.',
    price: '160 Kč',
    variants: ['250 g'],
    href: 'https://www.musettishop.cz/p/caffe-musetti-mio-espresso-250g-mleta-kava',
    images: [
      'https://caffe-musetti.s26.cdn-upgates.com/_cache/5/4/54c8d4cfdc61c4f4c6dc8117f550498e-musetti-mio-espresso-250g-coffeetrade-cz-mleta-kava.jpg',
      'https://caffe-musetti.s26.cdn-upgates.com/_cache/5/4/54c8d4cfdc61c4f4c6dc8117f550498e-musetti-mio-espresso-250g-coffeetrade-cz-mleta-kava.jpg',
    ],
  },
];
