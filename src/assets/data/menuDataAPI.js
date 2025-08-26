// src/data/siteData.js
// import Food images for Foodmenu
import foodImg1 from "../images/food/foodp1.jpg";
import foodImg2 from "../images/food/foodp2.jpg";
import foodImg3 from "../images/food/foodp3.jpg";
import foodImg4 from "../images/food/foodp4.jpg";
import foodImg5 from "../images/food/foodp5.jpg";
import foodImg6 from "../images/food/foodp6.jpg";
import foodImg7 from "../images/food/foodp7.jpg";
import foodImg8 from "../images/food/foodp8.jpg";
import foodImg9 from "../images/food/foodp9.jpg";
import foodImg10 from "../images/food/foodp10.jpg";
import foodImg11 from "../images/food/foodp11.jpg";
import foodImg12 from "../images/food/foodp12.jpg";
import foodImg13 from "../images/food/foodp13.jpg";
import foodImg14 from "../images/food/foodp14.jpg";
import foodImg15 from "../images/food/foodp15.jpg";
import foodImg16 from "../images/food/foodp16.jpg";
import foodImg17 from "../images/food/foodp17.jpg";
import foodImg18 from "../images/food/foodp18.jpg";
import foodImg19 from "../images/food/foodp19.jpg";
import foodImg20 from "../images/food/foodp20.jpg";
import foodImg21 from "../images/food/foodp21.jpg";
import foodImg22 from "../images/food/foodp22.jpg";

// import Drink images for Drinkmenu
import drinkImg1 from "../images/drink/drinkp1.jpg";
import drinkImg2 from "../images/drink/drinkp2.jpg";
import drinkImg3 from "../images/drink/drinkp3.jpg";
import drinkImg4 from "../images/drink/drinkp4.jpg";
import drinkImg5 from "../images/drink/drinkp5.jpg";
import drinkImg6 from "../images/drink/drinkp6.jpg";
import drinkImg7 from "../images/drink/drinkp7.jpg";
import drinkImg8 from "../images/drink/drinkp8.jpg";
import drinkImg9 from "../images/drink/drinkp9.jpg";
import drinkImg10 from "../images/drink/drinkp10.jpg";
import drinkImg11 from "../images/drink/drinkp11.jpg";
import drinkImg12 from "../images/drink/drinkp12.jpg";
import drinkImg13 from "../images/drink/drinkp13.jpg";
import drinkImg14 from "../images/drink/drinkp14.jpg";
import drinkImg15 from "../images/drink/drinkp15.jpg";
import drinkImg16 from "../images/drink/drinkp16.jpg";
import drinkImg17 from "../images/drink/drinkp17.jpg";
import drinkImg18 from "../images/drink/drinkp18.jpg";
import drinkImg19 from "../images/drink/drinkp19.jpg";
import drinkImg20 from "../images/drink/drinkp20.jpg";
import drinkImg21 from "../images/drink/drinkp21.jpg";
import drinkImg22 from "../images/drink/drinkp22.jpg";
import drinkImg23 from "../images/drink/drinkp23.jpg";
import drinkImg24 from "../images/drink/drinkp24.jpg";
import drinkImg25 from "../images/drink/drinkp25.jpg";
import drinkImg26 from "../images/drink/drinkp26.jpg";
import drinkImg27 from "../images/drink/drinkp27.jpg";
import drinkImg28 from "../images/drink/drinkp28.jpg";
import drinkImg29 from "../images/drink/drinkp29.jpg";
import drinkImg30 from "../images/drink/drinkp30.jpg";

// import Desert images for Desrtmenu
import dessertImg1 from "../images/dessert/dessertp1.jpg";
import dessertImg2 from "../images/dessert/dessertp2.jpg";
import dessertImg3 from "../images/dessert/dessertp3.jpg";
import dessertImg4 from "../images/dessert/dessertp4.jpg";
import dessertImg5 from "../images/dessert/dessertp5.jpg";
import dessertImg6 from "../images/dessert/dessertp6.jpg";
import dessertImg7 from "../images/dessert/dessertp7.jpg";
import dessertImg8 from "../images/dessert/dessertp8.jpg";
import dessertImg9 from "../images/dessert/dessertp9.jpg";
import dessertImg10 from "../images/dessert/dessertp10.jpg";
import dessertImg11 from "../images/dessert/dessertp11.jpg";
import dessertImg12 from "../images/dessert/dessertp12.jpg";
import dessertImg13 from "../images/dessert/dessertp13.jpg";
import dessertImg14 from "../images/dessert/dessertp14.jpg";

// import image from weServe for the We Serve Session in web home page
import weservefood from "../images/weServe/WeServefood.jpg";
import weservedrink from "../images/weServe/WeServedrink.jpg";
import weservedessert from "../images/weServe/weServedessert.jpg";

// import images slide for slider
import slideImg1 from "../images/slider/slideImg1.jpg";
import slideImg2 from "../images/slider/slideImg2.jpg";
import slideImg3 from "../images/slider/slideImg3.jpg";
import slideImg4 from "../images/slider/slideImg4.jpg";

