<template>
  <section id="projects">
    <h2>Projects</h2>
    <div class="grid">
      <div class="card" v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: "E-Commerce App", desc: "Vue + Firebase" },
  { title: "Dashboard Admin", desc: "Vue + Chart.js" },
]
</script>

<style scoped>
.grid {
  display: flex;
  gap: 20px;
}
.card {
  background: #1e293b;
  padding: 20px;
  border-radius: 10px;
}
</style>