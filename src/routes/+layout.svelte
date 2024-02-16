<script>
  import Header from '../components/Header/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div>
  <div class="max-w-page my-[30px] min-h-[calc(100vh-145px)] w-[100vw]">
    <Header />
    <slot />
  </div>
  <Footer />
</div>