const menuDataAPI = {
  categories: [
    { name: "Home", path: "/" },
    { name: "Food", path: "/food" },
    { name: "Drink", path: "/drink" },
    { name: "Dessert", path: "/dessert" },
    { name: "Booking", path: "/booking" },
  ],

  menu: {
    food: [
      {
        id: "f1",
        name: "Classic Burger",
        description:
          "A juicy beef patty with fresh lettuce, tomato, and our special sauce.",
        price: 8.99,
        image: foodImg1,
      },
      {
        id: "f2",
        name: "Margherita Pizza",
        description:
          "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
        price: 12.5,
        image: foodImg2,
      },
      {
        id: "f3",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg3,
      },
      {
        id: "f4",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg4,
      },
      {
        id: "f5",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg5,
      },
      {
        id: "f6",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg6,
      },
      {
        id: "f7",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg7,
      },
      {
        id: "f8",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg8,
      },
      {
        id: "f9",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg9,
      },
      {
        id: "f10",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg10,
      },
      {
        id: "f11",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg11,
      },
      {
        id: "f12",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg12,
      },
      {
        id: "f13",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg13,
      },
      {
        id: "f14",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg14,
      },
      {
        id: "f15",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg15,
      },
      {
        id: "f16",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg16,
      },
      {
        id: "f17",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg17,
      },
      {
        id: "f18",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg18,
      },
      {
        id: "f19",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg19,
      },
      {
        id: "f20",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg20,
      },
      {
        id: "f21",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg21,
      },
      {
        id: "f22",
        name: "Spaghetti Carbonara",
        description:
          "Pasta with creamy egg sauce, pancetta, and parmesan cheese.",
        price: 11.0,
        image: foodImg22,
      },
    ],
    drinks: [
      {
        id: "d1",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg1,
      },
      {
        id: "d2",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg2,
      },
      {
        id: "d3",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg3,
      },
      {
        id: "d4",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg4,
      },
      {
        id: "d5",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg5,
      },
      {
        id: "d6",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg6,
      },
      {
        id: "d7",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg7,
      },
      {
        id: "d8",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg8,
      },
      {
        id: "d9",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg9,
      },
      {
        id: "d10",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg10,
      },
      {
        id: "d11",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg11,
      },
      {
        id: "d12",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg12,
      },
      {
        id: "d13",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg13,
      },
      {
        id: "d14",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg14,
      },
      {
        id: "d15",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg15,
      },
      {
        id: "d16",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg16,
      },
      {
        id: "d17",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg17,
      },
      {
        id: "d18",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg18,
      },
      {
        id: "d19",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg19,
      },
      {
        id: "d20",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg20,
      },
      {
        id: "d21",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg21,
      },
      {
        id: "d22",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg22,
      },
      {
        id: "d23",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg23,
      },
      {
        id: "d24",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg24,
      },
      {
        id: "d25",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg25,
      },
      {
        id: "d26",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg26,
      },
      {
        id: "d27",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg27,
      },
      {
        id: "d28",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg28,
      },
      {
        id: "d29",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg29,
      },
      {
        id: "d30",
        name: "Iced Coffee",
        description: "Freshly brewed coffee served over ice.",
        price: 3.5,
        image: drinkImg30,
      },
    ],
    desserts: [
      {
        id: "ds1",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg1,
      },
      {
        id: "ds2",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg2,
      },
      {
        id: "ds3",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg3,
      },
      {
        id: "ds4",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg4,
      },
      {
        id: "ds5",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg5,
      },
      {
        id: "ds6",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg6,
      },
      {
        id: "ds7",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg7,
      },
      {
        id: "ds8",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg8,
      },
      {
        id: "ds9",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg9,
      },
      {
        id: "ds10",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg10,
      },
      {
        id: "ds11",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg11,
      },
      {
        id: "ds12",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg12,
      },
      {
        id: "ds13",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg13,
      },
      {
        id: "ds14",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center.",
        price: 6.0,
        image: dessertImg14,
      },
    ],
    services: [
      {
          id: "ws1",
          title: 'Main Food',
          alt: "image for multiple food menu",
          description: 'Delicious and hearty meals, including hot pots, grilled meats, and a variety of flavorful dishes',
          image: weservefood,
      },
      {
          id: "ws2",
          title: 'Drinks',
          alt: "image for multiple drink menu",
          description: 'Refreshing beverages to complement your meal, from soft drinks to iced teas and more.',
          image: weservedrink,
      },
      {
          id: "ws3",
          title: 'Desserts',
          alt: "image for multiple dessert menu",
          description: 'Savor the authentic flavors of traditional Chinese desserts, from sweet soups to delicate pastries and glutinous rice treats.',
          image: weservedessert,
      },
    ],
  },

  slider: [
    {
      id: "sl1",
      name: "Chocolate Lava Cake",
      img: slideImg1,
    },
    {
      id: "sl2",
      name: "Chocolate Lava Cake",
      img: slideImg2,
    },
    {
      id: "sl3",
      name: "Chocolate Lava Cake",
      img: slideImg3,
    },
    {
      id: "sl4",
      name: "Chocolate Lava Cake",
      img: slideImg4,
    },
  ],

  // This object bookingInfo seem no use
  bookingInfo: {
    title: "Book Your Table",
    description:
      "Reserve a table in advance to ensure you have the best dining experience. For parties larger than 8, please call us directly.",
  },

  contactInfo: {
    phoneNumber: "+855 12 345 678",
    email: "Restaurant@gmail.com",
    physicalAddress: "123 Food Street, Phnom Penh, Cambodia",
    socials: {
      telegram: "https://t.me/yourrestaurant",
      instagram: "https://instagram.com/yourrestaurant",
    },
  },
};

export default menuDataAPI;
