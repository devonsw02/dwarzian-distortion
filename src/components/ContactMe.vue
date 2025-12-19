<script setup>
import { ref, computed, onMounted } from "vue";

// --- ASSET RESOLUTION FIX ---
// This uses the BASE_URL from your vite.config.js to find the /public folder
const getImageUrl = (filename) => {
  if (!filename) return '';
  // import.meta.env.BASE_URL will be "/dwarzian-distortion/" on GitHub
  return `${import.meta.env.BASE_URL}images/${filename}`;
};

// --- CATEGORY DATA ---
const rows = ref([
  { id: "location", label: "Locations" },
  { id: "item",     label: "Items" },
  { id: "light",    label: "Lumenfolk" },
  { id: "dark",     label: "Voidweavers" },
  { id: "metal",    label: "Automotrians" },
  { id: "water",    label: "Mariniads" },
  { id: "fire",     label: "Emberforgers" },
  { id: "earth",    label: "Terrankin" }
]);

// --- ALL 70 CARDS ---
const allCards = ref([
  // LOCATIONS
  { id: "loc-1", group: "location", title: "CALDERAS RIDGE", image: "location1.png" },
  { id: "loc-2", group: "location", title: "UMBARIAN SPIRE", image: "location2.png" },
  { id: "loc-3", group: "location", title: "Terraktopia", image: "location3.png" },
  { id: "loc-4", group: "location", title: "Luminwood Village", image: "location4.png" },
  { id: "loc-5", group: "location", title: "Analogicos", image: "location5.png" },
  { id: "loc-6", group: "location", title: "Salty Basins", image: "location6.png" },
  // ITEMS
  { id: "itm-1", group: "item", title: "Abyssal Bident", image: "item1.png" },
  { id: "itm-2", group: "item", title: "Maeve of Bronze", image: "item2.png" },
  { id: "itm-3", group: "item", title: "Emberwing Bow", image: "item3.png" },
  { id: "itm-4", group: "item", title: "The Candling", image: "item4.png" },
  { id: "itm-5", group: "item", title: "Cursed Pot of Fumora", image: "item5.png" },
  { id: "itm-6", group: "item", title: "Voltaris of Shocking", image: "item6.png" },
  { id: "itm-7", group: "item", title: "Morvath The Shaded", image: "item7.png" },
  { id: "itm-8", group: "item", title: "Potion of Heartiness", image: "item8.png" },
  { id: "itm-9", group: "item", title: "Ruby Monkey Plague", image: "item9.png" },
  { id: "itm-10", group: "item", title: "Grimtur The Boars Head", image: "item10.png" },
  { id: "itm-11", group: "item", title: "Black Lotus Cauldron", image: "item11.png" },
  { id: "itm-12", group: "item", title: "Ironclad Jacks Harpoon", image: "item12.png" },
  // FIRE
  { id: "fir-1", group: "fire", title: "Sir Pyrhhus", image: "fire1.png" },
  { id: "fir-2", group: "fire", title: "Ignivoros", image: "fire2.png" },
  { id: "fir-3", group: "fire", title: "Akaryu", image: "fire3.png" },
  // EARTH
  { id: "e-1", group: "earth", title: "Brontes", image: "earth1.png" },
  { id: "e-2", group: "earth", title: "Cragmaw", image: "earth2.png" },
  { id: "e-3", group: "earth", title: "Zharashka", image: "earth3.png" },
  { id: "e-4", group: "earth", title: "Gelos", image: "earth4.png" },
  // LIGHT
  { id: "l-1", group: "light", title: "Faylume", image: "light1.png" },
  { id: "l-2", group: "light", title: "Glorindel", image: "light2.png" },
  { id: "l-3", group: "light", title: "Cymoanti", image: "light3.png" },
  { id: "l-4", group: "light", title: "Cymoanti", image: "light5.png" },
  // METAL
  { id: "m-1", group: "metal", title: "cogmaw", image: "metal1.png" },
  { id: "m-2", group: "metal", title: "gearkraken", image: "metal2.png" },
  { id: "m-3", group: "metal", title: "gorgona", image: "metal3.png" },
  { id: "m-4", group: "metal", title: "gearkraken", image: "metal4.png" },
  // WATER
  { id: "w-1", group: "water", title: "rippleback", image: "water1.png" },
  { id: "w-2", group: "water", title: "tanglemane", image: "water2.png" },
  { id: "w-3", group: "water", title: "ironclad jack", image: "water3.png" },
  { id: "w-4", group: "water", title: "griffyn", image: "water4.png" },
  // DARK
  { id: "d-1", group: "dark", title: "duke alaric", image: "dark1.png" },
  { id: "d-2", group: "dark", title: "minnotaur", image: "dark2.png" },
  { id: "d-3", group: "dark", title: "morrathis", image: "dark3.png" },
  { id: "d-4", group: "dark", title: "snags", image: "dark4.png" }
]);

