<script lang="ts">
  import SectionParagraph from '$components/SectionParagraph.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte';
  import CircleTwo from '$components/Icons/CircleTwo.svelte';
  import CircleThree from '$components/Icons/CircleThree.svelte';
  import CircleFour from '$components/Icons/CircleFour.svelte';

  import { DeveloperStepsText } from '$lib/consts';

  const sectionParagraphClasses = 'body mt-[16px] min-h-[100px]';
  const stepTextClasses = '';
  const stepTitleClasses = 'text-[40px] font-title text-primary';
  const stepClasses = 'flex flex-col';
  const circleWidth = '60';
</script>

<div class="hidden md:block lg:hidden">
  <section class="gap-f32 flex shrink">
    `
    <div>
      <!-- STEP ONE -->
      <div class={stepClasses} id="step-1">
        <CircleOne width={circleWidth} />
        <div class={stepTextClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.one.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {@html DeveloperStepsText.one.text_html}
          </SectionParagraph>
        </div>
      </div>
      <!-- STEP THREE -->
      <div class={stepClasses} id="step-3">
        <CircleThree width={circleWidth} />
        <div class={stepTextClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.three.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {DeveloperStepsText.three.text_html}
          </SectionParagraph>
        </div>
      </div>
    </div>

    <div class="ml-f12 pt-[90px]">
      <!-- STEP TWO -->
      <div class={stepClasses} id="step-2">
        <CircleTwo width={circleWidth} />
        <div class={stepTextClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.two.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {DeveloperStepsText.two.text_html}
          </SectionParagraph>
        </div>
      </div>
      <!-- STEP FOUR -->
      <div class={stepClasses} id="step-4">
        <CircleFour width={circleWidth} />
        <div class={stepTextClasses}>
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
