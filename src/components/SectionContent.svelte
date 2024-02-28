<script lang="ts">
  export let classes: string = '';
  export let isRightAligned: boolean = true;
</script>

<div class={`${isRightAligned ? 'sm:paragraph-spacing-right' : 'sm:paragraph-spacing-left'}`}>
  <section class={`sm:freq-container md:freq-container body relative h-full ${classes}`}>
    <slot />
  </section>
</div>
