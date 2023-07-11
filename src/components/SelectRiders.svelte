<script>
	export let disciplineSelected
	import { options } from '../data/options'
	import { getContext } from 'svelte'
	const { handleSelection } = getContext('ridersTab')
</script>

<div class="sm:hidden">
	<label for="tabs" class="sr-only">Select a tab</label>
	<select
		id="tabs"
		name="tabs"
		class="block w-full rounded-md border-gray-300 focus:border-black focus:ring-black"
		bind:value={disciplineSelected}
		on:change={(event) => handleSelection(event.target.value)}
	>
		{#each options as { value, label }}
			<option {value}>{label}</option>
		{/each}
	</select>
</div>