// --- HERO SLIDESHOW LOGIC ---
const heroActiveIndex = ref(0);
const heroFlipped = ref(false);
const activeHeroCard = computed(() => {
  const featured = allCards.value.slice(0, 5);
  return featured[heroActiveIndex.value];
});

const nextHeroCard = () => {
  heroActiveIndex.value = (heroActiveIndex.value + 1) % 5;
  heroFlipped.value = false;
};

onMounted(() => setInterval(nextHeroCard, 5000));

// --- GROUPING LOGIC ---
const cardsByGroup = computed(() => {
  const groups = {};
  rows.value.forEach((row) => {
    groups[row.id] = allCards.value.filter((card) => card.group === row.id);
  });
  return groups;
});

const flippedCards = ref({});
const toggleCard = (id) => {
  flippedCards.value[id] = !flippedCards.value[id];
};
</script>

<template>
  <div class="contact-page">
    <section class="champions-hero">
      <div class="hero-copy">
        <h1>MEET YOUR<br />CHAMPIONS!</h1>
        <p>Found across the main six realms, fighting to protect their home realm and rule the realm of Dwarzianti.</p>
      </div>

      <div class="hero-card-wrapper">
        <div class="flip-card hero-card" :class="{ flipped: heroFlipped }" @click="heroFlipped = !heroFlipped">
          <div class="flip-card-inner">
            <div class="card-face flip-card-front">
              <img :src="getImageUrl(activeHeroCard.image)" :alt="activeHeroCard.title" />
            </div>
            <div class="card-face flip-card-back">
              <img :src="getImageUrl('backside.png')" alt="backside" />
            </div>
          </div>
        </div>
        <div class="hero-card-label">
          <h3>{{ activeHeroCard.title }}</h3>
        </div>
      </div>
    </section>

    <div class="card-rows">
      <section v-for="row in rows" :key="row.id" class="card-row">
        <h2 class="row-title">{{ row.label }}</h2>

        <div class="cards-container">
          <article
              v-for="card in cardsByGroup[row.id]"
              :key="card.id"
              class="card flip-card"
              :class="{ flipped: flippedCards[card.id] }"
              @click="toggleCard(card.id)"
          >
            <div class="flip-card-inner">
              <div class="card-face flip-card-front">
                <img :src="getImageUrl(card.image)" :alt="card.title" loading="lazy" />
              </div>
              <div class="card-face flip-card-back">
                <img :src="getImageUrl('backside.png')" alt="backside" loading="lazy" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* (Existing styles remain the same) */
.contact-page { width: 100%; color: white; font-family: masonic-lodge, serif; overflow-x: hidden; background-color: #0a0a0a;}
.champions-hero { display: grid; grid-template-columns: 1fr 1fr; padding: 8rem 8vw; align-items: center; gap: 4rem; }
.hero-card { width: 400px; height: 600px; margin: 0 auto; animation: floatAnimation 4s ease-in-out infinite; }
.hero-card-label h3 { text-align: center; margin-top: 1.5rem; font-size: 2.5rem; color: #f7941d; }
.card-rows { padding: 0 8vw 10rem 8vw; }
.card-row { margin-bottom: 6rem; }
.row-title { font-size: 2.5rem; color: #f7941d; border-bottom: 1px solid #333; margin-bottom: 3rem; text-transform: uppercase; }
.cards-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 200px)); gap: 3rem; justify-content: center; }
.card { width: 200px; height: 300px; cursor: pointer; position: relative; }
.flip-card { perspective: 1200px; }
.flip-card-inner { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.6s ease; }
.flipped .flip-card-inner { transform: rotateY(180deg); }
.card-face { position: absolute; inset: 0; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
.card-face img { width: 100%; height: 100%; object-fit: cover; display: block; }
.flip-card-back { transform: rotateY(180deg); }
@keyframes floatAnimation { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
@media (max-width: 900px) { .champions-hero { grid-template-columns: 1fr; text-align: center; } .hero-card { width: 300px; height: 450px; } .cards-container { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); } }
</style>
