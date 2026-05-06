<template>
  <nav class="nav">
    <h1>My<span>Portfolio</span></h1>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  /* Membuat navbar tetap di atas saat di-scroll */
  position: sticky;
  top: 0;
  z-index: 1000;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%; /* Padding lebih lebar di samping */
  
  /* Efek Glassmorphism */
  background: rgba(2, 6, 23, 0.8); 
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(56, 189, 248, 0.1);
}

h1 {
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: -1px;
}

h1 span {
  color: #38bdf8; /* Memberi aksen warna pada kata 'Portfolio' */
}

.nav-links a {
  margin-left: 25px;
  color: #94a3b8; /* Warna abu-abu soft agar tidak terlalu kontras */
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease; /* Transisi halus saat hover */
  position: relative;
}

/* Efek Hover: Berubah warna dan muncul garis bawah halus */
.nav-links a:hover {
  color: #38bdf8;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #38bdf8;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>
