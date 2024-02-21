<script>
  import Footer from '../components/Footer.svelte';
  import JoinSocials from '../components/JoinSocials.svelte';
</script>

<div class="max-w-page shadow-xl">
  <div class="w-[100vw]">
    <div class="min-h-[calc(100vh-100px)]">
      <slot />
      <JoinSocials />
    </div>
    <Footer />
  </div>
</div>
