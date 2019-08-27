import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
import store from '../store'

Vue.use(Router)


const router = new Router({
  //滚动行为
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: routers
})

router.beforeEach((to,from,next) => {
  console.log('to.path'+ to.path);
  console.log('from.path'+ from.path);
  next();
});

router.afterEach((to, from) => {
  const { name, meta, params } = to

  // 初始化路由时，记录当前路由
  // if (new RegExp(/^init_/).test(name) && !initOutMemory.includes(name)) {
  //   localStorage.setItem('init_step_router', JSON.stringify({ name, meta, params }))
  // }
})

export default router


