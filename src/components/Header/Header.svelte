<script>
  import HeaderNav from '../Header/HeaderNav.svelte';
  import Logo from '../../lib/assets/Logo.svg';
  import HeaderNavMobile from '../Header/HeaderNavMobile.svelte';
  import OpenCloseIcon from '../OpenCloseIcon.svelte';

  let isNavOpen = false;
</script>

<div class="freq-container fixed top-0 z-50 flex max-w-page items-center justify-between bg-cream pt-[12px]">
  <img src={Logo} alt="Logo" class="mr-3 sm:w-[140px] md:w-[180px] lg:w-[210px]" />

  <!-- For Desktop -->
  <HeaderNav />

  <!-- For Mobile -->
  <OpenCloseIcon onClick={() => (isNavOpen = !isNavOpen)} isOpen={isNavOpen} classes={'md:hidden lg:hidden'} />
  <HeaderNavMobile isOpen={isNavOpen} />
</div>
