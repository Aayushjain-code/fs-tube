import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "Carrot",
    author: "Emily",
    timeDuration: "12min",
    views: 80,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/05/13/15/23/carrot-2309814__340.jpg",
    rating: 5,
    category: "A",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Orange",
    author: "Jack",
    timeDuration: "12min",
    views: 200,
    imageUrl:
      "https://www.collinsdictionary.com/images/full/orange_342874121.jpg",
    rating: 5,
    category: "B",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Onion",
    author: "Joseph",
    timeDuration: "15min",
    views: 200,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/05/19/15/bulb-1238338_960_720.jpg",
    rating: 4,
    category: "A",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Potatoes",
    author: "Joseph",
    timeDuration: "15min",
    views: 90,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060__340.jpg",
    rating: 4,
    category: "A",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Avocado",
    author: "Joseph",
    timeDuration: "8min",
    views: 200,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/09/09/20/17/avocado-933060__340.jpg",
    rating: 3,
    category: "B",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Eggplant",
    author: "Joseph",
    timeDuration: "8min",
    views: 200,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/09/10/17/47/eggplant-1659784__340.jpg",
    rating: 3,
    category: "B",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Beetroot",
    author: "Joseph",
    timeDuration: "15min",
    views: 90,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/06/22/13/52/beetroot-3490809__340.jpg",
    rating: 2,
    category: "C",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Cabbage",
    author: "Joseph",
    timeDuration: "5min",
    views: 200,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_960_720.jpg",
    rating: 2,
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Cucumbers",
    author: "Joseph",
    timeDuration: "8min",
    views: 90,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269__340.jpg",
    rating: 1,
    category: "C",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Broccoli ciocococ occoco jdjsj",
    author: "Joseph",
    timeDuration: "8min",
    views: 200,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_960_720.jpg",
    rating: 1,
    category: "C",
    isMustWatch: false,
  },
];
