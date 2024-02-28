<script lang="ts">
  export let id = '';
  export let classes = '';
</script>

<div {id} class={`relative w-[100vw] min-w-full sm:pt-[80px] lg:pt-[140px] vertical-lg:w-[100%] ${classes}`}>
  <slot />
</div>
