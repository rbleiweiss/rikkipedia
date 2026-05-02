<template>
  <div v-if="portfolio" id="portfolio" class="portfolio-container">
    <Title value="Samples" />
    <div v-for="category of portfolio" :id="category.category.toLowerCase()" class="category">
      <h3 class="bold">{{category.category}}</h3>
      <div v-for="item of category.items" class="item">
        <a :href="externalUrl(item)" target="_blank">{{item.title}} <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
        <vue-markdown v-if="item.description" :source="item.description" class="description" :options="{ html: true }"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import VueMarkdown from 'vue-markdown-render'

const props = defineProps(['portfolio'])

const externalUrl = function(item){
  if (item.file){
    return `/static/${encodeURIComponent(item.file)}`
  } else if (item.url) {
    return item.url
  }
}


</script>

<style lang="scss" scoped>
</style>