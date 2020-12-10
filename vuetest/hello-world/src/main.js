import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import My from '@/components/my.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/my', component: My}
    ]
})

// 脚手架 vue-cli 3.0 差异
// vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），vue模块的package.json的main字段默认为runtime模式， 指向了"dist/vue.runtime.common.js"位置
// import Vue from 'vue/dist/vue.esm.js'
//
// new Vue({
//     el: '#app',
//     router: router,
//     template: '<App/>',
//     components: { App }
// })

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
