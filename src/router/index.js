import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ContactMe from '@/components/ContactMe.vue'
import AboutMe from '@/components/AboutMe.vue'
import ShopHere from '@/components/ShopHere.vue'
import NewsHere from '@/components/NewsHere.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/news-here',
            name: 'news',
            component: NewsHere
        },
        {
            path: '/shop',
            name: 'shop-here',
            component: ShopHere,
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutMe,
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMe,
        },

    ],
})

export default router

