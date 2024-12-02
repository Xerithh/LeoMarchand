<template>
  <div>
    <HeroSection ref="heroComponent"/>
    <WaveTransition @wavesAnimationCompleted="triggerHeroAnimation"/>
    <AboutSection />
    <ProjectsSection />
    <YoutubeSection />
    <FooterSection />
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
