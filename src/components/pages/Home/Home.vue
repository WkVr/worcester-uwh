<script setup>
import Collage from './Collage.vue';
</script>

<template>
	<div
		class="bg-[url(@assets/swimming-pool-3.jpg)] bg-image-full bg-scroll bg-cover bg-right w-full h-full w-full p-6 pt-0 flex flex-row gap-4 justify-between items-center"
	>
		<div class="flex flex-col">
			<div class="body-container justify-start flex-1 flex-col gap-6">
				<div class="mt-8 p-4 flex-1 items-center justify-center">
					<h2 class="text-center text-bold text-white">
						Welcome to the Worcester Underwater Hockey Club
					</h2>
					<p class="text-center mt-4 text-white">
						Dive into one of the most exciting and unique sports in the world!
						Based in Worcester, South Africa, we’re a community of players who
						love the fast-paced challenge of underwater hockey.
					</p>
				</div>

				<div class="hidden sm:block">
					<Collage />
				</div>
			</div>
			<div class="card">
				<div class="body-container grid grid-cols-2">
					<div class="">
						<div class="width-80 gap-4">
							<h2>Why Underwater Hockey?</h2>
							<ul>
								<li>Suitable for all ages and skill levels.</li>
								<li>Fun way to stay fit and make new friends.</li>
								<li>
									Unique sport that challenges both mind and body under the
									water.
								</li>
							</ul>
							<h2 class="pt-4">Who Can Join?</h2>
							<p>
								We welcome all ages and skill levels – from curious beginners to
								experienced athletes. If you can swim and enjoy the water, you
								can play! Come try a session, sharpen your skills, and
								experience the thrill of the game. All you need is a swimsuit –
								we’ll help with the rest!
							</p>
							<h2 class="pt-4">Get Involved</h2>
							<p>
								Come try a session, sharpen your skills, and experience the
								thrill of the game. All you need is the spirit – we’ll help with
								the rest!
							</p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	</div>
</template>
