<script>
  import Header from '../components/Header/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div>
  <div class="max-w-page mt-[27px] min-h-[calc(100vh-50px)] w-[100vw]">
    <Header />
    <slot />
  </div>
  <Footer />
</div>
