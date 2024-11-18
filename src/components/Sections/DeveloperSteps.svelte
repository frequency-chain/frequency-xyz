<script lang="ts">
  import SectionParagraph from '$components/SectionParagraph.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte';
  import CircleTwo from '$components/Icons/CircleTwo.svelte';
  import CircleThree from '$components/Icons/CircleThree.svelte';
  import CircleFour from '$components/Icons/CircleFour.svelte';

  import { DeveloperStepsText } from '$lib/consts';

  const sectionParagraphClasses = 'body mt-f8';
  const sectionClasses = 'mt-[48px] ml-[30px] mr-[30px]';
  const stepTitleClasses = 'title-h3 text-primary leading-0';
</script>

<div class="hidden lg:block">
  <section class="mx-auto flex max-w-screen-lg flex-col">
    <div class="flex w-full pl-[14%]">
      <!-- STEP ONE -->
      <div class="flex" id="step-1">
        <CircleOne />
        <div class={sectionClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.one.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {@html DeveloperStepsText.one.text_html}
          </SectionParagraph>
        </div>
      </div>
      <!-- STEP TWO -->
      <div class="flex pt-[60px]" id="step-2">
        <CircleTwo />
        <div class={sectionClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.two.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {DeveloperStepsText.two.text_html}
          </SectionParagraph>
        </div>
      </div>
    </div>

    <div class="-mt-[30px] flex w-full pr-[14%]">
      <!-- STEP THREE -->
      <div class="flex" id="step-3">
        <CircleThree />
        <div class={sectionClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.three.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {DeveloperStepsText.three.text_html}
          </SectionParagraph>
        </div>
      </div>
      <!-- STEP FOUR -->
      <div class="flex pt-[60px]" id="step-4">
        <CircleFour />
        <div class={sectionClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.four.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {DeveloperStepsText.four.text_html}
          </SectionParagraph>
        </div>
      </div>
    </div>
  </section>
</div>
<!-- Developer Steps -->
