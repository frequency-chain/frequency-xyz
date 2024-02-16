<script>
  import Header from '../components/Header/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import JoinSocials from '../components/JoinSocials.svelte';
</script>

<div class="max-w-page shadow-xl">
  <div class="w-[100vw] py-[40px]">
    <div class="min-h-[calc(100vh-90px)]">
      <Header />
      <div class="md:mt[75px] lg:mt[100px] sm:mt-[50px]">
        <slot />
        <JoinSocials />
      </div>
    </div>
    <Footer />
  </div>
</div>
