<template>
	<Disclosure as="nav" class="p-2 w-full sm:p-0 sm:px-2" v-slot="{ open }">
		<div class="max-w-7xl">
			<div class="relative flex items-center justify-center sm:justify-start">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton
						class="relative inline-flex items-center justify-center rounded-sm text-gray-400 hover:bg-primary-main hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
					>
						<span class="absolute -inset-0.5" />
						<span class="sr-only">Open main menu</span>
						<Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
						<MinusIcon v-else class="block size-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
				<img
					src="@assets/Logo.png"
					alt="Signature Vision"
					class="w-1/3 md:w-1/4 md:my-2 py-2 flex"
				/>
				<div class="sm:block hidden ml-6">
					<div class="flex space-x-4">
						<a
							v-for="item in navigation"
							:key="item.name"
							:href="item.href"
							:class="[
								item.current
									? 'bg-primary-dark text-white'
									: 'text-gray-300 hover:bg-secondary-main hover:text-white',
								'rounded-sm px-3 py-2 text-sm font-sm w-auto',
							]"
							:aria-current="item.current ? 'page' : undefined"
							>{{ item.name }}</a
						>
					</div>
				</div>
			</div>
		</div>

		<DisclosurePanel class="sm:hidden">
			<div class="space-y-1 px-2 pt-2 pb-3">
				<DisclosureButton
					v-for="item in navigation"
					:key="item.name"
					as="a"
					:href="item.href"
					:class="[
						item.current
							? 'bg-primary-dark text-white'
							: 'text-gray-300 hover:bg-secondary-main hover:text-white',
						'block rounded-sm px-3 py-2 text-sm font-sm ',
					]"
					:aria-current="item.current ? 'page' : undefined"
					>{{ item.name }}</DisclosureButton
				>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script setup>
import { pages } from '@/router/pages';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/vue';
import {
	Bars3Icon,
	BellIcon,
	MinusIcon,
	XMarkIcon,
} from '@heroicons/vue/24/outline';

import { useRoute } from 'vue-router';

const currentRoute = useRoute();

const checkRoute = (route) => {
	return route === currentRoute.path;
};

const navigation = [
	{
		name: pages.home.name,
		href: pages.home.path,
		current: checkRoute(pages.home.path),
	},
	/*{
		name: pages.about.name,
		href: pages.about.path,
		current: checkRoute(pages.about.path),
	},
	{
		name: pages.contact.name,
		href: pages.contact.path,
		current: checkRoute(pages.contact.path),
	},*/
];
</script>
