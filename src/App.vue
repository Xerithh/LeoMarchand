<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <YoutubeSection />
    <QuizSection />
    <FooterSection />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import YoutubeSection from './components/YoutubeSection.vue'
import FooterSection from './components/FooterSection.vue'
import QuizSection from './components/QuizSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
    YoutubeSection,
    QuizSection,
    FooterSection,
  },
}
</script>
