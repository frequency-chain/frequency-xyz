<script>
  import Header from '../components/Header/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div class="max-w-page shadow-xl">
  <div class="w-[100vw] py-[40px]">
    <div class="min-h-[calc(100vh-145px)] pt-[27px]">
      <Header />
      <slot />
    </div>
    <Footer />
  </div>
</div>
