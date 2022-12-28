import Router from 'vue-router';
import CoursesDetails from '@/components/CoursesDetails.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
//import UserLogin from '@/components/UserLogin.vue'
import vueCourse from '@/components/vueCourse.vue'

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
                component: CoursesDetails,
                props:true
            },
            
            // {
            //     name:'landing',
            //     path: '/landing',
            //     component: UserLogin
            // },
            {
                name:'vueCourse',
                path:'/vueCourse',
                component:vueCourse,
                props:true
            }
              
        ]
    });
    export default router;