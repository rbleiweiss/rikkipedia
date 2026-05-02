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
    <div v-if="work.position" class="position">
      <h3 class="bold">
        {{work.position}}
      </h3>
      <div class="company">
        [<template v-if="work.url">
          <a class="company" :href="work.url" target="_blank">{{work.company}}</a>,
        </template>
        <template v-else>
          {{work.company}},
        </template>
          {{dateRange(work)}}]
      </div>
    </div>

    <vue-markdown v-if="work.summary" :source="work.summary" class="summary" :options="{ html: true }"/>

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
    range += role.startDate ? '-' : ''
    range += moment(role.endDate).format('YYYY')
  } else if (role.startDate) {
    range += "-Present"
  }

  if (!role.startDate && role.releaseDate) {
    range += moment(role.releaseDate).format('YYYY')
  }

  return range
}

</script>
