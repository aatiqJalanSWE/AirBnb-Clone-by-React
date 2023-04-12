import cardImage1 from "./images/katie-zaferes.jpeg";
import cardImage2 from "./images/wedding-photography.jpg";
import cardImage3 from "./images/mountain-bike.jpeg";

const data = [
  {
    id: 1,
    title: "Life Lessons with Katie Zaferes",
    price: 136,
    coverImg: cardImage1,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
  },
  {
    id: 2,
    title: "Learn Wedding Photography",
    price: 125,
    coverImg: cardImage2,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    price: 50,
    coverImg: cardImage3,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
];

export default data;
