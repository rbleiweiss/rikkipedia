<template>
  <div class="row header-row">
    <h1>{{resume.basics.name}}</h1>
    <div class="keyline"/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps(['resume'])

onMounted(() => {})

</script>
