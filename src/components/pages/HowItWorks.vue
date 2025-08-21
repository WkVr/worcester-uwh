<script setup>
import HowToVideo from '../HowToVideo.vue';
</script>

<template>
	<div
		class="bg-[url(@assets/swimming-pool-2.jpg)] bg-image-full bg-scroll bg-cover bg-right w-full h-full w-full p-6 pt-0 flex flex-row gap-4 justify-between items-center h-100"
	>
		<div class="flex flex-col mt-4">
			<div class="card">
				<div class="body-container">
					<div class="width-80">
						<section id="how-uwh-works" aria-labelledby="uwh-title">
							<h2 id="uwh-title">How Underwater Hockey Works</h2>
							<p>
								Underwater hockey (also called “octopush”) is a fast,
								non-contact team sport played on the bottom of a swimming pool.
								Two teams of six players (plus subs) use short sticks to push a
								lead puck into the opponent’s goal.
							</p>

							<h3 class="mt-4">Basics</h3>
							<ul>
								<li>
									<strong>Teams:</strong> 6 in the water per side, rolling
									substitutions.
								</li>
								<li>
									<strong>Objective:</strong> Score by pushing the puck into the
									3-meter goal tray.
								</li>
								<li>
									<strong>Play area:</strong> Pool bottom, typically 25m ×
									12–15m, depth ~1.8–2.5m.
								</li>
								<li>
									<strong>Game time:</strong> Commonly two halves (10–15 minutes
									each) with a short break.
								</li>
							</ul>

							<h3 class="mt-4">Equipment</h3>
							<ul>
								<li>Mask, snorkel, fins</li>
								<li>Glove (for the stick hand)</li>
								<li>Short stick (one hand only)</li>
								<li>Cap (numbered, with ear protection)</li>
								<li>Lead puck (~1.3–1.5kg)</li>
							</ul>

							<h3 class="mt-4">Rules at a Glance</h3>
							<ul>
								<li>
									No breathing gear; players surface to breathe and rotate with
									teammates.
								</li>
								<li>
									Stick must be used to play the puck—no hands or body blocking.
								</li>
								<li>
									Non-contact: shoulder-to-shoulder is okay, dangerous play is
									penalized.
								</li>
								<li>
									Play restarts at center after a goal; infringements lead to
									free pucks or penalties.
								</li>
							</ul>

							<h3 class="mt-4">Why It’s Awesome</h3>
							<ul>
								<li>Total-body workout and low-impact on joints</li>
								<li>Teamwork and strategy under time and breath pressure</li>
								<li>
									Inclusive and welcoming—great for beginners and cross-training
								</li>
							</ul>

							<details class="text-white mt-4">
								<summary><strong>FAQs</strong></summary>
								<ul>
									<li>
										<strong>Do I need experience?</strong> No, if you can swim
										comfortably, you can learn.
									</li>
									<li>
										<strong>What should I bring first time?</strong> Swimsuit
										and towel. We’ll help with the rest.
									</li>
									<li>
										<strong>Is it safe?</strong> Yes, non-contact rules and
										certified refs keep play safe.
									</li>
								</ul>
							</details>
						</section>

						<div class="mt-8">
							<HowToVideo
								videoId="1Rt0NbdWcKw"
								title="How To Play Underwater Hockey?"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
