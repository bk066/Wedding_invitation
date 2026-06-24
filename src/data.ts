import { TimelineEvent, FamilySide } from "./types";

export const BRIDE_DETAILS = {
  title: "Ayushmati",
  name: "Khushboo",
  grandparents: "Late Geeta Devi & Late Motilal Jalan",
  parents: "Smt. Santosh & Shri Santosh Kumar Jalan",
  emoji: "✨",
  note: "A soul of grace and vibrant dreams, stepping into a lifetime of endless laughter and gold-trimmed memories."
};

export const GROOM_DETAILS = {
  title: "Ayushman",
  name: "Abhishek",
  grandparents: "Late Kalabati Devi Sahji & Late Gopiramji Singhal",
  parents: "Late Sunita Devi Sahji & Shri Rameshji Singhal",
  emoji: "💫",
  note: "A heart of strength and modern intellect, ready to embark on a beautiful saga of shared steps and synchronized beats."
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "mehndi",
    date: "June 30, 2026",
    day: "Tuesday",
    title: "Mehndi Ceremony",
    time: "1:00 PM",
    emoji: "🌿",
    description: "Swirls of deep green henna and acoustic melodies. Let's paint her hands with stories of love, music, and celebration."
  },
  {
    id: "mayra",
    date: "June 30, 2026",
    day: "Tuesday",
    title: "Mayra",
    time: "2:00 PM",
    emoji: "🎁",
    description: "A traditional custom celebrating deep maternal roots, filled with gifts, sweet delicacies, and timeless blessings."
  },
  {
    id: "tilak",
    date: "June 30, 2026",
    day: "Tuesday",
    title: "Tilak Ceremony",
    time: "6:00 PM",
    emoji: "🔴",
    description: "Marking the sacred alliance with traditional vermillion, holy chants, and the formal welcome of the groom's family."
  },
  {
    id: "sangeet",
    date: "June 30, 2026",
    day: "Tuesday",
    title: "Sangeet Night",
    time: "8:00 PM",
    emoji: "🎵",
    description: "Turn up the bass and dim the lights. A high-energy, neon-traditional dance showdown where the beats never end."
  },
  {
    id: "carnival",
    date: "July 01, 2026",
    day: "Wednesday",
    title: "Telwan & Carnival",
    time: "11:00 AM",
    emoji: "🎪",
    description: "A sun-kissed morning of joy, playful turmeric colors, gourmet bites, and immersive traditional carnival fun."
  },
  {
    id: "phere",
    date: "July 01, 2026",
    day: "Wednesday",
    title: "Dhukav & Phere",
    time: "9:00 PM onwards",
    emoji: "🔥",
    description: "Shubh Parinayotsav. Seven sacred vows under the canopy of stars, binding two souls into one eternal cosmic dance."
  }
];

export const CHUNRI_PAKSH: FamilySide[] = [
  {
    sideTitle: "Hiralal Motilal Jalan",
    members: ["Ganesh Mandir ke Paas, Ratangarh, Rajasthan", "Guwahati"],
    location: "Rajasthan & Assam"
  },
  {
    sideTitle: "Siddhi Vinayak Enterprise",
    members: ["Tokobari, Guwahati"],
    location: "Guwahati"
  }
];

export const SEHRA_PAKSH: FamilySide[] = [
  {
    sideTitle: "Balaji Coal Depot",
    members: ["Khanapara, Guwahati", "Delhi"],
    location: "Guwahati & Delhi"
  },
  {
    sideTitle: "Abhishek Singhal & Associates",
    members: ["Guwahati", "New Delhi"],
    location: "Guwahati & New Delhi"
  }
];

export const VENUE_DETAILS = {
  name: "PALM GREEN HOTEL & RESORT",
  address: "GT Karnal Road, Bakoli, New Delhi - 110036",
  directionsUrl: "https://maps.google.com/?q=Palm+Green+Hotel+and+Resort+GT+Karnal+Road+Bakoli+New+Delhi+110036",
  description: "A breathtaking oasis of pristine lush lawns, opulent banquet architecture, and luxurious serenity on the outskirts of New Delhi."
};
