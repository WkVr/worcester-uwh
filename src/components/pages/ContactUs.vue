<template>
	<div class="max-w-4xl mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
			<p class="text-lg text-gray-600 max-w-2xl">
				Please contact us if you have any questions
			</p>
		</div>

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
						Email Address
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

				<!-- Message -->
				<div>
					<label
						for="message"
						class="block text-sm font-medium text-gray-700 mb-2"
					>
						Message
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

				<!-- Submit Button -->
				<div class="pt-4">
					<button
						type="submit"
						:disabled="isSubmitting"
						class="w-full bg-primary-main text-white py-3 px-6 rounded-md hover:bg-primary-li focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
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
					</div>
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
				message: '',
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

			if (!this.form.email.trim()) {
				this.errors.email = 'Email is required';
			} else if (!this.isValidEmail(this.form.email)) {
				this.errors.email = 'Please enter a valid email address';
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
				message: '',
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
