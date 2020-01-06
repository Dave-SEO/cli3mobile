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
<<<<<<< HEAD
        component: () => import("../views/edit/tinymce-editor.vue")
=======
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
>>>>>>> 394038c93d2b68babfa5edb263785dd7b7915d66
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
