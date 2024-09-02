<script lang="ts">
    let { children } = $props();
</script>


<div>
    <a href="/---1" >---1</a>
    <a href="/2---" >2---</a>

    {@render children()}
</div>