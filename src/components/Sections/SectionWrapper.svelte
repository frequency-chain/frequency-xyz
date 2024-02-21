<script lang="ts">
  export let id = '';
  export let classes = '';
</script>

<div {id} class={`w-[100vw] min-w-full sm:pt-[80px] lg:pt-[100px] ${classes}`}>
  <slot />
</div>
