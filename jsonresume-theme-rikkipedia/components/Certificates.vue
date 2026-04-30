<template>
  <div v-if="resume.certificates && resume.certificates.length > 0" class="certificates-container">
    <Title value="Certificates"/>

    <section v-for="certificate of resume.certificates" class="item">
      <SectionHeader :name="certificate.name" :role="certificate"/>

      <h5 v-if="certificate.issuer" class="issuer">{{certificate.issuer}}</h5>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import SectionHeader from "../partials/SectionHeader.vue";

const props = defineProps(['resume'])
</script>

<style lang="scss" scoped>
</style>