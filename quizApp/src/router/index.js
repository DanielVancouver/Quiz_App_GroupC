import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../views/AboutPage.vue';
import HomePage from '../views/HomePage.vue';
import TaskDetail from '../views/TaskDetail.vue';

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/task/:id',
    name: 'task-detail',
    component: TaskDetail,
    props: true  // route with props
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
