import Router from 'vue-router';
import CoursesDetails from '@/components/CoursesDetails.vue'
import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
import SignUp from '@/components/SignUp.vue'

const router = new Router(
    {
        mode: 'history',
        routes: [
           
            {
                name:'home',
                path:'/',
                component:HomePage
            },
            {
                name:'login',
                path:'/login',
                component:LoginPage

            },
            {
                name: 'courses',
                path: '/courses',
                component: CoursesDetails,
                props:true
            },
            
            {
                name:'SignUp',
                path:'/SignUp',
                component:SignUp,
               
            }
              
        ]
    });
    export default router;