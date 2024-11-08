<script lang="ts">
  import Header from '../components/Header/Header.svelte';
  import { Footer } from '@frequency-chain/style-guide';
</script>

<div class="freq-container">
  <Header />
</div>
<div class="max-w-screen-xl">
  <slot />
</div>
<Footer type="dark" class="w-full border-grayBorder border-opacity-25 bg-navy vertical-lg:w-[100%]" />
