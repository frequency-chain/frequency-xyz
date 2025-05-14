<script lang="ts">
  interface Props {
    id?: string;
    children?: import('svelte').Snippet;
    [key: string]: any;
  }

  let { id = '', children, ...rest }: Props = $props();
</script>

<div {id} class={`scroll-target w-full ${rest.class || ''}`}>
  {@render children?.()}
</div>
