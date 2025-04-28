<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { children, ...rest }: Props = $props();
</script>

<p class={`body sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] ${rest.class}`}>
  {@render children?.()}
</p>
