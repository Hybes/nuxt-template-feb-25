<template>
	<section class="text-primary-600">
		<div v-gsap.timeline class="container mx-auto px-5 py-24">
			<div
				v-gsap.add.fromTo="[
					{ opacity: 0, y: -50 },
					{ opacity: 1, y: 0, duration: 0.8 }
				]"
				class="mb-20 flex w-full flex-col text-center"
			>
				<h2 class="font-heading text-accent-500 mb-1 text-xs font-medium tracking-widest">LOREM IPSUM DOLOR</h2>
				<h1 class="font-heading text-primary-900 mb-4 text-2xl font-medium sm:text-3xl">
					Consectetur Adipiscing Elit Sed Do
				</h1>
				<p class="mx-auto text-base leading-relaxed lg:w-2/3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</p>
			</div>
			<button
				v-gsap.add.withPrevious.fromTo="[
					{ opacity: 0, x: 50 },
					{ opacity: 1, x: 0, duration: 0.8 }
				]"
				v-gsap.magnetic
				class="bg-accent-500 hover:bg-accent-600 mx-auto mt-16 flex rounded border-0 px-8 py-2 text-lg text-white focus:outline-none"
			>
				Lorem Ipsum
			</button>
		</div>
	</section>
</template>
