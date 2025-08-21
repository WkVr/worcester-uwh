<script setup>
import Header from '@components/layouts/Header.vue';
import Footer from '@components/layouts/Footer.vue';
</script>

<template>
	<div class="min-h-screen flex justify-between flex-col">
		<Header />
		<main class="flex-1 h-full">
			<router-view />
		</main>
		<Footer />
	</div>
</template>
