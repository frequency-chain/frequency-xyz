<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  // Don't use a redirect, as we might eventually use this for other purposes
  goto(base + '/dev-portal');
</script>
