const tripsData = {
  kicker: "UPCOMING ADVENTURES",
  title: "Featured Upcoming Trips",
  description:
    "Join our most popular guided tours from Istanbul • Limited spots available!",
  buttonText: "View All Trips",
  note: "🚐 Transportation • Equipment • Meals Included • Expert Guide",

  trips: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      level: "Easy",
      category: "Hiking",
      title: "Moonlight Trail",
      location: "Şile",
      duration: "1 Day",
      date: "Sat, Dec 14",
      price: "€75",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      level: "Moderate",
      category: "Hiking",
      title: "Rock Ridge Hike",
      location: "Belgrad Forest",
      duration: "1 Day",
      date: "Sun, Dec 15",
      price: "€65",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
      level: "Moderate",
      category: "Rafting",
      title: "Secrets Canyon",
      location: "Kandıra",
      duration: "1 Day",
      date: "Sat, Dec 21",
      price: "€85",
      featured: true,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=900&q=80",
      level: "Hard",
      category: "Trekking",
      title: "Winter Wonderland",
      location: "Uludağ",
      duration: "2 Days",
      date: "Dec 28-29",
      price: "€149",
    },
  ],
};

export default tripsData;