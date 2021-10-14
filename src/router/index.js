import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  // POLES ROUTES
  {
    path: "/poles/:keyword",
    name: "SinglePole",
    component: () =>
      import("@/views/SinglePole.vue"),
  },
  {
    path: "/poles/:keyword/:productKey",
    name: "Products",
    component: () =>
      import("@/views/Products.vue"),
  },
  
  // CONTACTANOS
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("@/views/Contacto.vue"),
  },
  
  // Admin
  {
    path: "/admin",
    name: "Admin",    
    component: () =>
      import("@/views/Admin/Admin.vue"),      
  },{
    path: "/admin/:CrudKey",
    name: "CrudKey",
    component: () =>
      import("@/views/Admin/Admin.vue"),
  }/*,{
                       th: "/Admin/:CrudKey",
    name: "CrudPolo",
    component: () =>
      import("../views/Admin/CrudPolo.vue"),  
  },{
    path: "/Admin/:CrudKey",
    name: "CrudUser",
    component: () =>
      import("../views/Admin/CrudUser.vue"),
  },*/
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
