<script lang="ts">
  export let isLeft: boolean;
  export let classes: string;
</script>

<div
  class={`${isLeft ? 'left-0 pr-7 lg:justify-end' : 'right-0 pl-7 lg:justify-start'} sm:freq-container md:freq-container top-0 flex h-full sm:relative sm:justify-center sm:pt-6 lg:absolute lg:w-[50%] lg:pt-[150px] ${classes}`}
>
  <slot />
</div>
