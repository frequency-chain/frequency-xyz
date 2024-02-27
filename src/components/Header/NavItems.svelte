<script lang="ts">
  export let textColor: string;
  export let section: number;
  export let isDesktop: boolean = true;
</script>

{#if isDesktop}
  <a class={`underline-on-hover after:bg-${textColor}`} href="/" on:click|preventDefault={() => (section = 1)}>About.</a
  >
{/if}
<!-- <a class={`underline-on-hover after:bg-${textColor}`} href="/#">Our Technology.</a> -->
<a
  class={`underline-on-hover after:bg-${textColor}`}
  href="https://docs.frequency.xyz/"
  target="_blank"
  rel="noreferrer"
  role="">Dev Docs.</a
>
<a
  class={`underline-on-hover after:bg-${textColor}`}
  href="https://medium.com/one-frequency"
  target="_blank"
  rel="noreferrer">Newsroom.</a
>
<a class={`underline-on-hover after:bg-${textColor}`} href="mailto:info@frequency.xyz">Contact.</a>
