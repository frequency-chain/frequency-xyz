<div class={`wave absolute bottom-0 left-0 h-full w-full bg-bottom bg-no-repeat`} />

<style>
  @keyframes slide {
    from {
      margin-right: -300px;
    }
    to {
      margin-right: 0px;
    }
  }

  .wave {
    animation: slide 2s ease-in-out infinite alternate;
    background-image: url(/src/lib/assets/section3waves.svg);
    background-repeat: repeat-x;
  }
</style>
