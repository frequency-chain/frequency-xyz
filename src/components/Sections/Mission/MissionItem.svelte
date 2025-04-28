<script lang="ts">
  interface Props {
    icon?: import('svelte').Snippet;
    body?: import('svelte').Snippet;
  }

  let { icon, body }: Props = $props();
</script>

<div class="mx-auto flex max-w-[550px]">
  <!--    left column-->
  <div class="relative flex w-f48 flex-col">
    <!--        icon-->
    <div class="absolute right-f4 top-0 h-f24 w-f24">
      {@render icon?.()}
    </div>
    <!--        horizontal border-->
    <span class="absolute left-0 top-f24 w-f160 border-b-2 border-gray3"></span>
  </div>
  <!--    right column-->
  <div class="body relative flex max-w-[calc(100%-48px)] flex-col pl-f24 pt-f48">
    <!--        vertical border-->
    <span class="absolute left-0 top-f12 h-f120 border-l-2 border-gray3"></span>
    <!--        body-->
    {@render body?.()}
  </div>
</div>
