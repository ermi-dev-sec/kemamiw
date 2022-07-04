import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import UserView from './views/users/UserView.vue'
import Users from './views/users/Users.vue'

export const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/users/view/:id',
            name: 'getuser',
            component:  UserView
        },
        {
            path: '/users',
            name: 'myusers',
            component: Users

        }
    ]
});
