<script setup>
</script>

<template>
  <div class="container">
    <!-- CARD 1 SECTION -->
    <section class="section">
      <div class="section-inner">
        <div class="image-wrapper">
          <img
              src="/images/card1.png"
              alt="Character Card 1"
              class="float float-slow"
          />
        </div>

        <div class="text-block">
          <h1>AN EXPANSIVE ARRAY OF CHAMPIONS</h1>
          <h2>
            Brought together by the collision of multiple realities, The realm of Dwarzianti is on the brink of war and chaos. This merged realm contains a plethora of champions at your disposal to bring peace and balance to this distorted realm. From worlds of fire and magma in Claderas Ridge, to the deep forests of Luminwood, you'll never know what twisted creature you will encounter.           </h2>
        </div>
      </div>
    </section>

    <!-- CARD 2 SECTION -->
    <section class="section section-reverse">
      <div class="section-inner">
        <div class="image-wrapper">
          <img
              src="/images/card2.png"
              alt="Character Card 2"
              class="float float-fast"
          />
        </div>

        <div class="text-block">
          <h1>adventure awaits you!</h1>
          <h2>
            With vast realms of creatures and characters battling for rulership of the realm of
            Dwarzianti, you must choose which champions to accompany you and help you bring peace to
            this distorted land.
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 5vw, 6rem);
}

/* SECTION */
.section {
  width: 100%;
  padding: clamp(6vh, 8vw, 12vh) clamp(4vw, 6vw, 8vw);
  box-sizing: border-box;
}

/* INNER ROW */
.section-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: clamp(2rem, 4vw, 5rem);
  max-width: 1200px;
  margin: 0 auto;
}

/* REVERSE */
.section-reverse .section-inner {
  flex-direction: row-reverse;
}

/* ✅ TEXT BLOCK — FIX */
.text-block {
  flex: 1 1 40%;
  min-width: 250px;
  text-align: center;           /* center text */
  margin: 0 auto;               /* center block */
}

.text-block h1 {
  font-family: masonic-lodge;
  color: #ffffff;
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: clamp(0.75rem, 1vw, 1.25rem);
  max-width: 50vw;
  margin: 0 auto;
  text-align: center;
}

.text-block h2 {
  font-family: helvetica;
  color: #ffffff;
  font-size: clamp(.75rem, 1.5vw, 3rem);
  line-height: 1.6;
  max-width: 75vw;
  text-align: center;
  margin-top: clamp(1rem, 1.25vw, 1.75rem);
}

/* IMAGE */
.image-wrapper {
  flex: 1 1 55%;
  display: flex;
  justify-content: center;
}

.section-inner img {
  width: 100%;
  max-width: clamp(350px, 50vw, 700px);
  height: auto;
}

/* FLOATING ANIMATION */
.float {
  animation: float 6s ease-in-out infinite;
}

.float-slow {
  animation-duration: 7s;
}

.float-fast {
  animation-duration: 5.5s;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(-0.3deg);
  }
  50% {
    transform: translateY(-18px) rotate(0.3deg);
  }
  100% {
    transform: translateY(0px) rotate(-0.3deg);
  }
}

/* MOBILE */
@media (max-width: 900px) {
  .section-inner {
    flex-direction: column;
    text-align: center;
    gap: clamp(2rem, 4vw, 3rem);
  }

  .text-block,
  .image-wrapper {
    flex: 1 1 100%;
  }

  .section-inner img {
    max-width: clamp(300px, 80vw, 500px);
  }
}
</style>
