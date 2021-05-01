const DUMMY_DATA = [
  {
    id: "e-1",
    title: "Learn React JS",
    date: "2021-01-01",
    location: "Jl. Gadung No.61",
    description: "Learn react js is something fun",
    isFeatured: true,
    image: "/images/react-js.jpg",
    category: "javascript",
  },
  {
    id: "e-2",
    title: "Learn Next JS",
    date: "2021-01-02",
    location: "Jl. Gadung No.62",
    description: "Learn Next js is something fun",
    isFeatured: true,
    image: "/images/next-js.jpg",
    category: "javascript",
  },
  {
    id: "e-3",
    title: "Learn SCSS",
    date: "2021-01-03",
    location: "Jl. Gadung No.63",
    description: "Learn SCSS js is something fun",
    isFeatured: false,
    image: "/images/scss.jpg",
    category: "stylesheet",
  },
];

export function getFeaturedEvents() {
  return DUMMY_DATA.filter((data) => data.isFeatured);
}

export function getAllEvents() {
  return DUMMY_DATA;
}

export function getEventsById(id) {
  return DUMMY_DATA.filter((data) => data.id === id);
}

export function getEventsFilterByCat(category) {
  return DUMMY_DATA.filter((data) => data.category === category);
}
