<template>
  <div class="row header-row">
    <h1 class="title">{{resume.basics.name}}</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps(['resume'])

onMounted(() => {})

</script>
