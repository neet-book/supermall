import Vue from 'vue'
import Router from 'vue-router'
const Detail = () => import("views/detail/Detail");
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: "/detail/:iid",
    component: Detail
  },
];

export default new Router({
  routes,
  mode: 'history'
})
