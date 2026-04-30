<template>
<div
    v-if="basics.summary"
    class="summary-container"
>
  <vue-markdown class="summary" :source="basics.summary"/>
</div>
</template>

<script lang="ts" setup>
import VueMarkdown from 'vue-markdown-render'

const props = defineProps(['basics'])
</script>