'use strict'

export default function (router) {
    router.map({
        '/': { //首页
            name: 'home',
            component: require('./views/home.vue')
        },
        '/product': {
            name: 'product',
            component: require('./views/product.vue')
        },
        '/directory': {
            name: 'directory',
            component: require('./views/directory.vue')
        },
        /* 404路由 */
        //'*': {
        //    component: require('./views/index.vue')
        //},
    })
}
