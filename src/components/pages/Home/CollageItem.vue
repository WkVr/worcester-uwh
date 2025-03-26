<script setup>
const { imageUrl, width, height } = defineProps([
	'imageUrl',
	'width',
	'height',
]);
</script>

<template>
	<div class="bg-primary-background rounded-xl p-6">
		<img :src="imageUrl" :class="(width, height)" />
	</div>
</template>
