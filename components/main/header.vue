<template>
	<header class="bg-primary-500/10 text-primary-600">
		<div v-gsap.timeline class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
			<div
				v-gsap.add.fromTo="[
					{ opacity: 0, x: -50 },
					{ opacity: 1, x: 0, duration: 0.8 }
				]"
				class="flex w-full items-center justify-between md:w-auto md:justify-start"
			>
				<button
					class="bg-primary-100 hover:bg-primary-200 mr-4 flex h-8 w-8 items-center justify-center rounded-full md:hidden"
					@click="isOpen = !isOpen"
				>
					<Icon name="heroicons:bars-3" class="h-5 w-5" />
				</button>
				<NuxtLink class="font-heading text-primary-900 flex items-center font-medium">
					<Icon name="heroicons:sparkles" class="h-10 w-10" />
					<span class="ml-3 text-xl">Template</span>
				</NuxtLink>
				<button
					class="bg-primary-100 hover:bg-primary-200 ml-4 flex h-8 w-8 items-center justify-center rounded-full md:hidden"
					@click="toggleTheme"
				>
					<Icon :name="themeIcon" class="h-5 w-5" />
				</button>
			</div>
			<nav
				v-gsap.add.withPrevious.fromTo="[
					{ opacity: 0, y: -50 },
					{ opacity: 1, y: 0, duration: 0.8 }
				]"
				class="hidden flex-wrap items-center justify-center text-base md:ml-auto md:flex"
			>
				<NuxtLink class="hover:text-primary-900 mr-5">First Link</NuxtLink>
				<NuxtLink class="hover:text-primary-900 mr-5">Second Link</NuxtLink>
			</nav>
			<div
				v-gsap.add.withPrevious.fromTo="[
					{ opacity: 0, x: 50 },
					{ opacity: 1, x: 0, duration: 0.8 }
				]"
				class="hidden items-center justify-center md:flex"
			>
				<button
					class="bg-primary-100 hover:bg-primary-200 inline-flex items-center rounded border-0 px-3 py-1 text-base focus:outline-none"
				>
					Button
					<Icon name="heroicons:arrow-right" class="ml-1 h-4 w-4" />
				</button>
				<button
					class="bg-primary-100 hover:bg-primary-200 ml-4 hidden h-8 w-8 items-center justify-center rounded-full md:flex"
					@click="toggleTheme"
				>
					<Icon :name="themeIcon" class="h-5 w-5" />
				</button>
			</div>
		</div>

		<div
			class="bg-opacity-25 fixed inset-0 z-50 transform bg-black transition-opacity duration-300 ease-in-out md:hidden"
			:class="isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
			@click="isOpen = false"
		></div>

		<div
			class="bg-background fixed inset-y-0 left-0 z-50 w-64 transform transition duration-300 ease-in-out md:hidden"
			:class="isOpen ? 'translate-x-0' : '-translate-x-full'"
		>
			<div class="flex h-full flex-col overflow-y-auto p-6">
				<div class="mb-8 flex items-center justify-between">
					<NuxtLink class="font-heading text-primary-900 flex items-center font-medium" @click="isOpen = false">
						<Icon name="heroicons:sparkles" class="h-8 w-8" />
						<span class="ml-2 text-lg">Template</span>
					</NuxtLink>
					<button
						class="bg-primary-100 hover:bg-primary-200 flex h-8 w-8 items-center justify-center rounded-full"
						@click="isOpen = false"
					>
						<Icon name="heroicons:x-mark" class="h-5 w-5" />
					</button>
				</div>
				<nav class="flex flex-col space-y-4">
					<NuxtLink class="hover:text-primary-900 text-lg" @click="isOpen = false">First Link</NuxtLink>
					<NuxtLink class="hover:text-primary-900 text-lg" @click="isOpen = false">Second Link</NuxtLink>
				</nav>
				<div class="mt-auto">
					<button
						class="bg-primary-100 hover:bg-primary-200 mb-4 w-full rounded px-4 py-2 text-left text-lg"
						@click="isOpen = false"
					>
						Button
						<Icon name="heroicons:arrow-right" class="ml-1 inline-block h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
const colorMode = useColorMode()
const isOpen = ref(false)

const themeIcon = computed(() => {
	switch (colorMode.preference) {
		case 'light':
			return 'heroicons:sun'
		case 'dark':
			return 'heroicons:moon'
		default:
			return 'heroicons:computer-desktop'
	}
})

const toggleTheme = () => {
	const modes = ['light', 'dark', 'system']
	const currentIndex = modes.indexOf(colorMode.preference)
	const nextIndex = (currentIndex + 1) % modes.length
	colorMode.preference = modes[nextIndex]
}
</script>
