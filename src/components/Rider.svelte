<script>
	export let id, name, img
</script>

<a
	class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"
	href={`/${id}`}
>
	<img
		class="aspect-[1/1] h-full object-cover w-full max-w-full rounded"
		src={img}
		alt={`Rider ${name}`}
		style={`view-transition-name: rider-${id}`}
	/>
	<h2 class="my-4 text-2xl text-center font-bold" style={`view-transition-name: rider-name-${id}`}>
		{name}
	</h2>
</a>

<style>
	/* Global, entregada tal como está al navegador.
       Se aplica a todas las etiquetas <h1> de tu sitio web. */
	@keyframes show {
		from {
			opacity: 0;
			scale: 25%;
		}
		to {
			opacity: 1;
			scale: 100%;
		}
	}

	img {
		view-timeline-name: --image;
		view-timeline-axis: block;

		animation-timeline: --image;
		animation-name: show;

		animation-range: entry 25% cover 60%;
		animation-fill-mode: both;
	}
</style>
