<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { children, ...rest }: Props = $props();
</script>

<section {...rest}>
  {@render children?.()}
</section>
