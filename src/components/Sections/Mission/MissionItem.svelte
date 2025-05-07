<script lang="ts">
  interface Props {
    icon?: import('svelte').Snippet;
    body?: import('svelte').Snippet;
  }

  let { icon, body }: Props = $props();
</script>

<div class="mx-auto flex max-w-[550px]">
  <!--    left column-->
  <div class="w-f48 relative flex flex-col">
    <!--        icon-->
    <div class="right-f4 h-f24 w-f24 absolute top-0">
      {@render icon?.()}
    </div>
    <!--        horizontal border-->
    <span class="top-f24 w-f160 border-gray3 absolute left-0 border-b-2"></span>
  </div>
  <!--    right column-->
  <div class="body pl-f24 pt-f48 relative flex max-w-[calc(100%-48px)] flex-col">
    <!--        vertical border-->
    <span class="top-f12 h-f120 border-gray3 absolute left-0 border-l-2"></span>
    <!--        body-->
    {@render body?.()}
  </div>
</div>
