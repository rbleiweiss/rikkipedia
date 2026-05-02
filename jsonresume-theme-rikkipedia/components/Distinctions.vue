<template>
  <div id="distinctions" v-if="resume.distinctions && resume.distinctions.length > 0" class="distinctions-container">
    <Title value="Distinctions"/>

    <section v-for="category of resume.distinctions" class="item">
      <h3 class="bold category">{{category.category}} Awards</h3>
      <vue-markdown v-for="award of category.awards" :source="award" class="award" :options="{ html: true }"/>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import VueMarkdown from 'vue-markdown-render'

const props = defineProps(['resume'])
</script>