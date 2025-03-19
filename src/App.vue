<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Header from '@components/Layout/Header.vue';
</script>

<template>
	<Header />
	<div class="body-container">
		<div class="container mx-auto w-full">
			<HelloWorld msg="Signature Vision" />
		</div>
	</div>
</template>
