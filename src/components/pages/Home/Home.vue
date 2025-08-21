<script setup>
import Collage from './Collage.vue';
</script>

<template>
	<div
		class="bg-[url(@assets/swimming-pool-3.jpg)] bg-image-full bg-scroll bg-cover bg-right w-full h-full w-full p-6 pb-0 flex flex-row gap-4 justify-between items-center"
	>
		<div class="flex flex-col">
			<div class="body-container justify-start flex-1 flex-col gap-6">
				<div class="mt-8 p-4 flex-1 items-center justify-center">
					<h2 class="text-center text-white">
						Welcome to the Worcester Underwater Hockey Club
					</h2>
					<p class="text-center mt-4 text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
						aliquet lectus. Nam lacus purus, dictum sed porttitor at, tempus
						vitae augue.
					</p>
				</div>

				<div class="hidden sm:block">
					<Collage />
				</div>
			</div>
			<div class="flex flex-col gap-6 p-4 bg-primary-light bg-opacity-50">
				<div class="body-container grid grid-cols-2">
					<div class="">
						<div class="width-80">
							<p
								class="text-start sm:text-justify text-black text-bold w-full text-white"
							>
								Sed scelerisque iaculis semper. Aenean tempus fringilla dui, in
								malesuada lacus pharetra sed. Fusce vel nulla vitae magna
								vestibulum pellentesque eu viverra augue. Donec pulvinar, diam
								in elementum faucibus, urna tellus ultricies tortor, quis
								suscipit lorem lorem quis justo. Nunc consectetur elit ac augue
								lacinia, in sodales augue cursus. Morbi porttitor consequat
								ipsum, quis eleifend magna euismod vel. Fusce mattis porttitor
								feugiat. Maecenas bibendum mattis interdum. Aenean tincidunt
								pharetra urna, et cursus nisl sollicitudin nec. Sed elementum
								est at sem placerat, eu hendrerit diam lacinia. Sed laoreet elit
								non mi iaculis posuere. Aliquam erat volutpat. Donec nec
								fermentum ante, vel aliquet quam. Orci varius natoque penatibus
								et magnis dis parturient montes, nascetur ridiculus mus.
								Pellentesque elementum lacus malesuada fermentum lacinia. Morbi
								magna est, tempor et ipsum vehicula, hendrerit accumsan dui.
							</p>
						</div>
					</div>
					<div class="md:hidden"></div>
				</div>
			</div>
		</div>
	</div>
</template>
