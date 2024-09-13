<script>
  import Footer from '../components/Footer.svelte';
  import JoinSocials from '../components/JoinSocials.svelte';
  import GetNotified from '../components/GetNotified.svelte';
  import SideTag from '../components/SideTag.svelte';
</script>

<div class="max-w-page overflow-x-hidden shadow-xl">
  <div class="h-[100vh] w-[100vw] overflow-x-hidden">
    <div class="min-h-[calc(100vh-100px)]">
      <slot />
      <div class="freq-container mt-[150px]">
        <JoinSocials />
      </div>
    </div>
    <Footer />
    <SideTag triggerText="Get notified">
      <GetNotified />
    </SideTag>
  </div>
</div>
