<template>
	<footer class="bg-gray-800 text-white py-8 mt-auto">
		<div class="max-w-6xl mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- Company Info -->
				<div>
					<h3 class="text-lg font-semibold mb-4">Join Us</h3>
					<p class="text-gray-300 text-sm leading-relaxed">
						Worcester Underwater Hockey – where community and competition meet
						beneath the water.
					</p>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li>
							<a
								:href="pages.home.path"
								class="text-gray-300 hover:text-white text-sm transition-colors"
								>Home</a
							>
						</li>
						<li>
							<a
								:href="pages.about.path"
								class="text-gray-300 hover:text-white text-sm transition-colors"
								>About</a
							>
						</li>
						<li>
							<a
								:href="pages.contact.path"
								class="text-gray-300 hover:text-white text-sm transition-colors"
								>Contact</a
							>
						</li>
					</ul>
				</div>

				<!-- Contact Info -->
				<div>
					<h3 class="text-lg font-semibold mb-4">Contact</h3>
					<div class="space-y-2 text-sm text-gray-300">
						<p>Email: info@example.com</p>
						<p>Phone: +27 (555) 123-4567</p>
						<div class="flex space-x-4 mt-4">
							<a
								href="#"
								class="text-gray-300 hover:text-white transition-colors"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
									/>
								</svg>
							</a>
							<a
								href="#"
								class="text-gray-300 hover:text-white transition-colors"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="border-t border-gray-700 pt-6 mt-8">
				<div
					class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
				>
					<div class="text-sm text-gray-400">
						© {{ currentYear }} All rights reserved.
					</div>
					<div class="text-sm text-gray-400">
						Developed by
						<span class="text-white font-medium">Signature Vision</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import { pages } from '@/router/pages';

export default {
	name: 'WebsiteFooter',
	computed: {
		currentYear() {
			return new Date().getFullYear();
		},
		pages() {
			return pages;
		},
	},
};
</script>

<style scoped>
/* Additional custom styles if needed */
footer a:hover {
	transition: color 0.2s ease-in-out;
}
</style>
