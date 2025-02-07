<template>
	<footer class="text-primary-600">
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
				<a class="font-heading text-primary-900 flex items-center justify-center font-medium md:justify-start">
					<Icon name="heroicons:sparkles" class="h-10 w-10" />
					<span class="ml-3 text-xl">Template</span>
				</a>
				<p class="text-primary-500 mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div
				v-gsap.add.withPrevious.fromTo="[
					{ opacity: 0, y: -50 },
					{ opacity: 1, y: 0, duration: 0.8 }
				]"
				class="mt-10 -mb-10 flex flex-grow flex-wrap justify-end text-center md:mt-0 md:pl-20 md:text-left"
			>
				<div class="w-full px-4 md:w-1/2 lg:w-1/4">
					<h2 class="font-heading text-primary-900 mb-3 text-sm font-medium tracking-widest">CATEGORIES</h2>
					<nav class="mb-10 list-none">
						<li>
							<a class="text-primary-600 hover:text-primary-800">First Link</a>
						</li>
						<li>
							<a class="text-primary-600 hover:text-primary-800">Second Link</a>
						</li>
						<li>
							<a class="text-primary-600 hover:text-primary-800">Third Link</a>
						</li>
						<li>
							<a class="text-primary-600 hover:text-primary-800">Fourth Link</a>
						</li>
					</nav>
				</div>
				<div class="w-full px-4 md:w-1/2 lg:w-1/4">
					<h2 class="font-heading text-primary-900 mb-3 text-sm font-medium tracking-widest">CATEGORIES</h2>
					<nav class="mb-10 list-none">
						<li>
							<a class="text-primary-600 hover:text-primary-800">First Link</a>
						</li>
						<li>
							<a class="text-primary-600 hover:text-primary-800">Second Link</a>
						</li>
						<li>
							<a class="text-primary-600 hover:text-primary-800">Third Link</a>
						</li>
						<li>
							<a class="text-primary-600 hover:text-primary-800">Fourth Link</a>
						</li>
					</nav>
				</div>
			</div>
		</div>
		<div v-gsap.add.withPrevious.fromTo="[{ opacity: 0 }, { opacity: 1, duration: 0.8 }]" class="bg-primary-100">
			<div class="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
				<p class="text-primary-500 text-center text-sm sm:text-left">© {{ new Date().getFullYear() }} Template</p>
				<span class="mt-2 inline-flex justify-center sm:mt-0 sm:ml-auto sm:justify-start">
					<a class="text-primary-500">
						<svg
							fill="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="h-5 w-5"
							viewBox="0 0 24 24"
						>
							<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
						</svg>
					</a>
					<a class="text-primary-500 ml-3">
						<svg
							fill="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="h-5 w-5"
							viewBox="0 0 24 24"
						>
							<path
								d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
							></path>
						</svg>
					</a>
					<a class="text-primary-500 ml-3">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="h-5 w-5"
							viewBox="0 0 24 24"
						>
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
						</svg>
					</a>
					<a class="text-primary-500 ml-3">
						<svg
							fill="currentColor"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="0"
							class="h-5 w-5"
							viewBox="0 0 24 24"
						>
							<path
								stroke="none"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
							></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</a>
				</span>
			</div>
		</div>
	</footer>
</template>
