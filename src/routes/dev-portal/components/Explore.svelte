<script lang="ts">
  import HAccordion from '../../../components/HAccordion.svelte';
  import ProviderIcon from '$lib/assets/Explore/icon-provider.svg';
  import GatewayIcon from '$lib/assets/Explore/icon-gateway.svg';
  import SsoIcon from '$lib/assets/Explore/icon-sso.svg';
  import CoreIcon from '$lib/assets/Explore/icon-core.svg';
  import SlideIn from '$components/SlideIn.svelte';

  let sectionOpenStates: boolean[] = $state([
    true /* dummy so we don't need to adjust 1-based index */,
    true,
    false,
    false,
    false,
  ]);

  function handleToggled(event: CustomEvent<{ index: string; isOpen: boolean }>) {
    const { index, isOpen: state } = event.detail;
    const newState = !state;
    sectionOpenStates.forEach((_state, objIndex, array) => {
      if (objIndex.toString() !== index) {
        array[objIndex] = newState;
      }
    });
  }
</script>

<div
  id="explore_section"
  class="freq-container gap-f12 pb-f96 pt-f64 lg:py-f96 flex w-full flex-col lg:flex-row lg:gap-0"
>
  <div id="explore_description" class="text-primary md:px-f32 lg:pt-f96 relative flex w-full flex-row lg:w-1/2">
    <div class="gap-f32 flex flex-col">
      <SlideIn>
        <h2 class="title-70 mt-f8 text-wrap text-clip text-white">Explore &amp; Build</h2>
      </SlideIn>
      <div class="body pb-f64 xs:pb-f32 md:pb-f80 text-white">
        Frequency offers simple blockchain integration for your applications&mdash;bridging the gap between your app and
        the decentralized web. Frequency Developer Gateway offers a suite of self-hosted tools and services that make it
        easy to connect your applications to Frequency. This allows your developer team to focus on building outstanding
        user experiences without managing the complexity of blockchain interactions. With Frequency Developer Gateway,
        you can pick and choose among the tools and services to build the best applications for your users to:
        <div class="pt-4 font-bold">
          <ul class="list-inside list-disc lg:pl-5">
            <li>Add authentication and onboarding workflows</li>
            <li>Connect with their universal social graph</li>
            <li>Read, write, and interact with social media content</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- min width selected based on description section + 1 open accordion + 3 closed accordions -->
  <div class="sm:px-f32 sm:py-f16 w-full">
    <div class="gap-x-f4 gap-y-f48 grid grid-cols-1 overflow-y-hidden md:grid-cols-2 lg:flex lg:h-[850px] xl:h-[700px]">
      <HAccordion
        sectionNumber="1"
        iconSrc={ProviderIcon}
        on:toggled={handleToggled}
        bind:isOpen={sectionOpenStates[1]}
        url="https://docs.frequency.xyz/Guides/BecomeAProvider.html"
      >
        {#snippet sectionLabel()}Quick Start/<br />Become a Provider{/snippet}
        In 5 minutes, you can become a provider and set up the Social App Template Example Application that uses Frequency
        Developer Gateway Services. This will give you a quick introduction to a working integration with Frequency Developer
        Gateway Services and a starting place to explore the possibilities.
      </HAccordion>

      <HAccordion
        sectionNumber="2"
        iconSrc={GatewayIcon}
        on:toggled={handleToggled}
        bind:isOpen={sectionOpenStates[2]}
        url="https://docs.frequency.xyz/Guides/Gateway.html"
      >
        {#snippet sectionLabel()}Frequency<br class="hidden lg:block" /> Developer<br class="hidden lg:block" /> Gateway{/snippet}
        Select among this collection of easy-to-deploy microservices that provide simple REST APIs for interacting with Frequency.
        Configure and deploy only the components you need.
      </HAccordion>

      <HAccordion
        sectionNumber="3"
        iconSrc={SsoIcon}
        on:toggled={handleToggled}
        bind:isOpen={sectionOpenStates[3]}
        url="https://docs.frequency.xyz/Guides/SSO.html"
      >
        {#snippet sectionLabel()}Add Single<br class="hidden lg:block" /> Sign-on to<br class="hidden lg:block" /> your App{/snippet}
        Sign On With Frequency (SIWF) provides comprehensive documentation and tools to integrate with Frequency Access,
        an easy-to-use single sign-on identity solution for users on Frequency. SIWF simplifies the authentication process,
        allowing users to access the entire Frequency ecosystem effortlessly while maintaining control over their personal
        data.
      </HAccordion>

      <HAccordion
        sectionNumber="4"
        iconSrc={CoreIcon}
        on:toggled={handleToggled}
        bind:isOpen={sectionOpenStates[4]}
        url="https://docs.frequency.xyz/"
      >
        {#snippet sectionLabel()}Frequency<br class="hidden lg:block" /> Whitepaper{/snippet}
        Here you will find detailed information about the building blocks of Frequency including technical overviews, advanced
        tutorials, API documentation, code samples and more–everything you need to build your first application to leverage
        the power of Frequency.
      </HAccordion>
    </div>
  </div>
</div>
