<script lang="ts">
  export let isLeft: boolean;
  export let classes: string;
</script>

<div
  class={`${isLeft ? 'left-0 justify-end lg:pr-7' : 'right-0 justify-start lg:pl-7'} sm:freq-container md:freq-container top-0 flex sm:relative sm:pt-6 lg:absolute lg:w-[50%] lg:pt-[150px] vertical-lg:relative vertical-lg:w-full vertical-lg:pt-[40px] ${classes}`}
>
  <slot />
</div>
