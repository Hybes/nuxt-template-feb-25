<template>
	<div>
		<section class="text-primary-600 md:pt-12">
			<div v-gsap.timeline class="container mx-auto px-5 py-24">
				<div
					v-gsap.add.fromTo="[
						{ opacity: 0, y: -50 },
						{ opacity: 1, y: 0, duration: 0.8 }
					]"
					class="mb-4 flex w-full flex-col text-center"
				>
					<h2 class="font-heading text-accent-500 mb-1 text-xs font-medium tracking-widest">LOREM IPSUM DOLOR</h2>
					<div class="text-pretty">
						<h1>
							<span
								v-for="(word, wordIndex) in title.split(' ')"
								:key="wordIndex"
								v-gsap.whenVisible.stagger.from="{ opacity: 0, x: -32 }"
								class="mr-4 inline-block last:mr-0"
							>
								<span
									v-for="(letter, letterIndex) in word.split('')"
									:key="`${wordIndex}-${letterIndex}`"
									class="inline-block bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text pb-4 text-transparent dark:from-white dark:to-white/80"
								>
									{{ letter }}
								</span>
							</span>
						</h1>
					</div>
					<p class="mx-auto text-base leading-relaxed lg:w-2/3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
					</p>
				</div>
				<button
					v-gsap.add.withPrevious.fromTo="[
						{ opacity: 0, x: 50 },
						{ opacity: 1, x: 0, duration: 0.8 }
					]"
					v-gsap.magnetic
					class="btn"
				>
					Lorem Ipsum
				</button>
			</div>
		</section>

		<section class="text-primary-600 relative">
			<div class="container mx-auto px-5 py-24">
				<div class="mb-12 flex w-full flex-col text-center">
					<h1 class="font-heading text-primary-900 mb-4 text-2xl font-medium sm:text-3xl">Contact Us</h1>
					<p class="mx-auto text-base leading-relaxed lg:w-2/3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere numquam quidem cupiditate cum dolore labore
						provident, enim deleniti ut. Nulla excepturi pariatur amet velit vel facere non porro at aperiam.
					</p>
				</div>
				<div class="mx-auto md:w-2/3 lg:w-1/2">
					<div class="-m-2 flex flex-wrap">
						<div class="w-1/2 p-2">
							<div class="relative">
								<label for="name" class="text-primary-600 text-sm leading-7">Name</label>
								<input id="name" type="text" name="name" class="form-input" />
							</div>
						</div>
						<div class="w-1/2 p-2">
							<div class="relative">
								<label for="email" class="text-primary-600 text-sm leading-7">Email</label>
								<input id="email" type="email" name="email" class="form-input" />
							</div>
						</div>
						<div class="w-full p-2">
							<div class="relative">
								<label for="message" class="text-primary-600 text-sm leading-7">Message</label>
								<textarea id="message" name="message" class="form-input h-32 resize-none"></textarea>
							</div>
						</div>
						<div class="w-full p-2">
							<button v-gsap.magnetic class="btn">Button</button>
						</div>
						<div class="border-primary-200 mt-8 w-full border-t p-2 pt-8 text-center">
							<NuxtLink class="text-accent-500">example@email.com</NuxtLink>
							<p class="my-5 leading-normal">123 Main St. <br />Anytown, AB1 234</p>
							<span class="inline-flex">
								<NuxtLink class="text-primary-500">
									<Icon name="mage:facebook" class="h-5 w-5" />
								</NuxtLink>
								<NuxtLink class="text-primary-500 ml-4">
									<Icon name="mage:twitter" class="h-5 w-5" />
								</NuxtLink>
								<NuxtLink class="text-primary-500 ml-4">
									<Icon name="mage:instagram-square" class="h-5 w-5" />
								</NuxtLink>
								<NuxtLink class="text-primary-500 ml-4">
									<Icon name="mage:email" class="h-5 w-5" />
								</NuxtLink>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
const title = 'Consectetur Adipiscing Elit Sed Do'
</script>
