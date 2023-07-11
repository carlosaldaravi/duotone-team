<script>
	export let disciplineSelected
	import Tabs from './Tabs.svelte'
	import SelectRiders from './SelectRiders.svelte'
</script>

<div class="mb-2 px-4">
	<SelectRiders {disciplineSelected} />
	<Tabs {disciplineSelected} />
</div>
