<script setup>
import Header from '@components/layouts/Header.vue';
</script>

<template>
	<div class="h-screen">
		<Header />
		<main class="pb-6">
			<router-view />
		</main>
		<div class="p-6"></div>
	</div>
</template>
