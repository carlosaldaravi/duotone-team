<script>
	export let disciplineSelected
	import { options } from '../data/options'
	import Button from './Button.svelte'
</script>

<div class="hidden sm:block">
	<div class="border-b border-gray-200">
		<nav class="-mb-px flex" aria-label="Tabs">
			{#each options as { value, label }}
				<Button {value} {label} {disciplineSelected} />
			{/each}
		</nav>
	</div>
</div>
