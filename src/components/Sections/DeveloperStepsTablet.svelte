<script lang="ts">
  import SectionParagraph from '$components/SectionParagraph.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte';
  import CircleTwo from '$components/Icons/CircleTwo.svelte';
  import CircleThree from '$components/Icons/CircleThree.svelte';
  import CircleFour from '$components/Icons/CircleFour.svelte';

  import { DeveloperStepsText } from '$lib/consts';

  const sectionParagraphClasses = 'text-[12px] mt-[16px]';
  const stepTextClasses = '';
  const stepTitleClasses = 'text-[40px] font-bold text-primary';
  const stepClasses = 'flex flex-col';
  const circleWidth = '60';
</script>

<div class="hidden px-[64px] md:block lg:hidden">
  <section class="flex shrink">
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
      <div class={stepClasses} id="step-3 mt-[36px]">
        <CircleThree width={circleWidth} />
        <div class={stepTextClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.three.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {DeveloperStepsText.three.text_html}
          </SectionParagraph>
        </div>
      </div>
    </div>

    <div class="ml-f12">
      <!-- STEP TWO -->
      <div class="{stepClasses} pt-[98px]" id="step-2">
        <CircleTwo width={circleWidth} />
        <div class={stepTextClasses}>
          <h3 class={stepTitleClasses}>{DeveloperStepsText.two.title}</h3>
          <SectionParagraph class={sectionParagraphClasses}>
            {DeveloperStepsText.two.text_html}
          </SectionParagraph>
        </div>
      </div>
      <!-- STEP FOUR -->
      <div class="{stepClasses} mt-[94px]" id="step-4">
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
