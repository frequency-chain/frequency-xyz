<script>
  import MissionItem from '$components/Sections/Mission/MissionItem.svelte';
  import App from '$lib/assets/Mission/App.svg';
  import Box from '$lib/assets/Mission/Box.svg';
  import Fingerprint from '$lib/assets/Mission/Fingerprint.svg';
  import Network from '$lib/assets/Mission/Network.svg';
  import Universe from '$lib/assets/Mission/Universe.svg';
  import Users from '$lib/assets/Mission/Users.svg';

  const missionItems = [
    {
      iconAlt: 'Fingerprint',
      icon: Fingerprint,
      body: `Offering everyone a self-sovereign <span class="font-bold text-primary">digital social identity</span> that they may use
      to sign in and share data across the applications they choose.`,
    },
    {
      iconAlt: 'App',
      icon: App,
      body: `Allowing people to <span class="font-bold text-primary">freely move among applications</span> and providers rather than
      being forced to accept application changes that worsen their experience.`,
    },
    {
      iconAlt: 'Network',
      icon: Network,
      body: `Offering application providers practical <span class="font-bold text-primary">economics</span> that make blockchain usage
      feasible and desirable.`,
    },
    {
      iconAlt: 'Users',
      icon: Users,
      body: `Securely storing each <span class="font-bold text-primary">person's relationships</span> (social graph) so they are not
      controlled by any application or company, and can only be accessed with user permission.`,
    },
    {
      iconAlt: 'Box',
      icon: Box,
      body: `Creating an <span class="font-bold text-primary">interoperable</span> social media public commons where everyone can participate
      in the conversation.`,
    },
    {
      iconAlt: 'Universe',
      icon: Universe,
      body: `Creating a shared and <span class="font-bold text-primary">decentralized</span> economy where everyone can participate
      in the shared value they have created on the internet.`,
    },
  ];
</script>

<div class="gap-f64 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each missionItems as item (item.iconAlt)}
    <MissionItem>
      {#snippet icon()}
        <span><img src={item.icon} alt={item.iconAlt} /></span>
      {/snippet}
      {#snippet body()}
        <p>
          {@html item.body}
        </p>
      {/snippet}
    </MissionItem>
  {/each}
</div>
