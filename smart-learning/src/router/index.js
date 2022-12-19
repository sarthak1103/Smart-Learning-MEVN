import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
const router = new Router(
    {
        mode: 'history',
        routes: [
            {
                name: 'home',
                path: '/',
                component: HomePage
            },
            {
                name:'login',
                path:'/login',
                component:LoginPage

            },

        ]
    });
    export default router;