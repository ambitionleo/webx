import login from '@/views/user/login'
import home from '@/views/user/home'

const routers = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '首页'
    },
    children:[
      {
        path: '/home/food',
        name: 'food',
        component: () => import ('@/views/form/food'),
        meta: {
          title: '表单'
        }
      }
    ]
  }
  
]

export default [...routers]