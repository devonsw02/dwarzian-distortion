<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="container">
    <section class="heroimage">
      <!-- LEFT CONTENT -->
      <div class="hero-left">
        <h1>DISTORT YOUR DESTINY!</h1>

        <p>
          Welcome to the official website of
          Dwarzian Distortion Collectible Trading Card Game!
        </p>

        <RouterLink to="/about-me" class="hero-cta">
          LEARN MORE
        </RouterLink>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="hero-right">
        <img
            src="/images/floating.png"
            alt="Floating cards"
            class="floating-img"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* RESET */
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* CONTAINER */
.container {
  width: 100%;
  min-height: 120vh;
  display: flex;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}


.heroimage {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(3rem, 5vw, 6rem);
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
}

/* LEFT SIDE */
.hero-left {
  flex: 1 1 40%;
  color: #ffffff;
  min-width: 260px;
  z-index: 2;
}

.hero-left h1 {
  font-size: clamp(3.5rem, 7vw, 5rem);
  line-height: 1.05;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-family: masonic-lodge;
  font-style: italic;
}

.hero-left p {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  margin-bottom: 2.5rem;
  font-family: 'helvetica';
}

.hero-cta {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  font-family: masonic-lodge;
  font-size: clamp(.75rem, .75vw, .75rem);

  background-color: #ffffff;
  color: #f7941d;

  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;

  border: 2px solid #ffffff;

  transition:
      background-color 0.25s ease,
      color 0.25s ease,
      transform 0.25s ease;
}

/* SUBTLE FUNKY HOVER */
.hero-cta:hover {
  background-color: #f7941d;
  color: #ffffff;


  animation: funky-shake 0.35s ease-in-out;
}

/* PRESS FEEDBACK */
.hero-cta:active {
  transform: scale(0.96);
}

/* ✨ FUNKY BUT SOFT */
@keyframes funky-shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px) rotate(-0.3deg);
  }
  50% {
    transform: translateX(2px) rotate(0.3deg);
  }
  75% {
    transform: translateX(-1px) rotate(-0.2deg);
  }
  100% {
    transform: translateX(0);
  }
}


.hero-right {
  flex: 1 1 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  margin-top: 4rem;
}

.floating-img {
  max-width: 120%;
  height:80vh;
  margin-right: 8vw;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .container {
    min-height: 100vh;
  }

  .heroimage {
    flex-direction: column;
    text-align: center;
    padding: clamp(2rem, 4vw, 4rem);
  }

  .hero-left {
    order: 2;
  }

  .hero-right {
    order: 1;
    margin-bottom: 2rem;
  }

  .floating-img {
    height: auto;
    max-width: 80%;
  }
}
</style>
