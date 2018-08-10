import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TodoAdd from '../components/TodoAdd.vue'

export default new Router({
	routes: [
		{
			path: '/add',
			name: 'TodoAdd',
			component: TodoAdd
		}
	]
})