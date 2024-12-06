<template>
  <div>
    <!--<SwimAnimation />-->
      <HeroSection ref="heroComponent" id="heroComponent"/>
      <WaveTransition v-if="isLargeScreen" id="waveComponent" @wavesAnimationCompleted="triggerHeroAnimation"/>
    <div id="aboutComponent">
      <AboutSection />
      <ProjectsSection />
      <YoutubeSection />
      <QuizSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeroSection from './components/HeroSection.vue'
import WaveTransition from './components/ui/WaveTransition.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import YoutubeSection from './components/YoutubeSection.vue'
import FooterSection from './components/FooterSection.vue'
import QuizSection from './components/QuizSection.vue';
import SwimAnimation from './components/ui/SwimAnimation.vue';

const heroComponent = ref(null);
const isLargeScreen = ref(false);
const isNoTop = ref(true);

function triggerHeroAnimation(data) {
  if (heroComponent.value) {
    console.log('triggerHeroAnimation');
    if(data == 1)
      heroComponent.value.startLoadingAnimation();
    else
      heroComponent.value.startHeroAnimation();
  }
}

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize); 
  /*window.addEventListener('hashchange', function() {
    if (window.location.hash === '#top') {
      console.log("Le lien #top a été activé !");
      isNoTop = ref(false);
      const waveComponent = document.getElementById('waveComponent');
      if (waveComponent) {
        waveComponent.classList.add('hidden');
      }
      const ripples = document.getElementById('backgroundRipples');
      if (ripples) {
        ripples.classList.add('hidden');
      }
    }
  });*/
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
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
