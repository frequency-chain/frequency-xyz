<script lang="ts">
  export let classes = '';
</script>

<p class={`body sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] ${classes}`}>
  <slot />
</p>
