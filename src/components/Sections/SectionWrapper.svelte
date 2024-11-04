<script lang="ts">
  export let id = '';
  export let classes = '';
</script>

<div {id} class={`w-full ${classes}`}>
  <slot />
</div>
