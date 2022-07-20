import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./HomeComponent.vue";
import ProfileComponent from "./ProfileComponent.vue";
import AdminComponent from "./AdminComponent.vue";
import ContactComponent from "./ContactComponent.vue";
import PageNotFound from "./PageNotFound.vue";

const routes = [
  {
    name: "HomeComponent",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "ContactComponent",
    path: "/contact",
    component: ContactComponent,
  },
  {
    name: "ProfileComponent",
    path: "/profile/:name",
    component: ProfileComponent,
  },
  {
    name: "AdminComponent",
    path: "/admin",
    component: AdminComponent,
  },
  {
    name:"PageNotFound",
    path: "/:pathMac",
    component: PageNotFound,
  }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
