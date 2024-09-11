<script lang="ts">
    let { passedparam }: any = $props();

    $effect(() => {
      console.log("derived state testcomponent", passedparam);
    });
</script>

<h1>component value: {passedparam.file_name}</h1>
