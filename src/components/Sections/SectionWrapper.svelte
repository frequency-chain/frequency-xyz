<script lang="ts">
  export let id = '';
  export let classes = '';
</script>

<div {id} class={`scroll-target w-full ${classes}`}>
  <slot />
</div>
