<script lang="ts">
  export let isLeft: boolean = false;
  export let classes: string = '';
</script>

<div
  class={`absolute -rotate-90 text-[150px] font-black leading-none ${isLeft ? 'sm:-left-3' : 'sm:-right-3'} bottom-0 sm:text-[85px] md:text-[100px] lg:-right-6 lg:left-[auto] ${classes}`}
>
  <slot />
</div>
