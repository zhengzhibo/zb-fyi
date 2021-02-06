import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '/@/components/Home.vue'
import Post from '/@/components/Post.vue'

const routes:RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/post/:postUrl', component: Post, props: true }
]

// app router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    if (to.fullPath === '/' && savedPosition) {
      return {
        top: savedPosition.top,
        left: savedPosition.left
      }
    } else {
      return {
        top: 0,
        left: 0
      }
    }
  }

})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
