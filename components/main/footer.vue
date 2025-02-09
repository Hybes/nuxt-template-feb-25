<template>
	<footer class="bg-primary-500/10 text-primary-600">
		<div
			v-gsap.timeline
			class="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start"
		>
			<div
				v-gsap.add.fromTo="[
					{ opacity: 0, x: -50 },
					{ opacity: 1, x: 0, duration: 0.8 }
				]"
				class="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left"
			>
				<NuxtLink class="font-heading text-primary-900 flex items-center justify-center font-medium md:justify-start">
					<Icon name="heroicons:sparkles" class="h-10 w-10" />
					<span class="ml-3 text-xl">Template</span>
				</NuxtLink>
				<p class="text-primary-500 mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div
				v-gsap.add.withPrevious.fromTo="[
					{ opacity: 0, y: -50 },
					{ opacity: 1, y: 0, duration: 0.8 }
				]"
				class="mt-10 -mb-10 flex flex-grow flex-wrap justify-end text-center md:mt-0 md:pl-20 md:text-left"
			>
				<div class="w-1/2 px-4 lg:w-1/4">
					<h2 class="font-heading text-primary-900 mb-3 text-sm font-medium tracking-widest">CATEGORIES</h2>
					<nav class="mb-10 list-none">
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">First Link</NuxtLink>
						</li>
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">Second Link</NuxtLink>
						</li>
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">Third Link</NuxtLink>
						</li>
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">Fourth Link</NuxtLink>
						</li>
					</nav>
				</div>
				<div class="w-1/2 px-4 lg:w-1/4">
					<h2 class="font-heading text-primary-900 mb-3 text-sm font-medium tracking-widest">CATEGORIES</h2>
					<nav class="mb-10 list-none">
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">First Link</NuxtLink>
						</li>
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">Second Link</NuxtLink>
						</li>
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">Third Link</NuxtLink>
						</li>
						<li>
							<NuxtLink class="text-primary-600 hover:text-primary-800">Fourth Link</NuxtLink>
						</li>
					</nav>
				</div>
			</div>
		</div>
		<div v-gsap.add.withPrevious.fromTo="[{ opacity: 0 }, { opacity: 1, duration: 0.8 }]" class="bg-primary-100">
			<div class="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
				<p class="text-primary-500 text-center text-sm sm:text-left">© {{ new Date().getFullYear() }} Template</p>
				<span class="mt-2 inline-flex justify-center sm:mt-0 sm:ml-auto sm:justify-start">
					<NuxtLink class="text-primary-500">
						<Icon name="mage:facebook" class="h-5 w-5" />
					</NuxtLink>
					<NuxtLink class="text-primary-500 ml-3">
						<Icon name="mage:twitter" class="h-5 w-5" />
					</NuxtLink>
					<NuxtLink class="text-primary-500 ml-3">
						<Icon name="mage:instagram-square" class="h-5 w-5" />
					</NuxtLink>
					<NuxtLink class="text-primary-500 ml-3">
						<Icon name="mage:email" class="h-5 w-5" />
					</NuxtLink>
				</span>
			</div>
		</div>
	</footer>
</template>
