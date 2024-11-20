<div class="bg-navy py-f24 text-white">
  <div class="flex items-center justify-center gap-f12 md:gap-f24">
    <h2 class="title-70 text-[30px] sm:text-[46px] md:text-[70px]">Your:</h2>

    <div class="text-slide-container overflow-hidden h-[300px]">
      <div class="text-slide">
        <span class="emphasized-text">Content</span>
        <span class="emphasized-text">Followers</span>
        <span class="emphasized-text">Network</span>
        <span class="emphasized-text">Content</span>
        <span class="emphasized-text">Followers</span>
        <span class="emphasized-text">Network</span>
      </div>
    </div>
  </div>
</div>

<style>
  .thin-text {
    @apply text-[20px] font-thin opacity-40 sm:text-[30px] md:text-[50px] h-[100px];
  }

  .emphasized-text {
    @apply text-[30px] font-thin sm:text-[48px] md:text-[70px] h-[100px];
  }

  .text-slide-container {
    position: relative;
    overflow: hidden;
  }

  .text-slide {
    @apply flex flex-col gap-0;
    animation: text-slide 4s linear infinite;
  }

  .text-slide span:nth-child(1) {
    animation: unbold 2s linear;
  }

  /*.text-slide span:nth-child(2) {*/
  /*  animation: middle-bold 8s linear infinite 2s; !* Adjust timing for each *!*/
  /*}*/

  /*.text-slide span:nth-child(3) {*/
  /*  animation: middle-bold 8s linear infinite 4s;*/
  /*}*/

  /* Animation to emphasize the middle word */
  @keyframes unbold {
    0% {
      transform: scale(0.75);
      opacity: 0.75;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Animation to emphasize the middle word */
  @keyframes bold-unbold {
    0% {
      transform: scale(0.75);
      opacity: 0.75;
    }
    33.33%, 66.66% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.75);
      opacity: 0.75;
    }
  }

  /* Animation to slide text */
  @keyframes text-slide {
    0%, 20% {
      transform: translateY(0);
    }
    33.33%, 53.33% {
      transform: translateY(-100px);
    }
    66.66%, 86.66% {
      transform: translateY(-200px);
    }
    100% {
      transform: translateY(-300px);
    }
  }
</style>
