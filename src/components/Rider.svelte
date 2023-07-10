<script>
export let id, name, img
// const { id, name, img } = Astro.props
</script>

<a
	class='hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl'
	href={`/${id}`}
>
	<img
		class='aspect-[1/1] h-full object-cover w-full max-w-full rounded'
		src={img}
		alt={`Rider ${name}`}
		style={`view-transition-name: rider-${id}`}
	/>
	<h2 class='my-4 text-2xl text-center font-bold' style={`view-transition-name: rider-name-${id}`}>
		{name}
	</h2>
</a>
