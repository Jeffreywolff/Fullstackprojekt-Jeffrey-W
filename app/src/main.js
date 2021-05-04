import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


import VueRouter from 'vue-router';
App.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

App.use(VueAxios, axios);

VueRouter.config.Vue.config.productionTip = false;

import LoginComponent from './components/LoginComponent.vue';
import ChatComponent from './components/ChatComponent.vue';




const router = new VueRouter({routes: [

    {
        name: 'login',
        path: '/login',
        component: LoginComponent
    },
    {
        name: 'chat',
        path: '/chat',
        component: ChatComponent
    },

]});

new App(App.util.extend({ mode: 'history', router }, App)).$mount('#app');
