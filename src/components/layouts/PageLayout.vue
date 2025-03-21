<script setup>
import Header from '@components/layouts/Header.vue';
</script>

<template>
	<Header />
	<div class="body-container">
		<div class="container mx-auto w-full">
			<main>
				<router-view />
			</main>
		</div>
	</div>
</template>
