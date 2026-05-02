<template>
  <div id="writing" v-if="writing && writing.length > 0">
    <h3 class="bold">Writing</h3>
    <div v-for="item of writing" class="item">
      <a :href="externalUrl(item)" target="_blank">{{item.title}} <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
      <vue-markdown v-if="item.description" :source="item.description" class="description" :options="{ html: true }"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VueMarkdown from 'vue-markdown-render'

const props = defineProps(['writing'])

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