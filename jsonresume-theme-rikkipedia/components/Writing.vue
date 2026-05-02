<template>
  <div id="writing" v-if="writing && writing.length > 0">
    <div v-for="item of writing">
      <a :href="`/static/${encodeURIComponent(item.file)}`" target="_blank">{{item.title}}</a>
      <vue-markdown v-if="item.description" :source="item.description" class="description" :options="{ html: true }"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VueMarkdown from 'vue-markdown-render'

const props = defineProps(['writing'])
</script>

<style lang="scss" scoped>
</style>