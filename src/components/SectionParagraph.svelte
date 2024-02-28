<script lang="ts">
  export let classes = '';
</script>

<p class={`body sm:max-w-[800px] lg:max-w-[450px] ${classes}`}>
  <slot />
</p>
