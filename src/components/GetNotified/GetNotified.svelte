<script lang="ts">
  import DiscordLogoWhite from '../../lib/assets/DiscordLogo-White.svg';

  const fieldMapping = {
    firstName: 'entry.447550433',
    lastName: 'entry.239030615',
    email: 'entry.626493750',
    developerInterest: 'entry.334295884',
  };

  const postUrl = 'https://7otsoqfsv4cgqxe6xvc2vyjo6e0sozeg.lambda-url.sa-east-1.on.aws';

  let firstName = '';
  let lastName = '';
  let email = '';
  let isDeveloper = false;

  let formSuccess = false;
  let hasSubmittedFormAtLeastOnce = false;
  let validInputClasses =
    'border-gray focus:border-tealBright focus:ring-tealBright focus:ring-1 focus:outline-none block w-full rounded-md border px-2 py-3';
  // Make sure to include these in the tailwind.config.js safelist
  let invalidInputClasses = 'invalid:border-red  ' + validInputClasses;

  async function submit(e: SubmitEvent) {
    const form = e.target as HTMLFormElement;

    //Only start showing invalids if the form is invalid at least once
    hasSubmittedFormAtLeastOnce = true;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new URLSearchParams();
    formData.append(fieldMapping.firstName, firstName);
    formData.append(fieldMapping.lastName, lastName);
    formData.append(fieldMapping.email, email);
    if (isDeveloper) formData.append(fieldMapping.developerInterest, 'Developer');

    try {
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        formSuccess = true;
      } else {
        throw new Error('Unknown form submission error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed due to network error.');
    }
  }

  $: inputClasses = hasSubmittedFormAtLeastOnce ? invalidInputClasses : validInputClasses;
</script>

<div class="px-8 py-4">
  {#if !formSuccess}
    <form on:submit|preventDefault={submit} novalidate>
      <div class="mb-4">
        <label class="mb-2 block text-xs font-semibold" for="firstName"
          >First Name <span class="text-red">*</span></label
        >
        <input required type="text" id="firstName" bind:value={firstName} class={inputClasses} placeholder="John" />
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-xs font-semibold" for="lastName">Last Name <span class="text-red">*</span></label>
        <input required type="text" id="lastName" bind:value={lastName} class={inputClasses} placeholder="Doe" />
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-xs font-semibold" for="email">Email <span class="text-red">*</span></label>
        <input
          required
          type="email"
          id="email"
          bind:value={email}
          class={inputClasses}
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-4">
        <label class="inline-flex items-center hover:cursor-pointer">
          <input
            type="checkbox"
            bind:checked={isDeveloper}
            class="form-checkbox text-white accent-tealBright hover:cursor-pointer"
          />
          <span class="ml-2 text-xs font-semibold"
            >Are you a developer interested in building something on Frequency?</span
          >
        </label>
      </div>
      <div class="m-5">
        <button
          type="submit"
          class="radius w-full rounded-full bg-teal py-4 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:shadow-none"
        >
          Get Notified
        </button>
      </div>
    </form>
  {:else}
    <div class="px-8 py-12">
      <h2 class="title-75 text-center">Thank You!</h2>
    </div>
  {/if}

  <a class="m-2 flex p-4" href="https://discord.com/invite/JchmHX5afV">
    <div class="h-[70px] w-[70px] flex-shrink-0 rounded-lg bg-black p-2 hover:bg-teal">
      <img class="w-[70px]" src={DiscordLogoWhite} alt="" />
    </div>
    <div class="px-4">
      <h3 class="mb-1 font-semibold leading-none">Join our Discord</h3>
      <p class="text-sm">Become a part of shaping the future of the digital landscape with Frequency.</p>
    </div>
  </a>
</div>

<style>
  .top-gradient {
    background: radial-gradient(circle at calc(100% - 60px) 0px, #365e73 0%, transparent 30%);
  }
  .top-lines {
    background: linear-gradient(90deg, rgba(54, 94, 115, 40%) 1px, transparent 1px),
      linear-gradient(180deg, rgba(54, 94, 115, 40%) 1px, transparent 1px);
    background-size: 60px 60px;
    background-position: 15px 10px;
  }
  .top-lines-fade {
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, #19455e 90%);
  }
</style>
