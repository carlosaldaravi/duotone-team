<script>
	import Rider from './Rider.svelte'
	import { riders } from '../data/riders'

	// const params = Astro.params
	// console.log({ params })

	// const search = Astro.url.search
	// console.log({search});

	// const disciplineSelected = Astro.url.searchParams.get('discipline')! || ''
	// let filteredRiders = []
	// disciplineSelected !== ''
	// 	? (filteredRiders = riders.filter((rider) => rider.discipline.includes(disciplineSelected)))
	// 	: (filteredRiders = riders)
</script>

<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
	<!-- {
		filteredRiders.map(({ id, name, img }) => {
			return (
				<li>
					<Rider id={id} name={name} img={img} />
				</li>
			)
		})
	} -->
	{#each riders as { id, name, img }}
		<li>
			<Rider {id} {name} {img} />
		</li>
	{/each}
</ul>
