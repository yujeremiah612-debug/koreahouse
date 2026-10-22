export interface GalleryItem {
  id: string;
  title: string;
  category: "Korean BBQ" | "Korean Classics" | "Sushi & Rolls" | "Atmosphere";
  image: string;
  aspectRatio: "wide" | "square" | "tall";
  description: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Korean BBQ",
  "Korean Classics",
  "Sushi & Rolls",
  "Atmosphere"
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Artisan Banquet Table at Korea House",
    category: "Korean Classics",
    image: "/src/assets/images/hero_korean_bbq_sushi_1792635194361.jpg",
    aspectRatio: "wide",
    description: "A lavish Korean BBQ banquet complete with fresh assorted banchan, Korean stews, and hand-crafted sushi."
  },
  {
    id: "gal-2",
    title: "Sizzling LA Galbi Beef Short Ribs",
    category: "Korean BBQ",
    image: "/src/assets/images/korean_la_galbi_bbq_1792635195007.jpg",
    aspectRatio: "square",
    description: "Prime beef short ribs caramelized in our signature soy marinade, served steaming hot with toasted sesame and scallions."
  },
  {
    id: "gal-3",
    title: "Dolsot Bibimbap in Sizzling Stone Bowl",
    category: "Korean Classics",
    image: "/src/assets/images/korean_dolsot_bibimbap_1792635194705.jpg",
    aspectRatio: "square",
    description: "Crispy bottom rice layered with seasoned wild vegetables, savory bulgogi beef, golden yolk, and red pepper gochujang."
  },
  {
    id: "gal-4",
    title: "Chef's Nigiri & Specialty Roll Platter",
    category: "Sushi & Rolls",
    image: "/src/assets/images/sushi_special_rolls_sashimi_1792635210098.jpg",
    aspectRatio: "square",
    description: "Pristine salmon and tuna nigiri served alongside fresh artisan specialty rolls, pickled ginger, and freshly ground wasabi."
  },
  {
    id: "gal-5",
    title: "Korea House Dallas Dining Hall & Ambiance",
    category: "Atmosphere",
    image: "/src/assets/images/restaurant_interior_dining_1792635210502.jpg",
    aspectRatio: "wide",
    description: "Warm wooden accents, glowing lantern fixtures, and spacious booth seating welcoming Dallas diners since 1979."
  },
  {
    id: "gal-6",
    title: "Bubbling Seafood Soondubu Jjigae",
    category: "Korean Classics",
    image: "/src/assets/images/korean_soondubu_stew_1792635226329.jpg",
    aspectRatio: "square",
    description: "Silken soft tofu, clams, enoki mushrooms, and fiery broth bubbling hot in a traditional earthenware ttukbaegi bowl."
  },
  {
    id: "gal-7",
    title: "Crispy Golden Haemul Pajeon",
    category: "Korean Classics",
    image: "/src/assets/images/korean_seafood_pancake_1792635225710.jpg",
    aspectRatio: "square",
    description: "Savory scallion and mixed seafood pancake fried crisp to order, served with our house dipping soy vinegar sauce."
  }
];
