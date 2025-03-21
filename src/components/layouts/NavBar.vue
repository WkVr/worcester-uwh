<template>
	<Disclosure as="nav" class="bg-primary" v-slot="{ open }">
		<div class="max-w-7xl">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton
						class="relative inline-flex items-center justify-center rounded-sm text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
					>
						<span class="absolute -inset-0.5" />
						<span class="sr-only">Open main menu</span>
						<Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
						<XMarkIcon v-else class="block size-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
				<div
					class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
				>
					<div
						class="flex shrink-1 items-center justify-center md:items-stretch md:justify-start"
					>
						<img
							src="@assets/Logo.png"
							alt="Signature Vision"
							class="w-1/2 md:w-1/3 xl:w-1/4"
						/>
					</div>
					<div class="sm:ml-6 sm:block hidden">
						<div class="flex space-x-4">
							<a
								v-for="item in navigation"
								:key="item.name"
								:href="item.href"
								:class="[
									item.current
										? 'bg-gray-900 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'rounded-sm px-3 py-2 text-sm font-medium',
								]"
								:aria-current="item.current ? 'page' : undefined"
								>{{ item.name }}</a
							>
						</div>
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
							? 'bg-gray-900 text-white'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'block rounded-sm px-3 py-2 text-base font-medium',
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
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
	{ name: pages.home.name, href: pages.home.path, current: true },
	{ name: pages.about.name, href: pages.about.path, current: false },
	{ name: pages.contact.name, href: pages.contact.path, current: false },
];
</script>
