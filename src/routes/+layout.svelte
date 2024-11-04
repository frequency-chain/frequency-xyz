<script lang="ts">
  import Header from '../components/Header/Header.svelte';
  import { Footer } from '@frequency-chain/style-guide';
</script>

<div class="relative lg:max-w-[100vw] xl:max-w-page">
  <Header />
  <div class="mt-4 p-3">
    <slot />
  </div>
  <Footer />
</div>
