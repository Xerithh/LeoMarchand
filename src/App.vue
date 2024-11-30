<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <YoutubeSection />
    <FooterSection />
  </div>
</template>

<script>
import Test from './components/Test.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import YoutubeSection from './components/YoutubeSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    Test,
    HeroSection,
    AboutSection,
    ProjectsSection,
    YoutubeSection,
    FooterSection,
  },
}
</script>
