<script lang="ts">
  import { Input, Textarea } from '@frequency-chain/style-guide';
  import { dev } from '$app/environment';
  import ContactThankYou from '$components/GetNotified/ContactThankYou.svelte';

  const fieldMapping = {
    name: 'entry.464666765',
    email: 'entry.626493750',
    developerInterest: 'entry.334295884',
    partnerInterest: 'entry.266517677',
    comment: 'entry.1047518165',
  };

  const postUrl = 'https://7otsoqfsv4cgqxe6xvc2vyjo6e0sozeg.lambda-url.sa-east-1.on.aws';

  let name = '';
  let email = '';
  let isDeveloper = false;
  let isPartnership = false;
  let comment = '';

  const errorText = 'Please fill out this field.';

  let formSuccess = false;
  let hasSubmittedFormAtLeastOnce = false;

  // form.checkValidity doesn't work b/c StyleGuide doesn't propagate
  // 'required' into its form inputs.
  const checkValidity = (form: HTMLElement): boolean => {
    for (const element of form.getElementsByClassName('required')) {
      const input = element as HTMLInputElement;
      if (!input.value) return false;
    }
    return true;
  };

  const submit = async (e: SubmitEvent) => {
    const form = e.target as HTMLFormElement;

    //Only start showing invalids if the form is invalid at least once
    hasSubmittedFormAtLeastOnce = true;

    if (!checkValidity(form)) return;

    const formData = new URLSearchParams();
    formData.append(fieldMapping.name, name);
    formData.append(fieldMapping.email, email);
    formData.append(fieldMapping.comment, comment);
    if (isDeveloper) formData.append(fieldMapping.developerInterest, 'Developer');
    if (isPartnership) formData.append(fieldMapping.partnerInterest, 'Partner');

    try {
      let response: Partial<Response>;
      if (dev) {
        response = {
          ok: true,
        };
      } else {
        response = await fetch(postUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString(),
        });
      }
      if (response?.ok) {
        formSuccess = true;
      } else {
        throw new Error('Unknown form submission error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed due to network error.');
    }
  };

  const resetForm = async (_e: Event) => {
    formSuccess = false;
    hasSubmittedFormAtLeastOnce = false;
    name = '';
    email = '';
    isDeveloper = false;
    isPartnership = false;
    comment = '';
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (form) form.reset();
  };
</script>

<div class="mx-auto w-full p-[36px] sm:max-w-[396px] md:p-0 md:py-[96px]">
  {#if !formSuccess}
    <h3 class="title-h3">Contact</h3>
    <form
      on:submit|preventDefault={submit}
      novalidate
      class="mx-auto mt-f24 justify-center gap-f24"
      data-testid="contact-form"
      id="contact-form"
    >
      <Input
        disabled={false}
        label="Name"
        name="name"
        placeholder="Name"
        type="text"
        isRequired={true}
        bind:value={name}
        class="required mb-f4 text-black"
        error={hasSubmittedFormAtLeastOnce && !name?.length ? errorText : undefined}
      />
      <Input
        disabled={false}
        label="Email"
        name="email"
        placeholder="Email"
        type="text"
        isRequired={true}
        bind:value={email}
        class="required mb-f4 text-black"
        error={hasSubmittedFormAtLeastOnce && !email?.length ? errorText : undefined}
      />
      <div class="mb-f4 mt-f8 flex flex-col gap-f12 sm:flex-row sm:gap-f32">
        <label class="inline-flex items-center hover:cursor-pointer">
          <input type="checkbox" bind:checked={isDeveloper} class="text-white accent-tealBright hover:cursor-pointer" />
          <span class="ml-2 text-normal">Development</span>
        </label>
        <label class="leading inline-flex items-center hover:cursor-pointer">
          <input
            type="checkbox"
            bind:checked={isPartnership}
            class="form-checkbox text-white accent-tealBright hover:cursor-pointer"
          />
          <span class="ml-2 text-normal">Partnerships</span>
        </label>
      </div>
      <div class="w-full">
        <Textarea
          label="Comment"
          placeholder="Write us a message"
          bind:value={comment}
          class="required h-[160px] text-black"
          isRequired={true}
          error={hasSubmittedFormAtLeastOnce && !comment?.length ? errorText : undefined}
        />
      </div>
      <!-- Can't use Style Guide Button b/c onClick won't take async funcs, and also
      it overloads type for styling -->
      <button
        type="submit"
        class="button button-secondary mt-f24 w-full rounded-full border-[1px] border-white bg-transparent p-f8 text-center transition-all hover:border-teal hover:text-teal"
      >
        Send Message
      </button>
    </form>
  {:else}
    <ContactThankYou onClick={resetForm} />
  {/if}
</div>
