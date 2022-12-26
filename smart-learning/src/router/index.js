import Router from 'vue-router';
import CoursesDetails from '@/components/CoursesDetails.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import UserLogin from '@/components/UserLogin.vue'
import pythonCourse from '@/components/pythonCourse.vue'

const router = new Router(
    {
        mode: 'history',
        routes: [
           
            {
                name:'register',
                path:'/',
                component:RegisterPage
            },
            {
                name:'login',
                path:'/login',
                component:LoginPage

            },
            {
                name: 'courses',
                path: '/courses',
                component: CoursesDetails
            },
            
            {
                name:'landing',
                path: '/landing',
                component: UserLogin
            },
            {
                name:'pythonCourse',
                path:'/pythonCourse',
                component:pythonCourse
            }
              
        ]
    });
    export default router;