<script lang="ts">
  import { type Snippet } from 'svelte';
  import Header from '../components/Header/Header.svelte';
  import { Footer } from '@frequency-chain/style-guide';

  let { children } = $props();
  const debugScreens = false; // set to true to enable debugging CSS size breaks
</script>

{#snippet mainPage(content: Snippet)}
  <Header />
  <div class="w-full">
    {@render content()}
  </div>
  <div class="freq-container-padding w-full bg-navy">
    <Footer type="dark" class="w-full border-grayBorder vertical-lg:w-[100%]" />
  </div>
{/snippet}

{#if debugScreens}
  <div class="debug-screens">
    {@render mainPage(children)}
  </div>
{:else}
  {@render mainPage(children)}
{/if}
