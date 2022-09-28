<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    let ratedObject = data.ratedObject;

    export let name = ratedObject.name;
    export let justinRating = ratedObject.ratings.justin;
    export let piaRating = ratedObject.ratings.pia;
</script>

<form method="POST" action="?/update">
    <input type="text" name="name" value={name}>
    <p>Pia {piaRating}</p>
    <input type="range" min="0" max="100" name="pia-rating" bind:value={piaRating}>
    <p>Justin {justinRating}</p>
    <input type="range" min="0" max="100" name="justin-rating" bind:value={justinRating}>
    <button>Update</button>
    <button formaction="?/delete">Delete</button>
</form>