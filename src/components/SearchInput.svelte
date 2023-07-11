<script>
	import SortButton from './SortButton.svelte'
	import Input from './Input.svelte'
	export let value
</script>

<div class="px-4">
	<label for="rider" class="block text-sm font-medium leading-6 text-gray-900">Search rider</label>
	<div class="mt-2 flex rounded-md shadow-sm">
		<Input bind:value />
		<SortButton />
	</div>
</div>
