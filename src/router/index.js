import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import ForgotPasswordPage from "@/views/ForgotPasswordPage"
import store from "@/store/index"; 
import User from "@/views/dashboard/User"
import PoliticasPrivacidad from "@/views/PoliticasPrivacidad"
Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }

  next("/login");
};

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }

  next("/dashboard");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/signup",
    name: "SignupPage",
    component: SignupPage,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/forgotPassword",
    name: "forgotPasswordPage",
    component: ForgotPasswordPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    beforeEnter: ifAuthenticated,
    children: [
      { path: '', component: User },
    ]
  },
  {
    path: "/privacy",
    name: "PoliticasPrivacidad",
    component: PoliticasPrivacidad,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
