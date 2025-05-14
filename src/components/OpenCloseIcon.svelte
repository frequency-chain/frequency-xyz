<script lang="ts">
  interface Props {
    onClick: () => void;
    isOpen: boolean;
    classes?: string;
  }

  let { onClick, isOpen, classes = '' }: Props = $props();

  function handleOnClick(event: Event) {
    event.preventDefault();
    onClick();
  }
</script>

<button
  aria-label="Open main navigation"
  aria-controls="mobile-navigation"
  onclick={handleOnClick}
  class={`z-50 ${classes}`}
>
  <svg class="h-[40px] w-[40px]" role="none">
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen ? 'translate-x-[8px] translate-y-[35%] -rotate-45 stroke-white' : 'stroke-indigo rotate-0'}`}
    />
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[-20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen ? 'stroke-cream translate-x-[8px] translate-y-[-35%] rotate-45' : 'stroke-indigo rotate-0'}`}
    />
  </svg>
</button>
