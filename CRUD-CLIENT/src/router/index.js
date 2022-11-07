import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCourse from "../views/AddCourse.vue";
import CourseDesc from "../views/CourseDesc.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/AddCourse",
      name: "AddCourse",
      component: AddCourse,
    },
    {
      path: "/AddCourse/:id",
      name: "CourseDesc",
      component: CourseDesc,
    },
  ],
});

export default router;
