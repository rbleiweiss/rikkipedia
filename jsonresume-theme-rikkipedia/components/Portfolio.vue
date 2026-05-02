<template>
  <Title value="Portfolio" />
  <Writing :writing="portfolio.writing"/>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import Writing from "./Writing.vue";

const props = defineProps(['portfolio'])
</script>

<style lang="scss" scoped>
</style>