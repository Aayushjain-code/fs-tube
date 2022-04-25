import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
const profileUrls = {
  GunjanShouts:
    "https://yt3.ggpht.com/KKbsuymokFtXvmPJMqjLoPmeWtYz3s0vtJSwccjsg363HtPl6ewidc1TmUO6scz-bALjymCJ1g=s88-c-k-c0x00ffffff-no-rj",

  FitTuber:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UqGh_QJDe4kChKjE5BJXsvO4XiT0b-30OA&usqp=CAU",
};

export const videos = [
  {
    _id: uuid(),
    title: "7 Evening Snacks Recipes for Weight Loss",
    author: "GunjanShouts",
    authorImageUrl: profileUrls.GunjanShouts,
    timeDuration: "11min",
    url: "YQDA29r9QDA",
    views: "900K",
    imageUrl: "https://i3.ytimg.com/vi/YQDA29r9QDA/maxresdefault.jpg",
    rating: 5,
    category: "Snacks",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "4 Winter Snacks Ideas and Recipes",
    author: "GunjanShouts",
    authorImageUrl: profileUrls.GunjanShouts,
    timeDuration: "14min",
    url: "RKbXELQb_aI",
    views: "58K",
    imageUrl: "https://i3.ytimg.com/vi/RKbXELQb_aI/maxresdefault.jpg",
    rating: 5,
    category: "Snacks",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "7 Breakfast Recipes for Weight Loss",
    author: "GunjanShouts",
    authorImageUrl: profileUrls.GunjanShouts,
    timeDuration: "10min",
    url: "mxcTmmNXMkM",
    views: "58K",
    imageUrl: "https://i3.ytimg.com/vi/mxcTmmNXMkM/maxresdefault.jpg",
    rating: 5,
    category: "Breakfast",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Moong Dal Dosa",
    author: "FitTuber",
    authorImageUrl: profileUrls.FitTuber,
    timeDuration: "12min",
    url: "vmnns9LDyHU",
    views: 80,
    imageUrl: "https://i3.ytimg.com/vi/vmnns9LDyHU/maxresdefault.jpg",
    rating: 5,
    category: "Breakfast",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Healthy Breakfast Options",
    author: "FitTuber",
    timeDuration: "12min",
    views: 200,
    url: "ee0SfGSJOTc",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/ee0SfGSJOTc/maxresdefault.jpg",
    rating: 5,
    category: "Breakfast",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Healthy Lunch Box Ideas",
    author: "FitTuber",
    timeDuration: "15min",
    views: 200,
    url: "d4vAv6CG7M0",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/d4vAv6CG7M0/maxresdefault.jpg",
    rating: 4,
    category: "Lunch",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "7 Lunch Recipes for Weight Loss (Vegetarian)",
    author: "GunjanShouts",
    timeDuration: "16min",
    views: "1.6M",
    url: "2tY2e06yPMo",
    authorImageUrl: profileUrls.GunjanShouts,
    imageUrl: "https://i3.ytimg.com/vi/mxcTmmNXMkM/maxresdefault.jpg",
    rating: 4,
    category: "Lunch",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "7 Healthy Dessert Recipes",
    author: "GunjanShouts",
    timeDuration: "16min",
    views: "1.6M",
    url: "7sYI1mMxnbA",
    authorImageUrl: profileUrls.GunjanShouts,
    imageUrl: "https://i3.ytimg.com/vi/7sYI1mMxnbA/maxresdefault.jpg",
    rating: 4,
    category: "Snacks",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Tasty Dinner Ideas",
    author: "FitTuber",
    timeDuration: "15min",
    views: 90,
    url: "BEzASBGeEIM",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/BEzASBGeEIM/maxresdefault.jpg",
    rating: 4,
    category: "Dinner",
    isMustWatch: true,
  },
  {
    _id: uuid(),
    title: "Healthy Evening Snacks",
    author: "FitTuber",
    timeDuration: "8min",
    views: 200,
    url: "110G3GvaZns",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/110G3GvaZns/maxresdefault.jpg",
    rating: 3,
    category: "Lunch",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: " Easy Restaurant Style Recipes",
    author: "FitTuber",
    timeDuration: "8min",
    views: 200,
    url: "X5j5EBLNv8",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/-X5j5EBLNv8/maxresdefault.jpg",
    rating: 3,
    category: "Dinner",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Creative Recipes to Try",
    author: "FitTuber",
    timeDuration: "15min",
    views: 90,
    url: "mbo5wXh1lWE",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/mbo5wXh1lWE/maxresdefault.jpg",
    rating: 2,
    category: "Lunch",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "HEALTHY SANDWICH Recipes",
    author: "GunjanShouts",
    timeDuration: "5min",
    views: 200,
    url: "FToH1APJjg0",
    authorImageUrl: profileUrls.GunjanShouts,
    imageUrl: "https://i3.ytimg.com/vi/FToH1APJjg0/maxresdefault.jpg",
    rating: 2,
    category: "Breakfast",
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "Healthy & Tasty Ice Cream",
    author: "FitTuber",
    timeDuration: "8min",
    views: 90,
    url: "jwmNjJgZanM",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/jwmNjJgZanM/maxresdefault.jpg",
    rating: 1,
    category: "Dinner",
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: " Healthy Dessert Ideas",
    author: "FitTuber",
    timeDuration: "8min",
    views: 200,
    url: "hLrny7Xjy2g",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/hLrny7Xjy2g/maxresdefault.jpg",
    rating: 1,
    category: "Lunch",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "SPROUTS - Easy Preparation",
    author: "FitTuber",
    timeDuration: "8min",
    views: 200,
    url: "g4GSHgFfaMA",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/g4GSHgFfaMA/maxresdefault.jpg",
    rating: 1,
    category: "Breakfast",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Refreshing Drinks to Make 🔥",
    author: "FitTuber",
    timeDuration: "8min",
    views: 200,
    url: "ucOmGiNg1kg",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/ucOmGiNg1kg/maxresdefault.jpg",
    rating: 1,
    category: "Snacks",
    isMustWatch: false,
  },
  {
    _id: uuid(),
    title: "Homemade Peanut Butter Recipe",
    author: "FitTuber",
    timeDuration: "8min",
    views: 200,
    url: "0mrrZYTvQ44",
    authorImageUrl: profileUrls.FitTuber,
    imageUrl: "https://i3.ytimg.com/vi/0mrrZYTvQ44/maxresdefault.jpg",
    rating: 1,
    category: "Breakfast",
    isMustWatch: false,
  },
];
