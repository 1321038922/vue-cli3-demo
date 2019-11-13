import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);
const commonRouter = {
	layout: () => import('@/views/layout/index.vue'),
	index: () => import('@/views/index/index.vue'),
	onlineExam: () => import('@/views/onlineExam/index.vue'),
	quizzes: () => import('@/views/quizzes/index.vue')
}
export default new Router({
	routes: [
		{
			path: "/",
			name: "layout",
			component: commonRouter.layout,
			redirect: '/index',
			children: [
				{
					path: "/index",
					name: "index",
					meta: {
						title: '首页'
					},
					component: commonRouter.index,
				},
				{
					path: "/onlineExam",
					name: "onlineExam",
					meta: {
						title: '在线考试'
					},
					component: commonRouter.onlineExam,
				},
				{
					path: "/quizzes",
					name: "quizzes",
					meta: {
						title: '随堂考'
					},
					component: commonRouter.quizzes,
				}
			]
		}
	]
})
