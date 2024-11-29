import {createRouter, createWebHistory} from 'vue-router'
import auth from "./middlewares/auth.js";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth',
            component: AuthLayout,
            meta: {
                auth: false
            },
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/views/AboutView.vue')
                }
            ]
        },
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/HomeView.vue')
                },
                {
                    path: 'home2',
                    component: () => import('@/views/Home2View.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/NotFoundView.vue')
        }
    ],
})

// router.beforeEach(auth)

export default router
