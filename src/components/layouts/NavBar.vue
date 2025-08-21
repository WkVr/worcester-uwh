<template>
	<nav class="">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<!-- Logo -->
				<div class="w-auto">
					<a href="/" class="text-xl font-bold text-gray-800"
						><img
							src="@assets/logo.png"
							alt="Signature Vision"
							class="w-1/2 md:w-1/4 md:my-2 py-2"
					/></a>
				</div>

				<!-- Desktop Menu -->
				<div class="hidden md:flex space-x-6 items-center">
					<div
						v-for="item in menuItems"
						:key="item.label"
						class="relative"
						@mouseenter="openDropdown(item.label)"
						@mouseleave="closeDropdown"
					>
						<button class="font-medium flex items-center" v-if="item.children">
							{{ item.label }}
							<svg
								v-if="item.children"
								class="ml-1 h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						<a
							v-else
							:href="item.href"
							class="text-gray-700 hover:text-gray-900 font-medium flex items-center"
						>
							{{ item.label }}
						</a>
						<!-- Dropdown -->
						<div
							v-if="item.children && dropdownOpen === item.label"
							class="absolute left-0 pt-1 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-50"
						>
							<a
								v-for="child in item.children"
								:key="child.label"
								:href="child.href"
								class="block font-small px-4 py-2 hover:bg-primary-dark hover:text-white text-gray-700"
							>
								{{ child.label }}
							</a>
						</div>
					</div>
				</div>

				<!-- Mobile Button -->
				<div class="md:hidden flex items-center">
					<button @click="mobileOpen = !mobileOpen" class="focus:outline-none">
						<svg
							class="h-6 w-6 text-gray-700"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								v-if="!mobileOpen"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
							<path
								v-else
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		<div v-if="mobileOpen" class="md:hidden bg-white shadow-md">
			<div class="px-4 pt-2 pb-3 space-y-1">
				<div v-for="item in menuItems" :key="item.label">
					<a
						:href="item.href"
						class="block py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-md px-2"
					>
						{{ item.label }}
					</a>
					<div v-if="item.children" class="pl-4">
						<a
							v-for="child in item.children"
							:key="child.label"
							:href="child.href"
							class="block py-2 text-gray-600 hover:bg-gray-100 rounded-md px-2"
						>
							{{ child.label }}
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue';

const dropdownOpen = ref(null);
const mobileOpen = ref(false);

const openDropdown = (label) => {
	dropdownOpen.value = label;
};
const closeDropdown = () => {
	dropdownOpen.value = null;
};

const menuItems = [
	{
		label: 'About Us',
	},
	{
		label: 'How does it work',
	},
	{
		label: 'Our Club',
		children: [
			{ label: 'Contact Us', href: '/contact' },
			{ label: 'Location', href: '/location' },
			{ label: 'Membership', href: '/membership' },
			{ label: 'Our Team', href: '/membership' },
		],
	},
	{ label: 'Contact', href: '/contact' },
];
</script>
