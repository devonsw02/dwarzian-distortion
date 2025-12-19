<script setup>
import { ref } from "vue";
import Money from "@/assets/svg/money.vue";

const mobileOpen = ref(false);

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};
</script>

<template>
  <header class="nav-container">
    <router-link :to="{ name: 'home' }" class="logo" aria-label="Go to Home" />

    <button class="hamburger" @click="toggleMobile" :aria-expanded="mobileOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav :class="['links', { open: mobileOpen }]" id="mobile-menu">
      <router-link :to="{ name: 'shop-here' }" @click="mobileOpen = false">Shop</router-link>
      <router-link :to="{ name: 'about-me' }" @click="mobileOpen = false">How To Play</router-link>
      <router-link :to="{ name: 'contact-me' }" @click="mobileOpen = false">Cards</router-link>

      <router-link :to="{ name: 'news' }" class="cart-link" @click="mobileOpen = false">
        <Money class="money-icon" />
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, rgba(46, 45, 120, 0.9), transparent);
  z-index: 1000;
  box-sizing: border-box;
}

/* FIXED LOGO STYLE */
.logo {
  display: block; /* Required for background images on links */
  width: clamp(120px, 12vw, 300px);
  height: 60px; /* Gives the logo space to appear */
  background-image: url('/images/logo.png');
  background-size: contain; /* Ensures logo fits inside the width/height */
  background-repeat: no-repeat;
  background-position: left center;
  flex-shrink: 0;
}

.links {
  display: flex;
  gap: clamp(1rem, 3vw, 3rem);
  align-items: center;
}

.links a {
  color: white;
  text-decoration: none;
  font-size: clamp(14px, 1.8vw, 18px);
  font-family: masonic-lodge, sans-serif;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.links a:hover {
  color: orange;
}

.cart-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
}

.money-icon {
  fill: white;
  width: 100%;
  height: 100%;
  transition: fill 0.3s ease;
}

.cart-link:hover .money-icon {
  fill: orange;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  height: 4px;
  width: 100%;
  background: white;
  border-radius: 2px;
}

@media (max-width: 700px) {
  .hamburger {
    display: flex;
  }

  .links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    padding: 2rem 0;
    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
    transition: all 0.4s ease;
  }

  .links.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .links a {
    font-size: 24px;
    padding: 1rem 0;
  }

  .money-icon {
    width: 40px;
    height: 40px;
  }
}
</style>