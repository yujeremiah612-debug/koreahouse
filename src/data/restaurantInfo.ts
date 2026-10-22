export interface OperatingHours {
  day: string;
  lunch: string;
  dinner: string;
  full: string;
}

export const RESTAURANT_INFO = {
  name: "Korea House Korean Cuisine & Sushi",
  shortName: "Korea House",
  tagline: "Authentic Korean Cuisine. Fresh Sushi. Unforgettable Flavor.",
  establishedYear: 1979,
  address: {
    street: "2598 Royal Lane",
    city: "Dallas",
    state: "TX",
    zip: "75229",
    full: "2598 Royal Lane, Dallas, TX 75229",
    neighborhood: "Dallas Koreatown / Asian Trade District"
  },
  phone: "(972) 243-0434",
  phoneRaw: "+19722430434",
  officialWebsite: "https://koreahousedallas.com/",
  googleSearchUrl: "https://www.google.com/search?q=Korea+House+Korean+Cuisine+%26+Sushi",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=2598+Royal+Lane+Dallas+TX+75229",
  hours: [
    { day: "Monday", lunch: "11:00 AM – 3:00 PM", dinner: "3:00 PM – 10:00 PM", full: "11:00 AM – 10:00 PM" },
    { day: "Tuesday", lunch: "11:00 AM – 3:00 PM", dinner: "3:00 PM – 10:00 PM", full: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", lunch: "11:00 AM – 3:00 PM", dinner: "3:00 PM – 10:00 PM", full: "11:00 AM – 10:00 PM" },
    { day: "Thursday", lunch: "11:00 AM – 3:00 PM", dinner: "3:00 PM – 10:00 PM", full: "11:00 AM – 10:00 PM" },
    { day: "Friday", lunch: "11:00 AM – 3:00 PM", dinner: "3:00 PM – 10:00 PM", full: "11:00 AM – 10:00 PM" },
    { day: "Saturday", lunch: "11:00 AM – 3:00 PM", dinner: "3:00 PM – 10:00 PM", full: "11:00 AM – 10:00 PM" },
    { day: "Sunday", lunch: "11:00 AM – 3:00 PM", dinner: "3:00 PM – 10:00 PM", full: "11:00 AM – 10:00 PM" }
  ],
  services: [
    "Dine-in with authentic table service",
    "Korean Barbecue and sizzling platters",
    "Full-service artisan sushi and sashimi bar",
    "Generous lunch bento boxes and specials",
    "Takeout and online ordering for pickup",
    "Comfortable seating for families and private groups"
  ]
};
