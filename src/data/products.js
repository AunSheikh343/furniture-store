import p1 from "../assets/images/products/product1.jpg";
import p2 from "../assets/images/products/product2.jpg";
import p3 from "../assets/images/products/product3.jpg";
import p4 from "../assets/images/products/product4.jpg";
import p5 from "../assets/images/products/product5.jpg";
import p6 from "../assets/images/products/product6.jpg";
import p7 from "../assets/images/products/product7.jpg";
import p8 from "../assets/images/products/product8.jpg";

const products = [
  {
    id: 1,
    name: "Syltherine",
    category: "Stylish Chair",
    price: "250",
    oldPrice: "350",
    badge: "-30%",
    badgeType: "sale",
    image: p1,
  },
  {
    id: 2,
    name: "Leviosa",
    category: "Modern Chair",
    price: "180",
    image: p2,
  },
  {
    id: 3,
    name: "Lolito",
    category: "Luxury Sofa",
    price: "700",
    oldPrice: "950",
    badge: "-25%",
    badgeType: "sale",
    image: p3,
  },
  {
    id: 4,
    name: "Respira",
    category: "Outdoor Table",
    price: "400",
    badge: "New",
    badgeType: "new",
    image: p4,
  },
  {
    id: 5,
    name: "Grifo",
    category: "Night Lamp",
    price: "120",
    image: p5,
  },
  {
    id: 6,
    name: "Muggo",
    category: "Coffee Table",
    price: "220",
    badge: "New",
    badgeType: "new",
    image: p6,
  },
  {
    id: 7,
    name: "Pingky",
    category: "Wooden Chair",
    price: "310",
    oldPrice: "400",
    badge: "-20%",
    badgeType: "sale",
    image: p7,
  },
  {
    id: 8,
    name: "Potty",
    category: "Flower Pot",
    price: "80",
    image: p8,
  },
];

export default products;