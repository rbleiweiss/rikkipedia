<template>
  <div id="contents">
    <div class="title">
      Contents
    </div>
    <ul>
    <li>
      <a href="#" class="top">
        (Top)
      </a>
    </li>
    <li v-if="resume.work && resume.work.length > 0">
      <a href="#work">
        Career History
      </a>
    </li>
    <li v-if="resume.portfolio">
      <a href="#portfolio">
        Samples
      </a>
    </li>
      <ul>
        <li v-if="resume.portfolio.writing">
          <a href="#writing">
            Writing
          </a>
        </li>
      </ul>
    <li v-if="resume.volunteer && resume.volunteer.length > 0">
      <a href="#volunteer">
        Volunteer
      </a>
    </li>
    <li v-if="resume.education && resume.education.length > 0">
      <a href="#education">
        Education
      </a>
    </li>
    <li v-if="resume.certificates && resume.certificates.length > 0">
      <a href="#certificates">
        Certificates
      </a>
    </li>
    <li v-if="resume.awards && resume.awards.length > 0">
      <a href="#awards">
        Awards
      </a>
    </li>
    <li v-if="resume.publications && resume.publications.length > 0">
      <a href="#publications">
        Publications
      </a>
    </li>
    <li v-if="resume.references && resume.references.length > 0">
      <a href="#references">
        References
      </a>
    </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['resume'])
</script>

<style lang="scss" scoped>
</style>