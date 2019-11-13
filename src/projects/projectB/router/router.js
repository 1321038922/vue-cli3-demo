import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);
const commonRouter = {
    layout: () => import('@/views/layout/index.vue')
}
export default new Router({
    routes: [
        {
            path: "/",
            name: "layout",
            component: commonRouter.layout
        }
    ]
})
