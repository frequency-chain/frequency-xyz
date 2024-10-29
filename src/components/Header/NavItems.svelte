<script lang="ts">
  import { page } from '$app/stores';
  export let textColor: string;
  export let section: number;
  export let isDesktop: boolean = true;

  let isOnHomePage = $page.url.pathname === '/';
</script>

{#if !isOnHomePage}
  <a class={`underline-on-hover after:bg-${textColor}`} href="/">About.</a>
{:else if isDesktop}
  <a class={`underline-on-hover after:bg-${textColor}`} href="/" on:click|preventDefault={() => (section = 1)}>About.</a
  >
{/if}
<!-- <a class={`underline-on-hover after:bg-${textColor}`} href="/#">Our Technology.</a> -->
<a
  class={`underline-on-hover after:bg-${textColor}`}
  href="http://localhost:3000/"
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
