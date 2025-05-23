<script lang="ts">
  const items = [
    { id: 'first', label: 'Content' },
    { id: 'second', label: 'Followers' },
    { id: 'third', label: 'Network' },
    { id: 'fourth', label: 'Content' },
    { id: 'fifth', label: 'Followers' },
    { id: 'sixth', label: 'Network' },
  ];
</script>

<div class="gap-f12 bg-black md:gap-f24 flex items-center justify-center text-white">
  <h2 class="title-70 text-[48px] md:text-[70px]">Your:</h2>

  <div class="h-[240px] overflow-hidden">
    <div class="text-slider-container flex flex-col gap-0">
      {#each items as item, index (index)}
        <span id={item.id} class="flex h-[80px] origin-[center_left] items-center text-[48px] font-thin md:text-[70px]">
          {item.label}
        </span>
      {/each}
    </div>
  </div>
</div>

<style>
  .text-slider-container {
    animation: text-slide 10s linear infinite;
  }

  /*Text Slider Items bold and scale animations*/
  #first {
    scale: 0.75;
    opacity: 0.33;
  }
  #second {
    animation: second 10s linear infinite -0.2s;
  }
  #third {
    animation: third 10s linear infinite;
  }
  #fourth {
    animation: fourth 10s linear infinite;
  }
  #fifth {
    animation: fifth 10s linear infinite;
  }
  #sixth {
    scale: 0.75;
    opacity: 0.33;
  }

  /*Followers bold and scale animation*/
  @keyframes second {
    0%,
    20% {
      transform: scale(1);
      opacity: 1;
    }
    33.33%,
    100% {
      transform: scale(0.75);
      opacity: 0.33;
    }
  }

  /*Network bold and scale animation*/
  @keyframes third {
    0%,
    20% {
      transform: scale(0.75);
      opacity: 0.33;
    }
    33.33%,
    53.33% {
      transform: scale(1);
      opacity: 1;
    }
    66.66%,
    100% {
      transform: scale(0.75);
      opacity: 0.33;
    }
  }

  /*Content bold and scale animation*/
  @keyframes fourth {
    0%,
    53.33% {
      transform: scale(0.75);
      opacity: 0.33;
    }
    66.66%,
    86.66% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.75);
      opacity: 0.33;
    }
  }

  /*Followers 2 bold and scale animation*/
  @keyframes fifth {
    0%,
    86.66% {
      transform: scale(0.75);
      opacity: 0.33;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Animation to slide all text */
  @keyframes text-slide {
    0%,
    20% {
      transform: translateY(0);
    }
    33.33%,
    53.33% {
      transform: translateY(-80px);
    }
    66.66%,
    86.66% {
      transform: translateY(-160px);
    }
    100% {
      transform: translateY(-240px);
    }
  }
</style>
