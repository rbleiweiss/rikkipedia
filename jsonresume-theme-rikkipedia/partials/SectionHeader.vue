<template>
  <div class="section-header clearfix">
    <h3 v-if="name" class="bold pull-left">
      <a v-if="role && role.website" :href="role.website" target="_blank">
        {{role.company}} <i class="fa fa-external-link" aria-hidden="true"></i>
      </a>
      <template v-else>
        {{name}}
      </template>
    </h3>
    <h5 v-if="role" class="italic pull-right">
      <span v-if="role.date" class="date">{{formatDateMMMYYYY(role.date)}}</span>
      <span v-if="role.startDate" class="startDate">{{formatDateYYYY(role.startDate)}}</span>
      <span v-if="role.endDate" class="endDate"> - {{formatDateYYYY(role.endDate)}}</span>
      <span v-else-if="role.endDate" class="endDate"> - Present</span>
      <template v-if="!role.startDate && role.releaseDate">
        {{formatDateYYYY(role.releaseDate)}}
      </template>
    </h5>
  </div>

</template>

<script lang="ts" setup>
import moment from 'moment'

const props = defineProps(['role', 'name'])

const formatDateYYYY = function (date) {
  return moment(date).format('YYYY');
}

const formatDateMMMYYYY = function (date) {
  return moment(date).format('MMM YYYY');
}

</script>