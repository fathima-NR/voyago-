const IMG = (id) => `https://images.unsplash.com/${id}?w=800&q=80`;

const destinations = [
  { name: "Santorini", country: "Greece", region: "Europe", tours: 24, img: IMG("photo-1570077188670-e3a8d69ac5ff") },
  { name: "Bali", country: "Indonesia", region: "Asia", tours: 32, img: IMG("photo-1537996194471-e657df975ab4") },
  { name: "Maldives", country: "Maldives", region: "Asia", tours: 18, img: IMG("photo-1514282401047-d79a71a590e8") },
  { name: "Paris", country: "France", region: "Europe", tours: 40, img: IMG("photo-1502602898657-3e91760cbb34") },
  { name: "Kyoto", country: "Japan", region: "Asia", tours: 21, img: IMG("photo-1493976040374-85c8e12f0c0e") },
  { name: "Dubai", country: "UAE", region: "Middle East", tours: 28, img: IMG("photo-1512453979798-5ea266f8880c") },
  { name: "Swiss Alps", country: "Switzerland", region: "Europe", tours: 15, img: IMG("photo-1530122037265-a5f1f91d3b99") },
  { name: "New York", country: "USA", region: "Americas", tours: 36, img: IMG("photo-1496442226666-8d4d0e62e6e9") },
  { name: "Phuket", country: "Thailand", region: "Asia", tours: 26, img: IMG("photo-1552465011-b4e21bf6e79a") },
  { name: "Iceland", country: "Iceland", region: "Europe", tours: 12, img: IMG("photo-1504893524553-b855bce32c67") },
  { name: "Ha Long Bay", country: "Vietnam", region: "Asia", tours: 14, img: IMG("photo-1528127269322-539801943592") },
  { name: "Rio de Janeiro", country: "Brazil", region: "Americas", tours: 19, img: IMG("photo-1483729558449-99ef09a8c325") },
];

const packages = [
  { title: "Island Escape", location: "Maldives", type: "Beach", days: 6, people: 2, price: 2499, rating: 4.9, reviews: 312, tag: "Best Seller", img: IMG("photo-1514282401047-d79a71a590e8") },
  { title: "Mediterranean Getaway", location: "Santorini, Greece", type: "Beach", days: 7, people: 2, price: 1899, rating: 4.8, reviews: 245, tag: "Popular", img: IMG("photo-1570077188670-e3a8d69ac5ff") },
  { title: "Bali Explorer", location: "Bali, Indonesia", type: "Culture", days: 8, people: 4, price: 1299, rating: 4.7, reviews: 410, tag: "Trending", img: IMG("photo-1537996194471-e657df975ab4") },
  { title: "Alpine Adventure", location: "Swiss Alps", type: "Adventure", days: 5, people: 2, price: 2199, rating: 4.9, reviews: 178, tag: "New", img: IMG("photo-1530122037265-a5f1f91d3b99") },
  { title: "Romantic Paris", location: "Paris, France", type: "City", days: 4, people: 2, price: 1499, rating: 4.6, reviews: 289, tag: "Honeymoon", img: IMG("photo-1502602898657-3e91760cbb34") },
  { title: "Desert Luxury", location: "Dubai, UAE", type: "City", days: 5, people: 3, price: 1699, rating: 4.7, reviews: 203, tag: "Luxury", img: IMG("photo-1512453979798-5ea266f8880c") },
  { title: "Temples of Kyoto", location: "Kyoto, Japan", type: "Culture", days: 6, people: 2, price: 1999, rating: 4.8, reviews: 156, tag: "Cultural", img: IMG("photo-1493976040374-85c8e12f0c0e") },
  { title: "Northern Lights", location: "Reykjavik, Iceland", type: "Adventure", days: 7, people: 2, price: 2799, rating: 4.9, reviews: 132, tag: "Limited", img: IMG("photo-1504893524553-b855bce32c67") },
  { title: "Thai Island Hopping", location: "Phuket, Thailand", type: "Beach", days: 9, people: 4, price: 999, rating: 4.6, reviews: 367, tag: "Budget", img: IMG("photo-1552465011-b4e21bf6e79a") },
];

const testimonials = [
  { name: "Sophia Martinez", trip: "Maldives Island Escape", text: "Absolutely magical! Every detail was handled perfectly — from the seaplane transfer to the overwater villa. Can't wait to book our next trip.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "James Carter", trip: "Swiss Alps Adventure", text: "The itinerary was perfectly balanced between adventure and relaxation. Our guide was knowledgeable and the views were unbelievable.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Aisha Rahman", trip: "Bali Explorer", text: "Voyago made planning so easy. Great hotels, amazing local food tours and super responsive support throughout the trip.", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Daniel Kim", trip: "Temples of Kyoto", text: "A beautifully curated cultural experience. The tea ceremony and temple visits were highlights of my year.", img: "https://randomuser.me/api/portraits/men/75.jpg" },
  { name: "Emily Watson", trip: "Romantic Paris", text: "Our honeymoon was a dream. The Seine dinner cruise and the boutique hotel exceeded every expectation.", img: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "Omar Haddad", trip: "Desert Luxury", text: "From the desert safari to the Burj Khalifa visit, everything was luxurious and on time. Highly recommended!", img: "https://randomuser.me/api/portraits/men/46.jpg" },
];
