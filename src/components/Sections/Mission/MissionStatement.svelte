<div class="flex items-center justify-center gap-f12 bg-navy text-white md:gap-f24">
  <h2 class="title-70 text-[48px] md:text-[70px]">Your:</h2>

  <div class="h-[240px] overflow-hidden">
    <div class="text-slider-container">
      <span class="slider-item" id="first">Content</span>
      <span class="slider-item" id="second">Followers</span>
      <span class="slider-item" id="third">Network</span>
      <span class="slider-item" id="fourth">Content</span>
      <span class="slider-item" id="fifth">Followers</span>
      <span class="slider-item" id="sixth">Network</span>
    </div>
  </div>
</div>

<style lang="postcss">
  .text-slider-container {
    @apply flex flex-col gap-0;
    animation: text-slide 10s linear infinite;
  }

  .slider-item {
    @apply flex h-[80px] origin-[center_left] items-center text-[48px] font-thin md:text-[70px];
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
