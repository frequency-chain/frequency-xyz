<script lang="ts">
  import Header from '../components/Header/Header.svelte';
  import { Footer } from '@frequency-chain/style-guide';
</script>

<Header />
<div class="w-full">
  <slot />
</div>
<div class="w-full bg-navy px-[5%] lg:px-[20%]">
  <Footer type="dark" class="w-full border-grayBorder border-opacity-25 vertical-lg:w-[100%]" />
</div>
