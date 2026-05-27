import { createRouter, createWebHashHistory } from 'vue-router'
import BannerPage from '../pages/BannerPage.vue'
import EmailPage from '../pages/EmailPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/banner' },
    { path: '/banner', component: BannerPage, meta: { title: 'Banner Ad' } },
    { path: '/email', component: EmailPage, meta: { title: 'HTML Email' } },
  ],
})

export default router
