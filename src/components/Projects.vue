<template>
  <section id="projects">
    <h2>My Projects</h2>
    <div class="grid">
      <!-- Perulangan untuk setiap project -->
      <div class="card" v-for="project in projects" :key="project.title">
        <!-- Bagian Gambar Project -->
        <div class="card-image">
          <img :src="project.image" :alt="project.title" />
        </div>

        <div class="card-content">
          <span class="tech-tag">{{ project.tech }}</span>
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <a :href="project.link" target="_blank" class="btn-project">
            View Project ↗
          </a>
        </div>
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
    link: "https://github.com/qillyz05/PHP-Native",
    image: "#" 
  },
  { 
    title: "E-Commerce App", 
    desc: "Aplikasi perbelanjaan modern dengan integrasi database real-time menggunakan Firebase.", 
    tech: "Vue + Firebase",
    link: "#",
    image: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=E-Commerce"
  },
  { 
    title: "Branding Logo 'Tera'", 
    desc: "Project desain identitas visual untuk brand perangkat mobile dengan konsep simetris.", 
    tech: "Graphic Design",
    link: "#",
    image: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=Tera+Logo"
  },
  { 
    title: "Prime Algorithm", 
    desc: "Optimasi pengecekan bilangan prima menggunakan metode Trial Division dan 6k optimization.", 
    tech: "JavaScript",
    link: "#",
    image: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=Algorithm"
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
  border-radius: 15px;
  border: 1px solid rgba(56, 189, 248, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Agar gambar mengikuti radius kartu */
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  border-color: #38bdf8;
  box-shadow: 0 10px 30px -15px rgba(56, 189, 248, 0.3);
}

.card-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 25px;
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

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>    tech: "Graphic Design",
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
