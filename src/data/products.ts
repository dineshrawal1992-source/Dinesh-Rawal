export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  mood: string;
  moodTags: string[];
  description: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  whenToWear: string;
  imageUrl: string;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "midnight-ruin",
    name: "Midnight Ruin",
    tagline: "Soft doesn't mean safe.",
    price: 125,
    mood: "Soft & Dangerous",
    moodTags: ["seductive", "dangerous", "intoxicating"],
    description: "A fragrance that lures them in with innocent sweetness, only to trap them in a dark, complex embrace. You don't wear this. You become it.",
    notes: {
      top: "Black Cherry, Bitter Almond",
      heart: "Turkish Rose, Jasmine Sambac",
      base: "Dark Vanilla, Roasted Tonka, Vetiver"
    },
    whenToWear: "When you want them to remember you long after you've left the room.",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true
  },
  {
    id: "cold-shoulder",
    name: "Cold Shoulder",
    tagline: "Look, don't touch.",
    price: 110,
    mood: "Cold & Untouchable",
    moodTags: ["cold", "untouchable", "elegant"],
    description: "The scent of a woman who knows her worth and doesn't need your validation. Crisp, clean, and devastatingly aloof.",
    notes: {
      top: "Bergamot, White Tea",
      heart: "Iris, Violet Leaf",
      base: "White Musk, Cedarwood, Ambroxan"
    },
    whenToWear: "Power meetings, art gallery openings, or anytime you need an invisible armor.",
    imageUrl: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true
  },
  {
    id: "toxic-trait",
    name: "Toxic Trait",
    tagline: "You know it's bad for you.",
    price: 115,
    mood: "Sweet but Toxic",
    moodTags: ["sweet", "addictive", "chaotic"],
    description: "An unapologetic sugar rush that dries down into something dark and earthy. It's the text you shouldn't send, bottled.",
    notes: {
      top: "Spun Sugar, Pink Pepper",
      heart: "Marshmallow, Orange Blossom",
      base: "Dark Patchouli, Leather, Amber"
    },
    whenToWear: "Nights out that turn into mornings, making bad decisions look good.",
    imageUrl: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=1000&auto=format&fit=crop",
    isBestSeller: true
  },
  {
    id: "2am-text",
    name: "2 AM Text",
    tagline: "Late night energy.",
    price: 130,
    mood: "Late Night Energy",
    moodTags: ["intimate", "chaotic", "magnetic"],
    description: "The blurred lines between awake and dreaming. A shot of espresso wrapped in warm, skin-like amber. Pure adrenaline and intimacy.",
    notes: {
      top: "Espresso, Cardamom",
      heart: "Rum, Cocoa Absolute",
      base: "Skin Musk, Amber, Sandalwood"
    },
    whenToWear: "When the sun goes down and the rules no longer apply.",
    imageUrl: "https://images.unsplash.com/photo-1615397323758-2e212552a923?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "pretty-villain",
    name: "Pretty Villain",
    tagline: "The bad guy, but make it aesthetic.",
    price: 140,
    mood: "Soft & Dangerous",
    moodTags: ["dominant", "confident", "luxurious"],
    description: "Why play the hero when the villain has better clothes? A commanding blend of leather and dark florals that demands respect.",
    notes: {
      top: "Saffron, Black Pepper",
      heart: "Black Rose, Orris",
      base: "Russian Leather, Oud, Labdanum"
    },
    whenToWear: "When you're the main character and you're ready to cause a little trouble.",
    imageUrl: "https://images.unsplash.com/photo-1616604847477-a503e461e12a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "guilty-conscience",
    name: "Guilty Conscience",
    tagline: "Sorry, not sorry.",
    price: 110,
    mood: "Sweet but Toxic",
    moodTags: ["rebellious", "spicy", "unapologetic"],
    description: "A sharp, spicy opening that settles into a creamy, unapologetic woodiness. For the days you choose yourself over everyone else.",
    notes: {
      top: "Pink Grapefruit, Ginger",
      heart: "Cinnamon, Nutmeg",
      base: "Sandalwood, Vanilla Bean, Musk"
    },
    whenToWear: "When you need to leave an impression that lingers like a rumor.",
    imageUrl: "https://images.unsplash.com/photo-1595535373300-d435107c115a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "overthinking",
    name: "Overthinking",
    tagline: "Lost in the details.",
    price: 120,
    mood: "Cold & Untouchable",
    moodTags: ["complex", "moody", "intellectual"],
    description: "A fragrance that evolves constantly, just like your mind. Green, woody, and slightly melancholic.",
    notes: {
      top: "Fig Leaf, Earl Grey Tea",
      heart: "Lavender, Clary Sage",
      base: "Cedarwood, Oakmoss, Vetiver"
    },
    whenToWear: "Rainy days, reading in cafes, or when you want to be left alone with your thoughts.",
    imageUrl: "https://images.unsplash.com/photo-1605553911162-4211100f28e6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "eye-contact",
    name: "Eye Contact",
    tagline: "Hold it a second too long.",
    price: 135,
    mood: "Late Night Energy",
    moodTags: ["magnetic", "sensual", "hypnotic"],
    description: "The tension of a gaze that lasts just a fraction longer than it should. A hypnotic, pulsing floral that draws them closer.",
    notes: {
      top: "Pear, Pink Pepper",
      heart: "Tuberose, Ylang-Ylang",
      base: "Tonka Bean, Patchouli, Cashmeran"
    },
    whenToWear: "First dates, dimly lit bars, and moments of high stakes.",
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "do-not-disturb",
    name: "Do Not Disturb",
    tagline: "My own world.",
    price: 105,
    mood: "Cold & Untouchable",
    moodTags: ["introverted", "cozy", "intimate"],
    description: "The ultimate skin scent. It doesn't shout; it whispers. A soft, clean aura that feels like your skin but infinitely better.",
    notes: {
      top: "Ambrette Seed, Pear",
      heart: "Iris, Rose Petals",
      base: "Skin Musk, Cashmere Wood, Iso E Super"
    },
    whenToWear: "Lazy Sundays, self-care nights, or when you're dressing just for yourself.",
    imageUrl: "https://images.unsplash.com/photo-1615397323758-2e212552a923?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "revenge-dress",
    name: "Revenge Dress",
    tagline: "Make them regret it.",
    price: 150,
    mood: "Soft & Dangerous",
    moodTags: ["bold", "unforgettable", "luxurious"],
    description: "The olfactory equivalent of showing up looking absolutely devastating. Rich, dark, and impossible to ignore.",
    notes: {
      top: "Dark Plum, Black Currant",
      heart: "Midnight Orchid, Incense",
      base: "Oud, Dark Chocolate, Patchouli"
    },
    whenToWear: "Running into your ex, high-profile events, or anytime you need to be the center of attention.",
    imageUrl: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop"
  }
];
