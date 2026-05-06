<template>
  <section id="contact">
    <h2>Connect With Me</h2>
    <div class="grid">
      <!-- Perulangan untuk Social Links -->
      <a v-for="social in socials" :key="social.title" :href="social.link" target="_blank" class="card-link">
        <div class="card">
          <div class="icon">{{ social.icon }}</div>
          <h3>{{ social.title }}</h3>
          <p>{{ social.desc }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { 
    title: "Email", 
    desc: "aqilasyakir36@gmail.com", 
    link: "mailto:aqilasyakir36@gmail.com", 
    icon: "📧" 
  },
  { 
    title: "WhatsApp", 
    desc: "Klik untuk mulai chat", 
    link: "https://wa.me/628XXXXXXXXXX", // Ganti dengan nomor WA kamu
    icon: "💬" 
  },
  { 
    title: "GitHub", 
    desc: "Cek project qillyz05", 
    link: "https://github.com/qillyz05", 
    icon: "💻" 
  }
]
</script>

<style scoped>
#contact {
  padding: 50px 5%;
}

h2 {
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card-link {
  text-decoration: none; /* Menghapus garis bawah pada link */
  color: inherit;
  transition: transform 0.3s ease;
}

.card-link:hover {
  transform: translateY(-5px); /* Efek melayang saat di-hover */
}

.card {
  background: #1e293b;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(56, 189, 248, 0.1);
  text-align: center;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

h3 {
  color: #38bdf8;
  margin-bottom: 10px;
}

p {
  color: #94a3b8;
  font-size: 0.9rem;
}
</style>
