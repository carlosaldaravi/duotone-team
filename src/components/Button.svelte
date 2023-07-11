<script>
	export let disciplineSelected
	export let value
	export let label
	import { getContext } from 'svelte'
	const { handleSelection } = getContext('ridersTab')
</script>

<button
	on:click={() => handleSelection(value)}
	class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
		disciplineSelected === value ? 'text-black border-black' : 'text-gray-500 border-transparent'
	}`}
	aria-current="page"
>
	{label}
</button>
