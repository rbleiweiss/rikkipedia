<template>
  <div id="contents">
    Contents
    <div class="keyline"/>
    <a href="#" class="top">
      (Top)
    </a>
    <a
        v-if="resume.work && resume.work.length > 0"
        href="#work">
      Career History
    </a>
    <a
        v-if="resume.portfolio"
        href="#portfolio">
      Samples
    </a>
    <a
        v-if="resume.volunteer && resume.volunteer.length > 0"
        href="#volunteer">
      Volunteer
    </a>
    <a
        v-if="resume.education && resume.education.length > 0"
        href="#education">
      Education
    </a>
    <a
        v-if="resume.certificates && resume.certificates.length > 0"
        href="#certificates">
      Certificates
    </a>
    <a
        v-if="resume.awards && resume.awards.length > 0"
        href="#awards">
      Awards
    </a>
    <a
        v-if="resume.publications && resume.publications.length > 0"
        href="#publications">
      Publications
    </a>
    <a
        v-if="resume.references && resume.references.length > 0"
        href="#references">
      References
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['resume'])
</script>

<style lang="scss" scoped>
</style>