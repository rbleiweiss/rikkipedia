<template>
  <div v-if="resume" id="controversies" class="controversies-container">
    <Title value="Controversies" />
    <div v-for="controversy of resume.controversies">
      <vue-markdown :source="controversy" class="description" :options="{ html: true }"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import VueMarkdown from 'vue-markdown-render'

const props = defineProps(['resume'])
</script>

<style lang="scss" scoped>
</style>