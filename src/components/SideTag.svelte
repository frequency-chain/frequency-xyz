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
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    transition:fade={{ duration: 200 }}
  >
    <div class="relative max-h-screen max-w-[600px] overflow-y-auto shadow-xl">
      <slot />
      <div class="absolute right-2 top-0 z-50 p-3">
        <OpenCloseIcon onClick={closePopup} isOpen={true} />
      </div>
    </div>
  </div>
{/if}
