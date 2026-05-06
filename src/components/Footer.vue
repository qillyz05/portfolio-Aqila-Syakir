<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Bagian Branding -->
      <div class="footer-section about">
        <h2 class="logo">Aqila<span>Syakir</span></h2>
        <p>
          Siswa SMKS Yadika Soreang, Jurusan PPLG. 
          Fokus pada pengembangan perangkat lunak dan desain web kreatif.
        </p>
        <div class="location">
          📍 Bandung, Jawa Barat
        </div>
      </div>

      <!-- Bagian Navigasi Cepat -->
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <!-- Bagian Media Sosial -->
      <div class="footer-section social">
        <h3>Follow Me</h3>
        <div class="social-icons">
          <a href="https://github.com/qillyz05" target="_blank">GitHub</a>
          <a href="https://instagram.com/qilyzgyll" target="_blank">Instagram</a>
          <a href="mailto:aqilasyakir36@gmail.com">Email</a>
        </div>
      </div>
    </div>

    <!-- Garis Bawah & Copyright -->
    <div class="footer-bottom">
      <p>&copy; 2026 Aqila Syakir. All rights reserved.</p>
      <p class="school-tag">XI PPLG 3 - SMK Yadika Soreang</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #020617;
  color: #94a3b8;
  padding: 60px 5% 20px;
  border-top: 1px solid rgba(56, 189, 248, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.logo {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.logo span {
  color: #38bdf8;
}

.footer-section h3 {
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.footer-section p {
  line-height: 1.6;
  font-size: 0.9rem;
}

.location {
  margin-top: 15px;
  font-size: 0.85rem;
  color: #38bdf8;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

ul li a, .social-icons a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

ul li a:hover, .social-icons a:hover {
  color: #38bdf8;
}

.social-icons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-bottom {
  text-align: center;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-bottom p {
  font-size: 0.8rem;
  margin-bottom: 5px;
}

.school-tag {
  color: #38bdf8;
  font-weight: 500;
}

/* Responsif untuk HP */
@media (max-width: 768px) {
  .footer-content {
    text-align: center;
  }
  
  .social-icons {
    align-items: center;
  }
}
</style>
