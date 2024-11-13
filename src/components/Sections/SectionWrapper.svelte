<script lang="ts">
  export let id = '';
</script>

<div {id} class={`scroll-target w-full ${$$restProps.class}`}>
  <slot />
</div>
