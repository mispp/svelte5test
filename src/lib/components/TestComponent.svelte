<script lang="ts">
    let { data }: any = $props();

    let state = $state(data);
    let dstate = $derived(state.file_name);

    $effect(() => {
		console.log("derived state mindex/+page.svelte", dstate);
	});
</script>

<h1>{dstate.file_name}</h1>
