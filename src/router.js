import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/HomePage/HomePage';
import HelloWorld from './views/HelloWorld';


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: HelloWorld
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
    ]
})
