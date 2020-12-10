import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import My from '@/components/my.vue'

Vue.use(Router)

export default new Router({
    routes:[
    {
        path:'/',
        name:'App',
        component: App
    },
    {
        path:'/my',
        component: My
    }
    ]
})


