<script lang="ts">
  export let classes: string = '';
</script>

<section class={`sm:freq-container md:freq-container body relative h-full ${classes}`}>
  <slot />
</section>
