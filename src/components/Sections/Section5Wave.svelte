<div class={`wave absolute bottom-0 left-0 z-10 h-full w-full`}></div>

<style>
  @keyframes wave {
    0%,
    100% {
      margin-left: 20px;
    }
    50% {
      margin-left: -20px;
    }
  }

  .wave {
    background: url(/src/lib/assets/section5waves.svg) repeat-x bottom;
    width: 30%;
    height: 100%;
    margin-right: 70%;
    /* animation: wave 5s infinite; */
  }
</style>
