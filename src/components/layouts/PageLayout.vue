<script setup>
import Header from '@components/layouts/Header.vue';
import Footer from '@components/layouts/Footer.vue';
</script>

<template>
	<div class="h-screen">
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>
