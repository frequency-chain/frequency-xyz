<script lang="ts">
import SectionParagraph from '$components/SectionParagraph.svelte';
import CircleOne from '$components/Icons/CircleOne.svelte';
import CircleTwo from '$components/Icons/CircleTwo.svelte';
import CircleThree from '$components/Icons/CircleThree.svelte';
import CircleFour from '$components/Icons/CircleFour.svelte';

const sectionParagraphClasses="text-sm mt-f8";
</script>
<div class="sm:hidden lg:block">
  <section class="flex flex-wrap justify-end shrink">`
    <!-- STEP ONE -->
    <div class="flex pl-0 align-super basis-[400px]" id="step-1">
      <CircleOne />
      <div class="">
        <h3 class="font-bold">Easy</h3>
        <SectionParagraph classes={sectionParagraphClasses}>Set up a templated example application with Frequency Gateway
          in mere minutes.
        </SectionParagraph>
      </div>
    </div>
    <!-- STEP TWO -->
    <div class="flex pt-f32 align-sub h-1/2 basis-f400" id="step-2">
      <CircleTwo />
      <div class="">
        <h3 class="font-bold">Open</h3>
        <SectionParagraph classes={sectionParagraphClasses}>Build your app with open-source, decentralized tools that free
          you from relying on big tech.
        </SectionParagraph>
      </div>
    </div>

    <!-- STEP THREE -->
    <div class="flex pl align-super basis-1/2 pl-f128 " id="step-3">
      <CircleThree />
      <div class="">
        <h3 class="font-bold">Economical</h3>
        <SectionParagraph classes={sectionParagraphClasses}>Add decentralized social to both new and existing applications
          in a scalable and economical way with batching and Capacity which make blockchain usage predictable and
          affordable.
        </SectionParagraph>
      </div>
    </div>
    <!-- STEP FOUR -->
    <div class="flex pl-0 basis-1/2  pl-f74 pt-f48 align-sub" id="step-4">
      <CircleFour />
      <div class="">
        <h3 class="font-bold">Proven</h3>
        <SectionParagraph classes={sectionParagraphClasses}>Add decentralized social to both new and existing applications
          in a scalable and economical way with batching and Capacity which make blockchain usage predictable and
          affordable.
        </SectionParagraph>
      </div>
    </div>
  </section>

</div>
<!-- Developer Steps -->
