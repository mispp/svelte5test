<script lang="ts">
    import TestComponent from "$lib/components/TestComponent.svelte";

	let { data }: any = $props();

	let state = $state(data);
	let dstate = $derived(state.file_name);

	$effect(() => {
		console.log("derived state mindex/+page.svelte", dstate);
	});
</script>


<TestComponent p={state} />
