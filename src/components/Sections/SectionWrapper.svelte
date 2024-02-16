<script lang="ts">
  export let id = '';
  export let classes = '';
</script>

<div {id} class={`w-[100vw] min-w-[100vw] ${classes}`}>
  <slot />
</div>
