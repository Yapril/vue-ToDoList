import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeTodo from '../components/HomeTodo.vue'
import AddTodo from '../components/AddTodo.vue'

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/add',
			name: 'AddTodo',
			component: AddTodo
		},
		{
			path: '/home',
			name: 'HomeTodo',
			component: HomeTodo
		},
		{
			path: '/',
			name: 'HomeTodo',
			component: HomeTodo
		}
	]
})