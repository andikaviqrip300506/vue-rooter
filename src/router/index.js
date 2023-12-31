import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Detail from "@/views/Detail.vue";
import Produk from "@/views/Produk.vue";
import Kategori from "@/views/Kategori.vue"
import DetailElektronik from "@/views/DetailElektronik.vue"
import NotFound from "@/views/NotFound.vue"
import Login from "@/views/Login.vue"

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    },
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true
  },
  {
    path: "/:pathMacth(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/detailelekronik",
    name: "DetailE",
    component: DetailElektronik,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true
  },
  {
    path: "/detailelektronik/:id_kategori",
    name: "DetailE",
    component: DetailElektronik,
    props: true
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;