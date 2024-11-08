<script lang="ts">
  import HAccordion from '../../../components/HAccordion.svelte';
  import ProviderIcon from '../../../lib/assets/icon-provider.svg';
  import GatewayIcon from '../../../lib/assets/icon-gateway.svg';
  import SsoIcon from '../../../lib/assets/icon-sso.svg';
  import CoreIcon from '../../../lib/assets/icon-core.svg';

  let sections: ('open' | 'closed')[] = ['open', 'open', 'closed', 'closed', 'closed'];

  function handleToggled(event: CustomEvent<{ index: string; state: 'open' | 'closed' }>) {
    const { index, state } = event.detail;
    const newState = state === 'open' ? 'closed' : 'open';
    sections.forEach((_state, objIndex, array) => {
      if (objIndex.toString() !== index) {
        array[objIndex] = newState;
      }
    });
  }
</script>

<div
  id="explore_section"
  class="mt-f96 flex w-full max-w-screen-xl flex-row bg-navy sm:px-f64 sm:py-f80 lg:px-f128 lg:py-f96 vertical-lg:min-h-[550-px] vertical-lg:w-[100%]"
>
  <div
    id="explore_description"
    class="freq-container relative flex flex-row bg-navy pr-f12 text-teal vertical-lg:min-h-[550px]"
  >
    <div class="flex flex-col gap-f32">
      <span class="h1 mt-f8 text-clip text-wrap font-title font-normal">Explore &amp; Build</span>

      <div class="sm text-white sm:max-w-[515px] sm:pb-[100px] lg:pb-[200px]">
        Frequency offers simple blockchain integration for your applications&mdash;bridging the gap between your app and
        the decentralized web. Frequency Gateway offers a suite of tools and services that make it easy to connect your
        applications to the Frequency blockchain. This allows your development team to focus on building outstanding
        user experiences without managing the complexity of blockchain interactions. With Gateway you can pick and
        choose from to build the best applications for your users to:
        <div class="pt-4 font-bold">
          <ul class="list-inside list-disc lg:pl-5">
            <li>Add decentralized authentication and onboarding workflows</li>
            <li>Connect your users with their universal social graph</li>
            <li>Read, write, and interact with social media content</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-row lg:min-w-[716px]">
    <HAccordion
      sectionNumber="1"
      iconSrc={ProviderIcon}
      on:toggled={handleToggled}
      bind:state={sections[1]}
      url="https://docs.frequency.xyz/Guides/BecomeAProvider.html"
    >
      {#snippet sectionLabel()}Quick Start/<br />Become a Provider{/snippet}
      In 5 minutes, you can become a provider, set up the Social App Template Example Application that uses Gateway Services.
      This will give you a quick introduction to a working integration with Gateway Services and a starting place to explore
      the possibilities.
    </HAccordion>

    <HAccordion
      sectionNumber="2"
      iconSrc={GatewayIcon}
      on:toggled={handleToggled}
      bind:state={sections[2]}
      url="https://docs.frequency.xyz/Guides/Gateway.html"
    >
      {#snippet sectionLabel()}Frequency<br />Gateway{/snippet}
      is a collection of easy-to-deploy: microservices that provide simple REST APIs for interacting with Frequency. Configure
      and deploy only the components you need, including.
    </HAccordion>

    <HAccordion
      sectionNumber="3"
      iconSrc={SsoIcon}
      on:toggled={handleToggled}
      bind:state={sections[3]}
      url="https://docs.frequency.xyz/Guides/SSO.html"
    >
      {#snippet sectionLabel()}Add Single<br />Sign-on to<br />your App{/snippet}
      SIWF provides comprehensive documentation and tools to integrate with Frequency Access, an easy-to-use single sign-on
      identity solution for users on Frequency. SIWF simplifies the authentication process, allowing users to access the
      entire Frequency ecosystem effortlessly while maintaining control over their personal data.</HAccordion
    >

    <HAccordion
      sectionNumber="4"
      iconSrc={CoreIcon}
      on:toggled={handleToggled}
      bind:state={sections[4]}
      url="https://docs.frequency.xyz/"
    >
      {#snippet sectionLabel()}Frequency<br />Core{/snippet}
      Here you will find detailed information about the building blocks of Frequency including technical overviews, advanced
      tutorials, API documentation, code samples and more–everything you need to build your first Frequency application.</HAccordion
    >
  </div>
</div>
