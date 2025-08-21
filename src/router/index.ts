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
				component: () => import('@components/pages/Home/Home.vue'),
			},
			{
				path: pages.about.path,
				component: () => import('@components/pages/AboutUs.vue'),
			},
			{
				path: pages.contact.path,
				component: () => import('@components/pages/ContactUs.vue'),
			},
			{
				path: pages.how.path,
				component: () => import('@components/pages/HowItWorks.vue'),
			},
			{
				path: pages.how.path,
				component: () => import('@components/pages/HowItWorks.vue'),
			},
			{
				path: pages.membership.path,
				component: () => import('@components/pages/Membership.vue'),
			},
			{
				path: pages.gallery.path,
				component: () => import('@components/pages/Gallery.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
