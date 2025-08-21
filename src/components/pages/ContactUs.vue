<template>
	<div class="max-w-4xl mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Have a question or want to work together? We'd love to hear from you.
				Send us a message and we'll respond as soon as possible.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div class="bg-white p-8 rounded-lg shadow-lg">
				<form @submit.prevent="submitForm" class="space-y-6">
					<!-- Name Fields -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label
								for="firstName"
								class="block text-sm font-medium text-gray-700 mb-2"
							>
								First Name *
							</label>
							<input
								id="firstName"
								v-model="form.firstName"
								type="text"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
								:class="{ 'border-red-500': errors.firstName }"
							/>
							<p v-if="errors.firstName" class="mt-1 text-sm text-red-600">
								{{ errors.firstName }}
							</p>
						</div>
						<div>
							<label
								for="lastName"
								class="block text-sm font-medium text-gray-700 mb-2"
							>
								Last Name *
							</label>
							<input
								id="lastName"
								v-model="form.lastName"
								type="text"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
								:class="{ 'border-red-500': errors.lastName }"
							/>
							<p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
								{{ errors.lastName }}
							</p>
						</div>
					</div>

					<!-- Email -->
					<div>
						<label
							for="email"
							class="block text-sm font-medium text-gray-700 mb-2"
						>
							Email Address *
						</label>
						<input
							id="email"
							v-model="form.email"
							type="email"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
							:class="{ 'border-red-500': errors.email }"
						/>
						<p v-if="errors.email" class="mt-1 text-sm text-red-600">
							{{ errors.email }}
						</p>
					</div>

					<!-- Phone -->
					<div>
						<label
							for="phone"
							class="block text-sm font-medium text-gray-700 mb-2"
						>
							Phone Number
						</label>
						<input
							id="phone"
							v-model="form.phone"
							type="tel"
							class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
						/>
					</div>

					<!-- Subject -->
					<div>
						<label
							for="subject"
							class="block text-sm font-medium text-gray-700 mb-2"
						>
							Subject *
						</label>
						<select
							id="subject"
							v-model="form.subject"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
							:class="{ 'border-red-500': errors.subject }"
						>
							<option value="">Please select a subject</option>
							<option value="general">General Inquiry</option>
							<option value="services">Services & Pricing</option>
							<option value="support">Technical Support</option>
							<option value="partnership">Partnership</option>
							<option value="other">Other</option>
						</select>
						<p v-if="errors.subject" class="mt-1 text-sm text-red-600">
							{{ errors.subject }}
						</p>
					</div>

					<!-- Message -->
					<div>
						<label
							for="message"
							class="block text-sm font-medium text-gray-700 mb-2"
						>
							Message *
						</label>
						<textarea
							id="message"
							v-model="form.message"
							rows="5"
							required
							placeholder="Tell us about your project or inquiry..."
							class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
							:class="{ 'border-red-500': errors.message }"
						></textarea>
						<p v-if="errors.message" class="mt-1 text-sm text-red-600">
							{{ errors.message }}
						</p>
						<p class="mt-1 text-sm text-gray-500">
							{{ form.message.length }}/500 characters
						</p>
					</div>

					<!-- Newsletter Subscription -->
					<div class="flex items-start">
						<div class="flex items-center h-5">
							<input
								id="newsletter"
								v-model="form.newsletter"
								type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
							/>
						</div>
						<div class="ml-3 text-sm">
							<label for="newsletter" class="text-gray-700">
								I would like to receive updates and newsletters
							</label>
						</div>
					</div>

					<!-- Submit Button -->
					<div class="pt-4">
						<button
							type="submit"
							:disabled="isSubmitting"
							class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
						>
							<span v-if="!isSubmitting">Send Message</span>
							<span v-else class="flex items-center justify-center">
								<svg
									class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Sending...
							</span>
						</button>
					</div>
				</form>

				<!-- Success Message -->
				<div
					v-if="showSuccess"
					class="mt-6 p-4 bg-green-50 border border-green-200 rounded-md"
				>
					<div class="flex">
						<div class="flex-shrink-0">
							<svg
								class="h-5 w-5 text-green-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h3 class="text-sm font-medium text-green-800">
								Message sent successfully!
							</h3>
							<p class="mt-1 text-sm text-green-700">
								We'll get back to you within 24 hours.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Information -->
			<div class="space-y-8">
				<!-- Office Info -->
				<div class="bg-gray-50 p-8 rounded-lg">
					<h3 class="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>

					<div class="space-y-4">
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg
									class="w-6 h-6 text-blue-600 mt-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									></path>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-medium text-gray-900">Address</h4>
								<p class="text-gray-600">
									123 Business Street<br />City, State 12345<br />Country
								</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg
									class="w-6 h-6 text-blue-600 mt-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-medium text-gray-900">Phone</h4>
								<p class="text-gray-600">+1 (555) 123-4567</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg
									class="w-6 h-6 text-blue-600 mt-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-medium text-gray-900">Email</h4>
								<p class="text-gray-600">info@example.com</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg
									class="w-6 h-6 text-blue-600 mt-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</div>
							<div class="ml-4">
								<h4 class="text-lg font-medium text-gray-900">
									Business Hours
								</h4>
								<p class="text-gray-600">
									Monday - Friday: 9:00 AM - 6:00 PM<br />
									Saturday: 10:00 AM - 4:00 PM<br />
									Sunday: Closed
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Response Time -->
				<div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
					<h3 class="text-lg font-semibold text-blue-900 mb-3">
						Quick Response
					</h3>
					<p class="text-blue-800 text-sm">
						We typically respond to all inquiries within 24 hours during
						business days. For urgent matters, please call us directly.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactForm',
	data() {
		return {
			form: {
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
				newsletter: false,
			},
			errors: {},
			isSubmitting: false,
			showSuccess: false,
		};
	},
	methods: {
		validateForm() {
			this.errors = {};

			if (!this.form.firstName.trim()) {
				this.errors.firstName = 'First name is required';
			}

			if (!this.form.lastName.trim()) {
				this.errors.lastName = 'Last name is required';
			}

			if (!this.form.email.trim()) {
				this.errors.email = 'Email is required';
			} else if (!this.isValidEmail(this.form.email)) {
				this.errors.email = 'Please enter a valid email address';
			}

			if (!this.form.subject) {
				this.errors.subject = 'Please select a subject';
			}

			if (!this.form.message.trim()) {
				this.errors.message = 'Message is required';
			} else if (this.form.message.length > 500) {
				this.errors.message = 'Message must be 500 characters or less';
			}

			return Object.keys(this.errors).length === 0;
		},

		isValidEmail(email) {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailRegex.test(email);
		},

		async submitForm() {
			if (!this.validateForm()) {
				return;
			}

			this.isSubmitting = true;

			try {
				// Simulate API call
				await new Promise((resolve) => setTimeout(resolve, 1500));

				// Here you would typically send the form data to your backend
				console.log('Form submitted:', this.form);

				this.showSuccess = true;
				this.resetForm();

				// Hide success message after 5 seconds
				setTimeout(() => {
					this.showSuccess = false;
				}, 5000);
			} catch (error) {
				console.error('Error submitting form:', error);
				// Handle error (show error message to user)
			} finally {
				this.isSubmitting = false;
			}
		},

		resetForm() {
			this.form = {
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
				newsletter: false,
			};
			this.errors = {};
		},
	},
};
</script>

<style scoped>
/* Custom focus styles */
input:focus,
select:focus,
textarea:focus {
	outline: none;
	box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Smooth transitions */
input,
select,
textarea,
button {
	transition: all 0.2s ease-in-out;
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
	width: 8px;
}

textarea::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
	background: #c1c1c1;
	border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
	background: #a1a1a1;
}
</style>
