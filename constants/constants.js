import icons from "./icons";

const screens = {
  main_layout: "MainLayout",
  home: "Home",
  search: "Search",
  cart: "Cart",
  favorite: "Favorite",
  notification: "Notification",
  my_wallet: "My Wallet",
};
export const drawer_menu = {
  top: [
    {
      icon: icons.home,
      label: screens.home,
      path: screens.main_layout,
    },
    {
      icon: icons.wallet,
      label: screens.my_wallet,
    },
    {
      icon: icons.notification,
      label: screens.notification,
      path: screens.notification,
    },
    {
      icon: icons.favorite,
      label: screens.favorite,
    },
  ],
  bottom: [
    {
      icon: icons.location,
      label: "Track your order",
    },
    {
      icon: icons.coupon,
      label: "Coupons",
    },
    {
      icon: icons.setting,
      label: "Settings",
    },
    {
      icon: icons.profile,
      label: "Invite a Friend",
    },
    {
      icon: icons.help,
      label: "Help Center",
    },
  ],
};
const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favorite,
  },
  {
    id: 4,
    label: screens.notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: "10 Mins",
  },
  {
    id: 2,
    label: "20 Mins",
  },
  {
    id: 3,
    label: "30 Mins",
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: "Burger",
  },
  {
    id: 2,
    label: "Fast Food",
  },
  {
    id: 3,
    label: "Pizza",
  },
  {
    id: 4,
    label: "Asian",
  },
  {
    id: 5,
    label: "Dessert",
  },
  {
    id: 6,
    label: "Breakfast",
  },
  {
    id: 7,
    label: "Vegetable",
  },
  {
    id: 8,
    label: "Taccos",
  },
];

export default {
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
};
