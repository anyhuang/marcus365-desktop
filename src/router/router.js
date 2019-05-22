import Vue from 'vue/types'
import Router from 'vue-router/types'
import Dashboard from "../views/Dashboard";

Vue.use(Router);

const routers =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/dashboard',
      meta: {
        menuShow: false,
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        menuShow: true,
        name: "数据统计"
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue'),
      meta: {
        menuShow: true,
        name: "订单管理"
      }
    }
  ]
});

routers.beforeEach((to, from, next) => {
  if(to.name === null)
    next('/dashboard');
  else
    next()
});

export default routers;
