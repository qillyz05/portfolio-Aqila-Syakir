<template>
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Contact />
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'  
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #0f172a;
  color: white;
}
</style>
