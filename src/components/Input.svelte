<script>
	import { getContext } from 'svelte'
	export let value
	const { searchRider } = getContext('ridersSearch')
</script>

<div class="relative flex flex-grow items-stretch focus-within:z-10">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
			<path
				d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
			/>
		</svg>
	</div>
	<input
		bind:value
		on:input={() => searchRider(value)}
		type="text"
		name="rider"
		id="rider"
		class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
		placeholder="Write the Rider Name.."
	/>
</div>
