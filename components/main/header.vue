<template>
	<header class="text-primary-600">
		<div v-gsap.timeline class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
			<div
				v-gsap.add.fromTo="[
					{ opacity: 0, x: -50 },
					{ opacity: 1, x: 0, duration: 0.8 }
				]"
				class="mb-4 flex items-center md:mb-0"
			>
				<NuxtLink class="font-heading text-primary-900 flex items-center font-medium">
					<Icon name="heroicons:sparkles" class="h-10 w-10" />
					<span class="ml-3 text-xl">Template</span>
				</NuxtLink>
				<button class="center ml-4 md:hidden" @click="toggleTheme">
					<Icon :name="useColorMode().preference === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" class="h-5 w-5" />
				</button>
			</div>
			<nav
				v-gsap.add.fromTo="[
					{ opacity: 0, y: -50 },
					{ opacity: 1, y: 0, duration: 0.8 }
				]"
				class="flex flex-wrap items-center justify-center text-base md:ml-auto"
			>
				<NuxtLink class="hover:text-primary-900 mr-5">First Link</NuxtLink>
				<NuxtLink class="hover:text-primary-900 mr-5">Second Link</NuxtLink>
			</nav>
			<div
				v-gsap.add.fromTo="[
					{ opacity: 0, x: 50 },
					{ opacity: 1, x: 0, duration: 0.8 }
				]"
				class="flex items-center justify-center"
			>
				<button
					class="bg-primary-100 hover:bg-primary-200 mt-4 inline-flex items-center rounded border-0 px-3 py-1 text-base focus:outline-none md:mt-0"
				>
					Button
					<Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4" />
				</button>
				<button class="md:center ml-4 hidden" @click="toggleTheme">
					<Icon :name="useColorMode().preference === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" class="h-5 w-5" />
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
const toggleTheme = () => {
	useColorMode().preference = useColorMode().preference === 'dark' ? 'light' : 'dark'
}
</script>
