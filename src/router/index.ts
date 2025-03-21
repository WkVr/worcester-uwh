import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from 'vue-router';
import { pages } from './pages';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@layouts/PageLayout.vue'),
		children: [
			{
				path: '',
				component: () => import('@components/pages/Home.vue'),
			},
			{
				path: pages.about.path,
				component: () => import('@components/pages/AboutUs.vue'),
			},
			{
				path: pages.contact.path,
				component: () => import('@components/pages/ContactUs.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
