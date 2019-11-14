export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('views/user/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('views/user/Register.vue'),
    meta: {
      title: '注册'
    }
  }
]
