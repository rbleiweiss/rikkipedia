<template>
<div
    id="work"
    v-if="resume.work && resume.work.length > 0"
    class="work-container"
>
  <Title value="Career History" />
  <section
      v-for="work of resume.work"
      class="item"
      :class="work.company ? '' : 'continuation'"
  >
    <h3 v-if="work.position" class="bold position">
      {{work.position}}
      <span class="company">
          [
        <template v-if="work.url">
          <a class="company" :href="work.url">{{work.company}}</a>,
        </template>
        <template v-else>
          {{work.company}}
        </template>
          {{dateRange(work)}}]
      </span>
    </h3>

    <vue-markdown v-if="work.summary" :source="work.summary" class="summary" />

    <ul v-if="work.highlights && work.highlights.length > 0">
      <li v-for="highlight of work.highlights">
        {{highlight}}
      </li>
    </ul>

  </section>
</div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import SectionHeader from "../partials/SectionHeader.vue";
import VueMarkdown from 'vue-markdown-render'
import moment from 'moment'

const props = defineProps(['resume'])

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
