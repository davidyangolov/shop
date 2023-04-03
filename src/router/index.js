import {createRouter, createWebHistory} from 'vue-router'


import HomePage from '@/components/HomePage.vue'
// import AboutPage from '@/components/AboutPage'
// import ContactPage from '@/components/AboutPage'
// import QuestionPage from '@/components/AboutPage'
// import SupprotPage from '@/components/AboutPage'
// import RulesPage from '@/components/AboutPage'
// import ProductsPage from '@/components/AboutPage'
// import ManagerPage from '@/components/AboutPage'
// import AdminPage from '@/components/AboutPage'
// import UserPage from '@/components/AboutPage'
// import CartPage from '@/components/AboutPage'


const routes = [
   {path: '/home', component: HomePage},
//    {path: '/about', component: AboutPage},
//    {path: '/contact', component: ContactPage},
//    {path: '/faq', component: QuestionPage},
//    {path: '/support', component: SupprotPage},
//    {path: '/rules', component: RulesPage},
//    {path: '/shop', component: ProductsPage},
//    {path: '/admin', component: AdminPage},
//    {path: '/manager', component: ManagerPage},
//    {path: '/user/:id', component: UserPage},
//    {path: '/cart', component: CartPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router