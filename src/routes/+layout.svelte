<script lang="ts">
  import Header from '../components/Header/Header.svelte';
  import { Footer } from '@frequency-chain/style-guide';
</script>

<div class="freq-container flex-col">
  <Header />
  <slot />
  <Footer />
</div>
