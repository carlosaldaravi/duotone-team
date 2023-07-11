<script>
	import { riders } from '../data/riders'
	import { setContext } from 'svelte'
	import ListOfRiders from './ListOfRiders.svelte'
	import Navbar from './Navbar.svelte'
	import SearchInput from './SearchInput.svelte'
	let filteredRidersByDiscipline = riders
	let filteredRiders = riders
	let disciplineSelected = 'all'

	let value = ''

	setContext('ridersTab', { handleSelection })
	setContext('ridersSearch', { searchRider })
	setContext('ridersSort', { sortRiders })

	function sortRiders() {
		filteredRiders = filteredRiders.sort((a, b) => a.name.localeCompare(b.name))
	}
	function handleSelection(discipline) {
		disciplineSelected = discipline
		disciplineSelected !== 'all'
			? (filteredRiders = riders.filter((rider) => rider.discipline.includes(disciplineSelected)))
			: (filteredRiders = riders)
		filteredRidersByDiscipline = filteredRiders
		if (value !== '') {
			searchRider(value)
		}
	}

	function searchRider(name) {
		if (name !== '') {
			filteredRiders = filteredRidersByDiscipline.filter((rider) =>
				rider.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
			)
		} else {
			filteredRiders = riders
		}
	}
</script>

<SearchInput bind:value />
<Navbar {disciplineSelected} />
<ListOfRiders {filteredRiders} riderSearched={value} />
