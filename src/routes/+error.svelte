<script>
  import { page } from '$app/stores';

  $: {
    if ($page.status === 404) {
      window.location.href = '/';
    }
  }
</script>

<div class="freq-container mt-[150px]">
  <p>Error</p>
  <a class="underline" href="/">Return Home</a>
</div>
