<template>
  <div>
    <!--<SwimAnimation />-->
      <HeroSection ref="heroComponent" id="heroComponent"/>
      <WaveTransition id="waveComponent" @wavesAnimationCompleted="triggerHeroAnimation"/>
    <div id="aboutComponent">
      <AboutSection />
      <ProjectsSection />
      <YoutubeSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeroSection from './components/HeroSection.vue'
import WaveTransition from './components/ui/WaveTransition.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import YoutubeSection from './components/YoutubeSection.vue'
import FooterSection from './components/FooterSection.vue'
import SwimAnimation from './components/ui/SwimAnimation.vue';

const heroComponent = ref(null);

function triggerHeroAnimation(data) {
  if (heroComponent.value) {
    console.log('triggerHeroAnimation');
    if(data == 1)
      heroComponent.value.startLoadingAnimation();
    else
      heroComponent.value.startHeroAnimation();
  }
}

/*export default {
  name: 'App',
  components: {
    HeroSection,
    WaveTransition,
    AboutSection,
    ProjectsSection,
    YoutubeSection,
    FooterSection,
  },
}*/
</script>
