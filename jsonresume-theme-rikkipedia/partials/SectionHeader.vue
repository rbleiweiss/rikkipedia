<template>
  <div class="section-header">
    <h3 v-if="name" class="bold pull-left">
      <a v-if="role && role.website" :href="role.website" target="_blank">
        {{role.company}} <i class="fa fa-external-link" aria-hidden="true"></i>
      </a>
      <template v-else>
        {{name}}
      </template>
    </h3>
    <h5 v-if="role" class="italic pull-right">
      <span class="date">{{dateRange(role)}}</span>
    </h5>
  </div>

</template>

<script lang="ts" setup>
import moment from 'moment'

const props = defineProps(['role', 'name'])
const dateRange = function(role) {
  if (!role) {
    return ''
  }

  let range = ''
  if (role.date) {
    range += `${moment(role.date).format('MMM YYYY')}`
    return range
  }

  if (role.startDate) {
    range += moment(role.startDate).format('YYYY')
  }

  if (role.endDate) {
    range += role.startDate ? ' - ' : ''
    range += moment(role.endDate).format('YYYY')
  } else if (role.startDate) {
    range += " - Present"
  }

  if (!role.startDate && role.releaseDate) {
    range += moment(role.releaseDate).format('YYYY')
  }

  return range
}

</script>