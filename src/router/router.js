const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home.vue")
      }
    ]
  }
];
export default routes;
