<script>
  import Footer from '../../components/Footer.svelte';
  import GetNotified from '../../components/GetNotified/GetNotified.svelte';
  import SideTag from '../../components/SideTag.svelte';
</script>

<div class="h-[100vh] w-[100vw] overflow-x-hidden">
  <slot />
  <Footer />
  <SideTag triggerText="Get notified">
    <GetNotified />
  </SideTag>
</div>
