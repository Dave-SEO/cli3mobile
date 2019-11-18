const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/loginPage",
    name: "loginPage",
    component: () => import("../views/loginPage.vue")
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
      },
      {
        path: "/lesson",
        name: "lesson",
        component: () => import("../views/lesson.vue")
      },
      {
        path: "/mylesson",
        name: "mylesson",
        component: () => import("../views/mylesson.vue")
      },
      {
        path: "/userCenter",
        name: "userCenter",
        component: () => import("../views/userCenter.vue")
      }
    ]
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/detail.vue")
  }
];
export default routes;
