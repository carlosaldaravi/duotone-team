<script>
	import Rider from './Rider.svelte'
	import { riders } from '../data/riders'
	let filteredRiders = riders
	let disciplineSelected = 'all'

	const handleSelection = (discipline) => {
		disciplineSelected = discipline
		disciplineSelected !== 'all'
			? (filteredRiders = riders.filter((rider) => rider.discipline.includes(disciplineSelected)))
			: (filteredRiders = riders)
	}
</script>

<div class="mb-2 px-4">
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<select
			id="tabs"
			name="tabs"
			class="block w-full rounded-md border-gray-300 focus:border-black focus:ring-black"
			bind:value={disciplineSelected}
			on:change={(event) => handleSelection(event.target.value)}
		>
			<option value="all">All</option>
			<option value="wakestyle">Wakestyle</option>
			<option value="bigair">Big Air</option>
			<option value="wave">Wave</option>
			<option value="freestyle">Freestyle</option>
			<option value="youngblood">Young Blood</option>
		</select>
	</div>
	<div class="hidden sm:block">
		<div class="border-b border-gray-200">
			<nav class="-mb-px flex" aria-label="Tabs">
				<button
					on:click={() => handleSelection('all')}
					class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
						disciplineSelected === 'all'
							? 'text-black border-black'
							: 'text-gray-500 border-transparent'
					}`}
					aria-current="page"
				>
					All
				</button>
				<button
					on:click={() => handleSelection('wakestyle')}
					class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
						disciplineSelected === 'wakestyle'
							? 'text-black border-black'
							: 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700'
					}`}
				>
					Wakestyle
				</button>
				<button
					on:click={() => handleSelection('bigair')}
					class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
						disciplineSelected === 'bigair'
							? 'text-black border-black'
							: 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700'
					}`}
				>
					Big Air
				</button>
				<button
					on:click={() => handleSelection('wave')}
					class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
						disciplineSelected === 'wave'
							? 'text-black border-black'
							: 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700'
					}`}
				>
					Wave
				</button>
				<button
					on:click={() => handleSelection('freestyle')}
					class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
						disciplineSelected === 'freestyle'
							? 'text-black border-black'
							: 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700'
					}`}
				>
					Freestyle
				</button>
				<button
					on:click={() => handleSelection('youngblood')}
					class={`cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium ${
						disciplineSelected === 'youngblood'
							? 'text-black border-black'
							: 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700'
					}`}
				>
					Young Blood
				</button>
			</nav>
		</div>
	</div>
</div>
<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
	{#each filteredRiders as { id, name, img }}
		<li>
			<Rider {id} {name} {img} />
		</li>
	{/each}
</ul>
