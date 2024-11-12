<script lang="ts">
  import SectionParagraph from '$components/SectionParagraph.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte';
  import CircleTwo from '$components/Icons/CircleTwo.svelte';
  import CircleThree from '$components/Icons/CircleThree.svelte';
  import CircleFour from '$components/Icons/CircleFour.svelte';

  import { DeveloperStepsText } from '$lib/consts';

  const sectionParagraphClasses="text-normal mt-f12 leading-[20px]";
  const stepTitleClasses="text-[44px] font-bold";
  const circleWidth="60";
  const sectionClasses="flex flex-col px-[36px]";
  const stepClasses="py-[12px]";
</script>
<!-- Developer Steps -->
<div class="sm:block md:hidden lg:hidden">
  <section class="{sectionClasses}">`
    <!-- STEP ONE -->
    <div class="{stepClasses} justify-self-start" id="step-1">
      <CircleOne width={circleWidth}/>
      <div class="">
        <h3 class="{stepTitleClasses}">{DeveloperStepsText.one.title}</h3>
        <SectionParagraph classes={sectionParagraphClasses}>
          {@html DeveloperStepsText.one.text_html}
        </SectionParagraph>
      </div>
    </div>
    <!-- STEP TWO -->
    <div class="{stepClasses} text-right" id="step-2">
      <div>
        <CircleTwo width={circleWidth} classes="justify-self-end"/>
      </div>
      <div class="">
        <h3 class="{stepTitleClasses}">{DeveloperStepsText.two.title}</h3>
        <SectionParagraph classes={sectionParagraphClasses}>
          {DeveloperStepsText.two.text_html}
        </SectionParagraph>
      </div>
    </div>

    <!-- STEP THREE -->
    <div class="{stepClasses}" id="step-3">
      <CircleThree width={circleWidth}/>
      <div class="">
        <h3 class="{stepTitleClasses}">{DeveloperStepsText.three.title}</h3>
        <SectionParagraph classes={sectionParagraphClasses}>
          {DeveloperStepsText.three.text_html}
        </SectionParagraph>
      </div>
    </div>
    <!-- STEP FOUR -->
    <div class="{stepClasses} text-right" id="step-4">
      <CircleFour width={circleWidth} classes="justify-self-end"/>
      <div class="">
        <h3 class="{stepTitleClasses}">{DeveloperStepsText.four.title}</h3>
        <SectionParagraph classes={sectionParagraphClasses}>
          {DeveloperStepsText.four.text_html}
        </SectionParagraph>
      </div>
    </div>
  </section>
</div>
