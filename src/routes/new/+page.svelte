<script lang="ts">
	let name = '';
	let justinRating = 50;
	let piaRating = 50;
</script>

<form method="POST">
	<input type="text" placeholder="Name" name="name" bind:value={name} required />

	<p>Pia: {piaRating}</p>
	<input type="range" min="0" max="100" name="pia-rating" bind:value={piaRating} />

	<p>Justin: {justinRating}</p>
	<input type="range" min="0" max="100" name="justin-rating" bind:value={justinRating} />

    <button>Submit</button>
</form>