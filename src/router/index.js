import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'
import store from '@/store'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    redirect: '/show',
    children: [
      {
        path: 'show',
        name: 'show',
        component: () => import(/* webpackChunkName: "basic_show" */ 'views/basicLayout/show'),
        meta: {
          title: '功能展示',
          keepAlive: true
        }
      },
      {
        path: 'article',
        name: 'article',
        component: () => import(/* webpackChunkName: "basic_article" */ 'views/basicLayout/article'),
        meta: {
          auth: true,
          title: '文章列表',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('views/404'),
    meta: {
      title: '404',
      keepAlive: true
    }
  }
]

const routerContext = require.context('./', true, /\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = routes.concat(routerModule.default || routerModule)
})

routes = routes.concat({
  path: '*',
  redirect: '/404'
})

const createRouter = () => new Router({
  mode: 'history', // require service support
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const myRouter = createRouter()

// const myRouter = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/show', 0)

myRouter.beforeEach((to, from, next) => {
  if (to.params.direction) {
    store.commit('updateDirection', to.params.direction)
  } else {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.commit('updateDirection', 'forward')
      } else {
        store.commit('updateDirection', 'back')
      }
    } else {
      ++historyCount
      history.setItem('count', historyCount)
      to.path !== '/' && history.setItem(to.path, historyCount)
      store.commit('updateDirection', 'forward')
    }
  }
  next()
})

export function resetRouter () {
  myRouter.replace('/login')
}

export default myRouter
