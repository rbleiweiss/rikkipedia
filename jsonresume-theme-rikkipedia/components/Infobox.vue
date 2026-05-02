<template>
  <div class="infobox-container">
    <div class="infobox">
      <div class="header">{{resume.basics.name}}</div>
      <div class="content">
        <img src="/static/headshot.png"/>
        <div v-if="resume.basics.caption" class="caption">{{resume.basics.caption}}</div>
        <div class="about-container">
          <table class="about-table">
            <tr v-if="resume.basics.location">
              <td>Lives</td>
              <td>{{ formatAddress(resume.basics.location) }}</td>
            </tr>

            <tr v-if="resume.education && resume.education.length > 0">
              <td>Education</td>
              <td>
                <div v-for="edu of resume.education" class="item">
                  {{edu.studyType}} in {{edu.area}} from {{edu.institution}}
                </div>
              </td>
            </tr>

            <tr v-if="resume.skills && resume.skills.length > 0">
              <td>Skills</td>
              <td>
                <div class="item">{{getSkills(resume)}}</div>
              </td>
            </tr>

            <tr v-if="resume.basics.profiles && resume.basics.profiles.length > 0" >
              <td>Profiles</td>
              <td>
                <table class="profiles">
                <Social
                    v-for="profile in resume.basics.profiles"
                    :profile="profile"
                />
                <InfoTag
                    text="Resume (.pdf)"
                    icon="fas fa-file-alt fa-fw"
                    url="./static/RikkiBleiweissResume.pdf"
                />
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Title from "../partials/Title.vue";
import InfoTag from "../partials/InfoTag.vue";
import Social from "../partials/Social.vue";
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

const getSkills = function(resume){
  let skills = []
  if (resume.skills.length > 0) {
    skills = resume.skills.join(", ")
  }
  return skills
}

</script>

<style lang="scss" scoped>
</style>