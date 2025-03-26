<script setup>
import Collage from './Collage.vue';
</script>

<template>
	<div class="flex flex-col gap-6">
		<div class="w-full h-full">
			<div class="body-container justify-start flex-1 flex-col gap-6">
				<div class="mt-8 p-4 flex-1 items-center justify-center">
					<h2 class="text-center">Welcome to Signature Vision</h2>
					<p class="text-center mt-4">
						Where creativity meets precision to bring your ideas and visions to
						life through exceptional design.
					</p>
				</div>

				<div class="hidden sm:block">
					<Collage />
				</div>
			</div>
		</div>
		<div
			class="bg-[url(@assets/CleanWhiteDesk.jpg)] bg-image-full bg-scroll bg-cover bg-right w-full h-full w-full p-6 flex flex-row gap-4 justify-between items-center"
		>
			<div class="body-container">
				<div
					class="bg-primary-background bg-opacity-80 rounded-xl px-6 sm:bg-transparent"
				>
					<p
						class="text-start sm:text-justify text-black w-full sm:w-1/2 pt-10"
					>
						Innovative Designs That Drive Results Enhance your brand’s presence
						with our expert design services. We specialize in custom websites,
						premium business branding, and compelling marketing materials that
						set your business apart. Whether you require a professionally
						crafted website, high-quality business cards, impactful
						advertisements, or elegantly designed event invitations, we
						transform your vision into creative, memorable solutions that leave
						a lasting impression.
					</p>
					<p
						class="text-start sm:text-justify text-black w-full sm:w-1/2 pt-4 pb-10"
					>
						At Signature Vision, we believe that exceptional design has the
						power to connect, inspire, and drive success. Let’s collaborate to
						create something truly remarkable.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
