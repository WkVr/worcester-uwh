<template>
	<div
		class="video-wrapper"
		role="group"
		:aria-label="title || 'Underwater Hockey Video'"
	>
		<iframe
			:src="embedUrl"
			:title="title || 'Underwater Hockey Video'"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
			loading="lazy"
			referrerpolicy="strict-origin-when-cross-origin"
		></iframe>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	videoId: { type: String, required: true },
	title: { type: String, default: '' },
	start: { type: Number, default: 0 }, // seconds
	autoplay: { type: Boolean, default: false },
	cc: { type: Boolean, default: false }, // closed captions
	modest: { type: Boolean, default: true }, // modestbranding
});

const embedUrl = computed(() => {
	const base = `https://www.youtube-nocookie.com/embed/${props.videoId}`;
	const params = new URLSearchParams({
		start: String(props.start || 0),
		autoplay: props.autoplay ? '1' : '0',
		modestbranding: props.modest ? '1' : '0',
		cc_load_policy: props.cc ? '1' : '0',
		rel: '0',
	});
	return `${base}?${params.toString()}`;
});
</script>

<style scoped>
.video-wrapper {
	position: relative;
	width: 100%;
	max-width: 960px;
	aspect-ratio: 16 / 9;
	margin: 0 auto;
}
.video-wrapper iframe {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}
</style>
