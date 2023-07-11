<script>
	import Rider from './Rider.svelte'
	export let filteredRiders
</script>

{#if filteredRiders.length > 0}
	<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
		{#each filteredRiders as { id, name, img }}
			<li>
				<Rider {id} {name} {img} />
			</li>
		{/each}
	</ul>
{:else}
	<p class="mt-8 italic text-center">Rider not found...</p>
{/if}
