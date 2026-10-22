export interface MenuItem {
  id: string;
  name: string;
  koreanName?: string;
  category: string;
  price: string;
  description: string;
  tags?: string[];
  image?: string;
  isSignature?: boolean;
  spicyLevel?: number; // 0: none, 1: mild, 2: spicy, 3: very spicy
}

export const MENU_CATEGORIES = [
  "All",
  "Appetizers",
  "Korean BBQ",
  "Rice & Bibimbap",
  "Soups & Stews",
  "Noodles",
  "Sushi Rolls",
  "Nigiri & Sashimi",
  "Japanese Specialties",
  "Beverages"
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- APPETIZERS ---
  {
    id: "app-1",
    name: "Haemul Pajeon",
    koreanName: "해물파전",
    category: "Appetizers",
    price: "$15.99",
    description: "Crispy traditional Korean scallion pancake generously packed with shrimp, tender squid, and seasonal green onions. Served with seasoned soy-chili dipping sauce.",
    tags: ["Customer Favorite", "Shareable"],
    image: "/src/assets/images/korean_seafood_pancake_1792635225710.jpg",
    isSignature: true,
    spicyLevel: 0
  },
  {
    id: "app-2",
    name: "Kimchi Pajeon",
    koreanName: "김치전",
    category: "Appetizers",
    price: "$13.99",
    description: "Pan-fried savory pancake infused with finely aged fermented kimchi, sliced scallions, and delicate spices for a savory, tangy crunch.",
    tags: ["Vegetarian Friendly"],
    spicyLevel: 1
  },
  {
    id: "app-3",
    name: "Gun Mandu",
    koreanName: "군만두",
    category: "Appetizers",
    price: "$8.99",
    description: "Pan-crisped Korean dumplings stuffed with seasoned minced pork, scallions, chives, and tofu, served with a sweet soy-vinegar glaze.",
    tags: ["Crispy", "Popular"],
    spicyLevel: 0
  },
  {
    id: "app-4",
    name: "Dukbokki",
    koreanName: "떡볶이",
    category: "Appetizers",
    price: "$13.99",
    description: "Chewy cylinder rice cakes simmered with sliced fish cakes and boiled egg in a rich, sweet-and-spicy gochujang chili sauce.",
    tags: ["Street Food Classic"],
    spicyLevel: 2
  },
  {
    id: "app-5",
    name: "Edamame",
    koreanName: "에다마메",
    category: "Appetizers",
    price: "$5.99",
    description: "Steamed Japanese young soybeans tossed with coarse Himalayan sea salt. Light, healthy, and refreshing starter.",
    tags: ["Vegetarian", "Gluten-Free"],
    spicyLevel: 0
  },
  {
    id: "app-6",
    name: "Shrimp Tempura",
    koreanName: "새우튀김",
    category: "Appetizers",
    price: "$10.99",
    description: "Light and crispy Japanese-style batter-fried jumbo shrimp accompanied by sweet tentsuyu dipping broth.",
    tags: ["Japanese Starter"],
    spicyLevel: 0
  },

  // --- KOREAN BBQ & GRILLED MEATS ---
  {
    id: "bbq-1",
    name: "LA Galbi",
    koreanName: "LA 갈비",
    category: "Korean BBQ",
    price: "$28.99",
    description: "House-marinated tender cut beef short ribs, grilled over open heat with our signature 40-year fruit and soy sauce marinade. Served sizzling on a cast-iron skillet with steamed rice and daily banchan.",
    tags: ["Signature Dish", "Chef Recommendation"],
    image: "/src/assets/images/korean_la_galbi_bbq_1792635195007.jpg",
    isSignature: true,
    spicyLevel: 0
  },
  {
    id: "bbq-2",
    name: "Bulgogi",
    koreanName: "소불고기",
    category: "Korean BBQ",
    price: "$24.99",
    description: "Thinly sliced prime ribeye beef marinated in an artisanal sweet soy, garlic, sesame oil, and pear marinade. Stir-grilled with sweet onions and scallions.",
    tags: ["All-Time Classic", "Sweet & Savory"],
    isSignature: true,
    spicyLevel: 0
  },
  {
    id: "bbq-3",
    name: "Spicy Pork Bulgogi (Jaeyook)",
    koreanName: "제육볶음",
    category: "Korean BBQ",
    price: "$22.99",
    description: "Tender sliced pork shoulder wok-seared with caramelized onions and scallions in a fiery red pepper chili gochujang sauce.",
    tags: ["Spicy Favorite"],
    spicyLevel: 2
  },
  {
    id: "bbq-4",
    name: "Samgyupsal Gui",
    koreanName: "삼겹살 구이",
    category: "Korean BBQ",
    price: "$23.99",
    description: "Thick cut, succulent pork belly grilled to golden perfection. Served with ssamjang fermented dipping paste, roasted garlic cloves, and fresh lettuce wraps.",
    tags: ["Traditional Favorite"],
    spicyLevel: 0
  },
  {
    id: "bbq-5",
    name: "Dak Gui (Chicken BBQ)",
    koreanName: "닭구이",
    category: "Korean BBQ",
    price: "$20.99",
    description: "Boneless chicken thigh meat marinated in your choice of mild savory ginger-soy or sweet-spicy gochujang glaze, grilled tender over flames.",
    tags: ["Poultry Classic"],
    spicyLevel: 1
  },

  // --- RICE & BIBIMBAP ---
  {
    id: "rice-1",
    name: "Dolsot Bibimbap",
    koreanName: "돌솥 비빔밥",
    category: "Rice & Bibimbap",
    price: "$16.99",
    description: "Served in a blazing hot earthenware stone pot that crisps the rice layer into crunchy nurungji. Topped with seasoned beef bulgogi, spinach, julienned carrots, shiitake mushrooms, bean sprouts, and a golden raw egg yolk with gochujang on the side.",
    tags: ["House Specialty", "Hot Stone Pot"],
    image: "/src/assets/images/korean_dolsot_bibimbap_1792635194705.jpg",
    isSignature: true,
    spicyLevel: 1
  },
  {
    id: "rice-2",
    name: "Classic Bibimbap",
    koreanName: "비빔밥",
    category: "Rice & Bibimbap",
    price: "$15.49",
    description: "Warm steamed rice crowned with vibrant seasoned namul vegetables, sunny-side fried egg, choice of beef or tofu, and house chili pepper paste.",
    tags: ["Healthy Choice"],
    spicyLevel: 1
  },
  {
    id: "rice-3",
    name: "Kimchi Fried Rice",
    koreanName: "김치볶음밥",
    category: "Rice & Bibimbap",
    price: "$14.49",
    description: "Wok-fried Jasmine rice with aged pungent kimchi, diced pork belly, sesame seeds, and topped with a runny fried egg and roasted seaweed strips.",
    tags: ["Comfort Classic"],
    spicyLevel: 2
  },

  // --- SOUPS & STEWS ---
  {
    id: "soup-1",
    name: "Soondubu Jjigae",
    koreanName: "해물 순두부찌개",
    category: "Soups & Stews",
    price: "$15.99",
    description: "Fiery, velvety silken tofu bubbling in an earthenware crock with clams, shrimp, mushrooms, and scallions in a rich seafood chili broth. Fresh egg dropped table-side.",
    tags: ["Signature Stew", "Hearty Comfort"],
    image: "/src/assets/images/korean_soondubu_stew_1792635226329.jpg",
    isSignature: true,
    spicyLevel: 2
  },
  {
    id: "soup-2",
    name: "Kimchi Jjigae",
    koreanName: "김치찌개",
    category: "Soups & Stews",
    price: "$15.49",
    description: "Deep, slow-simmered stew prepared with well-fermented aged sour kimchi, thick-cut pork belly, and firm tofu cubes in a deeply flavored spicy broth.",
    tags: ["Korean Staple"],
    spicyLevel: 2
  },
  {
    id: "soup-3",
    name: "Galbi Tang",
    koreanName: "갈비탕",
    category: "Soups & Stews",
    price: "$17.99",
    description: "Clear, deeply nourishing broth made by slow-cooking prime beef short ribs for 8 hours with daikon radish, sweet potato glass noodles, and jujube dates.",
    tags: ["Restorative Broth"],
    spicyLevel: 0
  },
  {
    id: "soup-4",
    name: "Yukgaejang",
    koreanName: "육개장",
    category: "Soups & Stews",
    price: "$16.49",
    description: "Robust spicy shredded brisket beef soup simmered with generous scallions, gosari (bracken fern), bean sprouts, egg ribbons, and glass noodles.",
    tags: ["Spicy Broth"],
    spicyLevel: 2
  },
  {
    id: "soup-5",
    name: "Duk Mandu Guk",
    koreanName: "떡만두국",
    category: "Soups & Stews",
    price: "$14.99",
    description: "Sliced oval rice cakes and handmade pork dumplings simmered in a silky beef bone marrow broth, garnished with egg ribbons and nori.",
    tags: ["Traditional New Year Soup"],
    spicyLevel: 0
  },

  // --- NOODLES ---
  {
    id: "nood-1",
    name: "Japchae",
    koreanName: "잡채",
    category: "Noodles",
    price: "$15.99",
    description: "Sweet potato glass noodles stir-fried with wood ear mushrooms, sweet bell peppers, spinach, carrots, and tender beef slivers in fragrant toasted sesame oil.",
    tags: ["Gluten-Free Noodle", "Fan Favorite"],
    isSignature: true,
    spicyLevel: 0
  },
  {
    id: "nood-2",
    name: "Mul Naengmyeon",
    koreanName: "물냉면",
    category: "Noodles",
    price: "$14.99",
    description: "Chewy handmade buckwheat noodles served in an icy, tangy beef and pickled radish broth with sliced beef, Asian pear, and hard-boiled egg.",
    tags: ["Chilled Classic"],
    spicyLevel: 0
  },
  {
    id: "nood-3",
    name: "Bibim Naengmyeon",
    koreanName: "비빔냉면",
    category: "Noodles",
    price: "$14.99",
    description: "Chilled chewy buckwheat noodles tossed in an invigorating sweet, sour, and spicy red chili pepper dressing with cucumber and pear.",
    tags: ["Spicy Cold Noodles"],
    spicyLevel: 2
  },

  // --- SUSHI ROLLS ---
  {
    id: "sushi-1",
    name: "Korea House Special Roll",
    category: "Sushi Rolls",
    price: "$16.99",
    description: "Tempura shrimp, spicy crab, and avocado inside, topped with fresh seared salmon, spicy tuna, unagi glaze, scallions, and masago pearls.",
    tags: ["House Signature Roll"],
    image: "/src/assets/images/sushi_special_rolls_sashimi_1792635210098.jpg",
    isSignature: true,
    spicyLevel: 1
  },
  {
    id: "sushi-2",
    name: "Dallas Roll",
    category: "Sushi Rolls",
    price: "$14.99",
    description: "Tender beef bulgogi, avocado, cucumber, and pickled daikon rolled inside out with sesame seeds and drizzled with sweet teriyaki and sriracha.",
    tags: ["Fusion Favorite"],
    spicyLevel: 1
  },
  {
    id: "sushi-3",
    name: "Dragon Roll",
    category: "Sushi Rolls",
    price: "$15.99",
    description: "Crispy shrimp tempura and cucumber wrapped with thinly sliced BBQ freshwater eel (unagi) and creamy avocado on the outside, glazed with sweet eel sauce.",
    tags: ["Chef Classic"],
    spicyLevel: 0
  },
  {
    id: "sushi-4",
    name: "Rainbow Roll",
    category: "Sushi Rolls",
    price: "$15.49",
    description: "Classic California roll crowned with an array of fresh raw salmon, yellowtail, bigeye tuna, and avocado slices.",
    tags: ["Fresh Assorted Fish"],
    spicyLevel: 0
  },
  {
    id: "sushi-5",
    name: "Spicy Tuna Roll",
    category: "Sushi Rolls",
    price: "$8.99",
    description: "Minced fresh tuna tossed with spicy sriracha sesame sauce and crunchy cucumber, rolled in seasoned sushi rice.",
    tags: ["Classic"],
    spicyLevel: 2
  },
  {
    id: "sushi-6",
    name: "California Roll",
    category: "Sushi Rolls",
    price: "$7.49",
    description: "Imitation crab meat, ripe avocado, and crisp cucumber rolled inside out with toasted sesame seeds.",
    tags: ["Everyday Classic"],
    spicyLevel: 0
  },
  {
    id: "sushi-7",
    name: "Shrimp Tempura Roll",
    category: "Sushi Rolls",
    price: "$9.49",
    description: "Crisp jumbo shrimp tempura, fresh cucumber, and avocado with savory unagi glaze.",
    tags: ["Crispy Roll"],
    spicyLevel: 0
  },

  // --- NIGIRI & SASHIMI ---
  {
    id: "nigiri-1",
    name: "Chef's Nigiri Combo (8 pcs)",
    category: "Nigiri & Sashimi",
    price: "$24.99",
    description: "Artisan hand-pressed sushi featuring fresh Atlantic Salmon (Sake), Bigeye Tuna (Maguro), Yellowtail (Hamachi), and Freshwater Eel (Unagi). Served with miso soup.",
    tags: ["Artisan Selection"],
    isSignature: true,
    spicyLevel: 0
  },
  {
    id: "nigiri-2",
    name: "Sashimi Deluxe (12 pcs)",
    category: "Nigiri & Sashimi",
    price: "$29.99",
    description: "Thick-cut slices of pristine raw fish: 4 pcs Atlantic Salmon, 4 pcs Bigeye Tuna, and 4 pcs Hamachi with fresh grated wasabi and shiso leaves.",
    tags: ["Premium Raw Fish"],
    spicyLevel: 0
  },
  {
    id: "nigiri-3",
    name: "Salmon Nigiri (2 pcs)",
    category: "Nigiri & Sashimi",
    price: "$6.49",
    description: "Buttery slices of fresh Atlantic salmon over hand-formed seasoned sushi rice.",
    tags: ["A La Carte"],
    spicyLevel: 0
  },
  {
    id: "nigiri-4",
    name: "Tuna Nigiri (2 pcs)",
    category: "Nigiri & Sashimi",
    price: "$6.99",
    description: "Ruby red bigeye tuna over seasoned sushi rice.",
    tags: ["A La Carte"],
    spicyLevel: 0
  },

  // --- JAPANESE SPECIALTIES & BROILED FISH ---
  {
    id: "jap-1",
    name: "Broiled Mackerel (Godeungeo Gui)",
    koreanName: "고등어 구이",
    category: "Japanese Specialties",
    price: "$16.99",
    description: "Whole fresh Atlantic mackerel lightly salted and broiled over direct flame until the skin is blistered and crisp while the meat remains juicy. Served with lemon and wasabi soy.",
    tags: ["Seafood Specialty"],
    isSignature: true,
    spicyLevel: 0
  },
  {
    id: "jap-2",
    name: "Salmon Teriyaki Bento",
    category: "Japanese Specialties",
    price: "$18.99",
    description: "Grilled fresh Atlantic salmon fillet glazed in house-made teriyaki sauce, served in a traditional bento box with California roll, steamed rice, tempura, and salad.",
    tags: ["Bento Box"],
    spicyLevel: 0
  },
  {
    id: "jap-3",
    name: "Bulgogi & Sushi Bento Combo",
    category: "Japanese Specialties",
    price: "$19.99",
    description: "The best of both worlds: marinated beef bulgogi alongside 4 pieces of California roll, 2 pieces of nigiri, gyoza, salad, and steamed white rice.",
    tags: ["Best Seller Combo"],
    isSignature: true,
    spicyLevel: 0
  },

  // --- BEVERAGES ---
  {
    id: "bev-1",
    name: "Chamisul Fresh Soju",
    koreanName: "참이슬",
    category: "Beverages",
    price: "$11.99",
    description: "Iconic clear distilled Korean spirit, crisp and smooth. Ideal pairing for Korean BBQ and stews (375ml bottle).",
    tags: ["Korean Spirits"],
    spicyLevel: 0
  },
  {
    id: "bev-2",
    name: "Korean Hite / Cass Beer",
    koreanName: "맥주",
    category: "Beverages",
    price: "$6.49",
    description: "Refreshing, ice-cold Korean lager beer. Clean finish that cuts through rich grilled meats.",
    tags: ["Beer"],
    spicyLevel: 0
  },
  {
    id: "bev-3",
    name: "Sikhe (Sweet Rice Punch)",
    koreanName: "식혜",
    category: "Beverages",
    price: "$3.99",
    description: "Traditional Korean sweet digestive beverage brewed with malted barley and soft grains of rice.",
    tags: ["Non-Alcoholic", "Traditional"],
    spicyLevel: 0
  },
  {
    id: "bev-4",
    name: "Iced Green Tea / Barley Tea (Boricha)",
    koreanName: "보리차",
    category: "Beverages",
    price: "$2.99",
    description: "Toasted roasted barley tea or chilled green tea, soothing, zero sugar, endlessly comforting.",
    tags: ["Non-Alcoholic"],
    spicyLevel: 0
  }
];
