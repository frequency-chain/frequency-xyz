<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import OpenCloseIcon from './OpenCloseIcon.svelte';

  export let triggerText = 'Open Popup';
  let isPopupOpen = false;

  function togglePopup() {
    isPopupOpen = !isPopupOpen;
  }

  function closePopup() {
    isPopupOpen = false;
  }

  function handleKeydown(event: { key?: string }) {
    if (event?.key === 'Escape' && isPopupOpen) {
      closePopup();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<div class="fixed right-0 top-1/4 z-50 flex transform print:hidden">
  <button
    class="origin-top-left -translate-y-1/2 translate-x-full rotate-90 cursor-pointer rounded-b-lg bg-teal px-4 py-2 text-white shadow-md shadow-navy transition-shadow duration-300 hover:shadow"
    on:click={togglePopup}
  >
    {triggerText}
  </button>
</div>

{#if isPopupOpen}
  <div
    role="none"
    on:click|preventDefault={closePopup}
    class="mobile-bar-padding fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    transition:fade={{ duration: 200 }}
  >
    <div role="none" on:click|stopPropagation class="relative max-h-full max-w-[600px] overflow-y-auto">
      <slot />
      <div class="absolute right-2 top-0 z-50 px-3 pb-2 pt-4">
        <OpenCloseIcon onClick={closePopup} isOpen={true} />
      </div>
    </div>
  </div>
{/if}

<style>
  .mobile-bar-padding {
    padding-top: max(env(safe-area-inset-top, 10px), 10px);
    padding-bottom: max(env(safe-area-inset-bottom, 10px), 10px);
    padding-left: max(env(safe-area-inset-left, 10px), 10px);
    padding-right: max(env(safe-area-inset-right, 10px), 10px);
  }
</style>
