<script lang="ts">
    import type {PageData} from './$types';
    export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/new">New Rating</a>

{#each data.ratedObjects as ratedObject}
    <div class="flex flex-col">
        <a href={ratedObject.id}>{ratedObject.name}</a>
        <p>P: {ratedObject.ratings.pia}</p>
        <p>J: {ratedObject.ratings.justin}</p>
        <hr>
    </div>
{/each}