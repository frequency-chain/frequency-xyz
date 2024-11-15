<script lang="ts">
  import SectionParagraph from '$components/SectionParagraph.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte';
  import CircleTwo from '$components/Icons/CircleTwo.svelte';
  import CircleThree from '$components/Icons/CircleThree.svelte';
  import CircleFour from '$components/Icons/CircleFour.svelte';

  import { DeveloperStepsText } from '$lib/consts';

  const sectionParagraphClasses = 'text-sm mt-f8';
  const sectionClasses = 'ml-[30px]';
  const stepTitleClasses = 'text-h3 font-bold text-navy';
</script>

<div class="hidden lg:block">
  <section class="flex shrink flex-wrap justify-end">
    <!-- STEP ONE -->
    <div class="flex basis-[500px] pl-0 align-super" id="step-1">
      <CircleOne />
      <div class={sectionClasses}>
        <h3 class={stepTitleClasses}>{DeveloperStepsText.one.title}</h3>
        <SectionParagraph class={sectionParagraphClasses}>
          {@html DeveloperStepsText.one.text_html}
        </SectionParagraph>
      </div>
    </div>
    <!-- STEP TWO -->
    <div class="flex h-1/2 basis-[500px] pt-f32 align-sub" id="step-2">
      <CircleTwo />
      <div class={sectionClasses}>
        <h3 class={stepTitleClasses}>{DeveloperStepsText.two.title}</h3>
        <SectionParagraph class={sectionParagraphClasses}>
          {DeveloperStepsText.two.text_html}
        </SectionParagraph>
      </div>
    </div>

    <!-- STEP THREE -->
    <div class="pl flex basis-1/2 pl-f128 align-super" id="step-3">
      <CircleThree />
      <div class={sectionClasses}>
        <h3 class={stepTitleClasses}>{DeveloperStepsText.three.title}</h3>
        <SectionParagraph class={sectionParagraphClasses}>
          {DeveloperStepsText.three.text_html}
        </SectionParagraph>
      </div>
    </div>
    <!-- STEP FOUR -->
    <div class="pl-f74 flex basis-1/2 pl-0 pt-f48 align-sub" id="step-4">
      <CircleFour />
      <div class={sectionClasses}>
        <h3 class={stepTitleClasses}>{DeveloperStepsText.four.title}</h3>
        <SectionParagraph class={sectionParagraphClasses}>
          {DeveloperStepsText.four.text_html}
        </SectionParagraph>
      </div>
    </div>
  </section>
</div>
<!-- Developer Steps -->
