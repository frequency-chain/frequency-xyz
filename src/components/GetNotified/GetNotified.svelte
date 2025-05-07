<script lang="ts">
  import { dev } from '$app/environment';
  import ContactThankYou from '$components/GetNotified/ContactThankYou.svelte';
  import { Input, Textarea } from '@frequency-chain/style-guide';

  const fieldMapping = {
    name: 'entry.464666765',
    email: 'entry.626493750',
    developerInterest: 'entry.334295884',
    partnerInterest: 'entry.266517677',
    comment: 'entry.1047518165',
  };

  const postUrl = 'https://7otsoqfsv4cgqxe6xvc2vyjo6e0sozeg.lambda-url.sa-east-1.on.aws';

  let name = $state('');
  let email = $state('');
  let isDeveloper = $state(false);
  let isPartnership = $state(false);
  let comment = $state('');

  const errorText = 'Please fill out this field.';

  let formSuccess = $state(false);
  let hasSubmittedFormAtLeastOnce = $state(false);

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
      onsubmit={submit}
      novalidate
      class="mt-f24 gap-f24 mx-auto justify-center"
      data-testid="contact-form"
      id="contact-form"
    >
      <Input
        disabled={false}
        label="Name"
        placeholder="Name"
        isRequired={true}
        bind:value={name}
        class="required mb-f4 text-black"
        error={hasSubmittedFormAtLeastOnce && !name?.length ? errorText : undefined}
      />
      <Input
        disabled={false}
        label="Email"
        placeholder="Email"
        isRequired={true}
        bind:value={email}
        class="required mb-f4 text-black"
        error={hasSubmittedFormAtLeastOnce && !email?.length ? errorText : undefined}
      />
      <div class="mb-f4 mt-f8 gap-f12 sm:gap-f32 flex flex-col sm:flex-row">
        <label class="inline-flex items-center hover:cursor-pointer">
          <input type="checkbox" bind:checked={isDeveloper} class="accent-tealBright text-white hover:cursor-pointer" />
          <span class="text-normal ml-2">Development</span>
        </label>
        <label class="leading inline-flex items-center hover:cursor-pointer">
          <input
            type="checkbox"
            bind:checked={isPartnership}
            class="form-checkbox accent-tealBright text-white hover:cursor-pointer"
          />
          <span class="text-normal ml-2">Partnerships</span>
        </label>
      </div>
      <div class="w-full">
        <Textarea
          label="Comment"
          placeholder="Write us a message"
          class="required mb-f4 text-black"
          bind:value={comment}
          isRequired={true}
          rows={5}
          error={hasSubmittedFormAtLeastOnce && !comment?.length ? errorText : undefined}
        />
      </div>
      <!-- Can't use Style Guide Button b/c onClick won't take async funcs, and also
      it overloads type for styling -->
      <button
        type="submit"
        class="button button-secondary mt-f24 p-f8 hover:border-teal hover:text-teal w-full rounded-full border-[1px] border-white bg-transparent text-center transition-all"
      >
        Send Message
      </button>
    </form>
  {:else}
    <ContactThankYou onClick={resetForm} />
  {/if}
</div>
