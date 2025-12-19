<script setup>
import { ref } from 'vue'
import NavBar from '../views/NavBar.vue';

// --- DATA ---
const cards = ref([
  {
    title: 'Item Cards',
    image: '/images/itemcardgraph.png',
    subtext: 'Item cards offer tactical, one-time-use effects that can turn the tide of battle.',
  },
  {
    title: 'Character Cards',
    image: '/images/charactercardgraph.png',
    subtext: 'Character cards are the main combatants, featuring unique abilities and health values.',
  },
  {
    title: 'Location Cards',
    image: '/images/locationcardgraph.png',
    subtext: 'Location cards define the battlefield, applying persistent, global effects.',
  }
])
</script>

<template>
  <main class="learn-page">
    <NavBar />

    <header class="hero">
      <div class="hero-overlay">
        <h1>LEARN TO PLAY!</h1>
        <p class="hero-subtext">
          Master the basics, build your deck, and lead your champions to victory.
        </p>
      </div>
    </header>

    <section class="deck-section">
      <h2 class="section-title">GREET YOUR DECK!</h2>
      <div class="cards-wrapper">
        <div v-for="(card, cIdx) in cards" :key="cIdx" class="card-info">
          <div class="graph-container">
            <img :src="card.image" :alt="card.title" />
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.subtext }}</p>
        </div>
      </div>
    </section>

    <section class="setup-section">
      <h2 class="section-title">DECK SET UP AND MOVES</h2>

      <div class="phase-row">
        <div class="phase-text">
          <span class="phase-number">PHASE 1</span>
          <h4>PREPARE YOUR FORCES</h4>
          <ul>
            <li>Choose 1 <strong>Location Card</strong> to defend as your stronghold.</li>
            <li>Select 5 <strong>Character Cards</strong> (3 Active, 2 Backup).</li>
            <li>Take 20 <strong>Distortion Cards</strong> as energy tokens.</li>
            <li>Place your Item Deck to your left.</li>
          </ul>
        </div>
        <div class="phase-image">
          <img src="/images/instruction1.png" alt="Setup Step 1" />
        </div>
      </div>

      <div class="phase-row reverse">
        <div class="phase-text">
          <span class="phase-number">PHASE 2</span>
          <h4>START THE BATTLE!</h4>
          <ul>
            <li>Flip a coin to decide who goes first.</li>
            <li>Pay your Location Card's energy cost to activate its effects.</li>
          </ul>
        </div>
        <div class="phase-image">
          <img src="/images/instruction2.png" alt="Setup Step 2" />
        </div>
      </div>

      <div class="phase-row">
        <div class="phase-text">
          <span class="phase-number">PHASE 3</span>
          <h4>TAKE YOUR TURN</h4>
          <ul>
            <li><strong>Item Draw:</strong> Flip a coin. Heads? Draw an Item Card.</li>
            <li><strong>Attack:</strong> Choose 1 Defender to target an opponent.</li>
            <li><strong>Manage Energy:</strong> Subtract shard costs from your pool.</li>
            <li><strong>Backup:</strong> Replace defeated defenders with backup.</li>
          </ul>
        </div>
        <div class="phase-image">
          <img src="/images/instruction3.png" alt="Setup Step 3" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.learn-page {
  color: white;
  font-family: 'masonic-lodge', serif;
  min-height: 100vh;
}

/* HERO */
.hero {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
}

.hero h1 { font-size: 4rem; color: #f7941d; margin-bottom: 1rem; }
.hero-subtext { font-size: 1.2rem; max-width: 600px; margin: 0 auto; font-family: sans-serif; }

/* SECTION COMMON */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #f7941d;
  margin: 4rem 0;
  text-transform: uppercase;
}

/* DECK GRAPHS */
.deck-section { padding: 0 8vw; }
.cards-wrapper {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.card-info {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  text-align: center;
}

/* ⭐️ SIZE FIX: Ensures graph images fit their container */
.graph-container {
  width: 100%;
  height: 400px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 15px;
}

.graph-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Keeps the whole graph visible without stretching */
}

.card-info h3 { color: #f7941d; margin-bottom: 1rem; text-transform: uppercase; }
.card-info p { font-family: sans-serif; line-height: 1.6; color: #ccc; }

/* PHASE ROWS */
.setup-section { padding: 0 10vw 10rem 10vw; }

.phase-row {
  display: flex;
  align-items: center;
  gap: 5vw;
  margin-bottom: 8rem;
}

.phase-row.reverse { flex-direction: row-reverse; }

.phase-text { flex: 1; }
.phase-number { color: #f7941d; font-weight: bold; font-size: 1rem; }
.phase-text h4 { font-size: 2rem; margin: 0.5rem 0 1.5rem 0; }
.phase-text ul { list-style: none; padding: 0; }
.phase-text li {
  margin-bottom: 1rem;
  font-family: sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #ddd;
}

/* ⭐️ SIZE FIX: Constraints the instruction diagrams */
.phase-image {
  flex: 1;
  max-width: 500px; /* Limits the giant diagram width */
}

.phase-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
  display: block;
}

/* MOBILE RESPONSIVENESS */
@media (max-width: 900px) {
  .phase-row, .phase-row.reverse { flex-direction: column; text-align: center; }
  .phase-image { max-width: 100%; }
  .hero h1 { font-size: 2.5rem; }
}
</style>