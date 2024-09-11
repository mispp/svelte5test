<script lang="ts">
    import TestComponent from "$lib/components/TestComponent.svelte";

	let { data } = $props();

	$effect(() => {
		console.log("derived state mindex/+page.svelte", data);
	});
</script>

<div>
	<div>
		content of +page.svelte

		<ul>
			<li>object: {data}</li>
			<li>object: {data.myobj}</li>
			<li>object: {data.myobj.file_name}</li>
		</ul>
	</div>
	<div>
		<TestComponent passedparam={data.myobj} />
	</div>
</div>
