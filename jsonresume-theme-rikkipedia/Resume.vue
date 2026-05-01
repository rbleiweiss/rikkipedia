<template>
  <div id="resume" class="container">
    <div class="resume-content">
      <div class="left-column">
        <img class="logo" src="./static/rikkipedia.png"/>
        <Contents :resume="resume"/>
      </div>
      <div class="right-column">
        <Header :resume="resume" />
        <Summary :basics="resume.basics" />
        <Infobox :resume="resume"/>
        <Work :resume="resume" />
        <Volunteer :resume="resume"/>
        <Education :education="resume.education"/>
        <Certificates :resume="resume"/>
        <Awards :resume="resume"/>
        <Publications :resume="resume"/>
        <References :resume="resume"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Languages from "./components/Languages.vue";
import Interests from "./components/Interests.vue";
import Summary from "./components/Summary.vue";
import Work from "./components/Work.vue";
import Volunteer from "./components/Volunteer.vue";
import Education from "./components/Education.vue";
import Awards from "./components/Awards.vue";
import Publications from "./components/Publications.vue";
import References from "./components/References.vue";
import Certificates from "./components/Certificates.vue";
import Infobox from "./components/Infobox.vue";
import Contents from "./components/Contents.vue";
const props = defineProps(['resume'])
</script>

<style lang="scss">
@use "styles/main.scss" as *;
</style>