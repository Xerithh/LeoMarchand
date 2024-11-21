<template>
  <div>
    <HeaderSection />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <BlogSection />
    <YoutubeSection />
    <FooterSection />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import BlogSection from './components/BlogSection.vue'
import YoutubeSection from './components/YoutubeSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeaderSection from './components/HeaderSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    BlogSection,
    YoutubeSection,
    FooterSection,
  },
}
</script>
