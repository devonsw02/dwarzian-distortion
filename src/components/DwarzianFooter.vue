<template>
  <footer class="dd-footer">
    <div class="dd-footer-inner">
      <div class="dd-footer-left">
        <img src="/images/logo.png" alt="logo" class="dd-logo-image" />
      </div>

      <div class="dd-footer-middle">
        <h2 class="dd-newsletter-title">JOIN OUR NEWSLETTER!</h2>
        <form class="dd-newsletter-form" @submit.prevent="onSubmit">
          <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div class="dd-footer-right">
        <div class="dd-social-row">
          <a href="#" aria-label="Instagram" class="dd-social-icon">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="YouTube" class="dd-social-icon">
            <YoutubeIcon />
          </a>
          <a href="#" aria-label="Facebook" class="dd-social-icon">
            <FacebookIcon />
          </a>
        </div>
        <p class="dd-footer-text">
          Enter your email below to gain access to the Dwarzian Distortion Newsletter, where
          we update our fans about game mechanic updates, new character reveals, and exclusive promo material.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

/**
 * FIXED: Changed paths from "/assets/..." to "@/assets/..."
 * This allows Vite to find the files inside your src folder during build.
 */
import FacebookIcon from '@/assets/svg/facebook.vue'
import InstagramIcon from '@/assets/svg/instagram.vue'
import YoutubeIcon from '@/assets/svg/youtube.vue'

const email = ref('')

const onSubmit = () => {
  console.log('Newsletter email:', email.value)
  email.value = ''
}
</script>

<style scoped>
.dd-footer {
  color: #ffffff;
  padding: clamp(24px, 4vw, 40px) clamp(20px, 6vw, 60px);
  /* Ensure this font is properly loaded in your main CSS */
  font-family: 'masonic-lodge', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
}

.dd-footer-inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(24px, 4vw, 40px);
  flex-wrap: wrap;
  max-width: 100%;
  box-sizing: border-box;
}

.dd-footer-left {
  flex-shrink: 1;
  width: clamp(120px, 18vw, 260px);
}

.dd-logo-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
}

.dd-footer-middle {
  flex: 1;
  min-width: 220px;
  max-width: clamp(320px, 40vw, 550px);
}

.dd-newsletter-title {
  margin: 0 0 16px;
  font-size: clamp(18px, 3vw, 28px);
  letter-spacing: 0.15em;
}

.dd-newsletter-form {
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 999px;
  padding: clamp(4px, 1vw, 6px) clamp(12px, 2vw, 20px);
  box-sizing: border-box;
}

.dd-newsletter-form input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: #ffffff;
  font-size: clamp(14px, 1.6vw, 16px);
}

.dd-newsletter-form button {
  border: none;
  border-radius: 999px;
  background-color: #f7941d;
  color: #ffffff;
  padding: clamp(8px, 1.4vw, 10px) clamp(12px, 2vw, 20px);
  font-size: clamp(12px, 1.4vw, 14px);
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.2s ease;
}

.dd-newsletter-form button:hover {
  background-color: #d67d16;
}

.dd-footer-right {
  flex-shrink: 1;
  max-width: clamp(260px, 32vw, 420px);
}

.dd-social-row {
  display: flex;
  gap: clamp(14px, 3vw, 24px);
  margin-bottom: clamp(12px, 2vw, 20px);
}

.dd-social-icon {
  width: clamp(34px, 7vw, 60px);
  height: clamp(34px, 7vw, 60px);
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
}

/* Updated selector to target the icons properly */
.dd-social-icon :deep(svg),
.dd-social-icon svg {
  width: 60%;
  height: 60%;
  fill: currentColor;
  display: block;
}

.dd-footer-text {
  margin: 0;
  font-size: clamp(12px, 1.5vw, 14px);
  line-height: 1.6;
  word-break: break-word;
  text-align: right;
  /* FIXED: font-family typo */
  font-family: 'Helvetica', Arial, sans-serif;
}

@media (max-width: 900px) {
  .dd-footer-inner {
    flex-direction: column;
    align-items: center;
    gap: clamp(24px, 4vw, 40px);
  }

  .dd-footer-left,
  .dd-footer-middle,
  .dd-footer-right {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .dd-footer-left {
    display: flex;
    justify-content: center;
    width: clamp(100px, 40vw, 180px);
    margin-bottom: 10px;
  }

  .dd-footer-text {
    text-align: center;
  }

  .dd-social-row {
    justify-content: center;
  }
}
</style>
