<template>
  <section id="projects">
    <h2>My Projects</h2>
    <div class="grid">
      <!-- Perulangan untuk setiap project -->
      <div class="card" v-for="project in projects" :key="project.title">
        <div class="card-content">
          <span class="tech-tag">{{ project.tech }}</span>
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
        </div>
        <a :href="project.link" target="_blank" class="btn-project">
          View Project ↗
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { 
    title: "PHP Native CRUD", 
    desc: "Sistem manajemen data sederhana yang dibangun menggunakan PHP murni dan database MySQL.", 
    tech: "PHP + MySQL",
    link: "https://github.com/qillyz05/PHP-Native" 
  },
  { 
    title: "E-Commerce App", 
    desc: "Aplikasi perbelanjaan modern dengan integrasi database real-time.", 
    tech: "Vue + Firebase",
    link: "#" 
  },
  { 
    title: "Branding Logo 'Tera'", 
    desc: "Project desain identitas visual untuk brand perangkat mobile dengan konsep simetris.", 
    tech: "Graphic Design",
    link: "#" 
  },
  { 
    title: "Prime Algorithm", 
    desc: "Optimasi algoritma pengecekan bilangan prima menggunakan metode Trial Division.", 
    tech: "JavaScript",
    link: "#" 
  }
]
</script>

<style scoped>
#projects {
  padding: 60px 5%;
}

h2 {
  color: #ffffff;
  margin-bottom: 40px;
  font-size: 2rem;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.card {
  background: #1e293b;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(56, 189, 248, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  border-color: #38bdf8;
  box-shadow: 0 10px 30px -15px rgba(56, 189, 248, 0.3);
}

.tech-tag {
  font-size: 0.75rem;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 15px;
}

h3 {
  color: #ffffff;
  margin-bottom: 12px;
  font-size: 1.25rem;
}

p {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 25px;
}

.btn-project {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.3s;
}

.btn-project:hover {
  text-decoration: underline;
  opacity: 0.8;
}

/* Responsif untuk HP */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
