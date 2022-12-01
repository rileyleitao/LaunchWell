import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Template from "../views/Template.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/template",
    name: "Template",
    component: Template,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Create,
  },
  {
    path: "/announcementcreator",
    name: "AnnouncementCreator",
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];
//history to remove the #//
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
