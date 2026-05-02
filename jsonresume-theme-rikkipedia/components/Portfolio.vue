<template>
  <div v-if="portfolio" id="portfolio" class="portfolio-container">
    <Title value="Samples" />
    <Writing :writing="portfolio.writing"/>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import Writing from "./Writing.vue";

const props = defineProps(['portfolio'])
</script>

<style lang="scss" scoped>
</style>