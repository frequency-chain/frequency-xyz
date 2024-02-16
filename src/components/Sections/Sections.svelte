<script lang="ts">
  export let scrollPosition: number;
  export let isLastSection: boolean;

  const handleWheel = (event: WheelEvent) => {
    if (!isLastSection || event.deltaY < 0) event.preventDefault();
    scrollPosition = event.deltaY;
  };
</script>

<!-- For Mobile and Short -->
<div class="sm:block md:block lg:hidden short:block">
  <slot />
</div>

<!-- For Desktop -->
<div
  id="scroll-container"
  class="h-[500px] flex-nowrap overflow-hidden sm:hidden md:hidden lg:flex short:hidden"
  on:wheel={handleWheel}
>
  <slot />
</div>
