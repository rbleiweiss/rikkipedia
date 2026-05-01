<template>
  <div class="infobox">
    <div class="header">{{resume.basics.name}}</div>
    <div class="content">
      <img src="/rikkipedia/static/headshot.png"/>
      <div class="about-container">
        <table class="about-table">
          <tr v-if="resume.basics.location">
            <td>Lives</td>
            <td>{{ formatAddress(resume.basics.location) }}</td>
          </tr>

          <tr v-if="resume.education && resume.education.length > 0">
            <td>Education</td>
            <td>
              <div v-for="edu of resume.education">
                {{edu.studyType}} in {{edu.area}} from {{edu.institution}}
              </div>
            </td>
          </tr>

          <tr v-if="resume.skills && resume.skills.length > 0">
            <td>Skills</td>
            <td>
              <div v-for="skill of resume.skills">{{skill}}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import addressFormat from 'address-format';

const props = defineProps(['resume'])
const formatAddress = function(location) {
  let addressList = addressFormat({
    address: location.address,
    city: location.city,
    subdivision: location.region,
    postalCode: location.postalCode,
    countryCode: location.countryCode
  })
  return addressList.join('<br/>');
}
</script>

<style lang="scss" scoped>
</style>