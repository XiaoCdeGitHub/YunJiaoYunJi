import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue';
import Admin from '../views/Admin/Admin.vue';
import User from '../views/User/User.vue';
import SignUp from '../views/SignUp/SignUp.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
    },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
    {
      path: '/admin',
      name:'Admin',
      component: Admin
    }, {
      path: '/user',
      name:'User',
      component: User
    }, {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }

  ],
});
router.beforeEach((to, from, next) => {
  // to要跳转到的路径
  // from从哪个路径来
  // next往下执行的回调
  // 在localStorage中获取token
  const token = sessionStorage.getItem('token');
  // 判断该页面是否需要登录
  if (to.meta.auth) {
    // 如果token存在直接跳转
    if (token) {
      next();
    } else {
      // 否则跳转到login登录页面
      next({
        path: '/login',
        // 跳转时传递参数到登录页面，以便登录后可以跳转到对应页面
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    // 如果不需要登录，则直接跳转到对应页面
    const arr = to.path.split('/');
    if (arr.length > 2) {
      next({
        path: arr[1],
      });
    } else {
      next();
    }
  }
});

export default router;
