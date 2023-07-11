<script>
	export let disciplineSelected
	import { options } from '../data/options'
	import { getContext } from 'svelte'
	const { handleSelection } = getContext('ridersTab')
</script>

<div class="hidden sm:block">
	<div class="border-b border-gray-200">
		<nav class="-mb-px flex" aria-label="Tabs">
			{#each options as { value, label }}
				<button
					on:click={() => handleSelection(value)}
					class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
						disciplineSelected === value
							? 'text-black border-black'
							: 'text-gray-500 border-transparent'
					}`}
					aria-current="page"
				>
					{label}
				</button>
			{/each}
		</nav>
	</div>
</div>
