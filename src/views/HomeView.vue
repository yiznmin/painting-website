<template>
  <div class="home">

    <!-- Hero 區：純文字 + 右側線條裝飾 -->
    <section class="hero">
      <div class="hero-text">
        <p class="hero-label">客製化數字油畫</p>
        <h1 class="hero-title">YiiMui</h1>
        <p class="hero-tagline">把回憶變成<br />可以留下來的樣子</p>
        <div class="hero-divider"></div>
        <div class="hero-actions">
          <RouterLink to="/portfolio" class="btn-primary">瀏覽作品集</RouterLink>
          <RouterLink to="/contact" class="btn-ghost">私訊訂製</RouterLink>
        </div>
      </div>

      <!-- 右側 SVG 線條裝飾 -->
      <div class="hero-deco" aria-hidden="true">
        <svg viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg" class="deco-svg">
          <!-- 大圓 -->
          <circle cx="200" cy="180" r="130" stroke="#c8c0b4" stroke-width="1"/>
          <!-- 小圓 -->
          <circle cx="200" cy="180" r="90" stroke="#d8d0c8" stroke-width="0.6" stroke-dasharray="4 6"/>
          <!-- 小花瓣 -->
          <ellipse cx="200" cy="180" rx="18" ry="28" stroke="#c8c0b4" stroke-width="0.8"/>
          <ellipse cx="200" cy="180" rx="28" ry="18" stroke="#c8c0b4" stroke-width="0.8"/>
          <!-- 細橫線裝飾 -->
          <line x1="40" y1="90" x2="110" y2="90" stroke="#d4ccc4" stroke-width="0.6"/>
          <line x1="40" y1="96" x2="85" y2="96" stroke="#d4ccc4" stroke-width="0.6"/>
          <!-- 右下點點 -->
          <circle cx="295" cy="340" r="2.5" fill="#d0c8be"/>
          <circle cx="310" cy="355" r="1.8" fill="#d8d0c6"/>
          <circle cx="280" cy="358" r="1.5" fill="#d8d0c6"/>
          <!-- 左上小十字 -->
          <line x1="55" y1="160" x2="55" y2="172" stroke="#ccc4ba" stroke-width="0.8" stroke-linecap="round"/>
          <line x1="49" y1="166" x2="61" y2="166" stroke="#ccc4ba" stroke-width="0.8" stroke-linecap="round"/>
          <!-- 弧線筆觸 -->
          <path d="M60 320 Q120 290 160 310" stroke="#ccc4ba" stroke-width="0.8" stroke-linecap="round" fill="none"/>
          <path d="M240 350 Q290 320 320 330" stroke="#ccc4ba" stroke-width="0.8" stroke-linecap="round" fill="none"/>
        </svg>
      </div>
    </section>

    <!-- 跑馬燈 -->
    <section class="marquee-wrap" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="n in 3" :key="n" class="marquee-text">
          寵物 &nbsp;·&nbsp; 人像 &nbsp;·&nbsp; 情侶 &nbsp;·&nbsp; 家人 &nbsp;·&nbsp; 紀念日 &nbsp;·&nbsp; 禮物 &nbsp;·&nbsp; 收藏 &nbsp;·&nbsp; Custom Oil Painting &nbsp;·&nbsp;
        </span>
      </div>
    </section>

    <!-- 精選作品 -->
    <section class="featured">
      <div class="featured-header">
        <h2 class="featured-title">精選作品</h2>
        <RouterLink to="/portfolio" class="featured-more">查看全部 →</RouterLink>
      </div>
      <div class="featured-grid">
        <RouterLink
          v-for="artwork in featuredArtworks"
          :key="artwork.id"
          :to="{ name: 'artwork', params: { id: artwork.id } }"
          class="featured-card"
        >
          <div class="featured-img-wrap">
            <img v-if="artwork.image" :src="artwork.image" :alt="artwork.title" class="featured-img" />
            <div v-else class="featured-img-placeholder"></div>
          </div>
          <div class="featured-info">
            <span class="featured-name">{{ artwork.title }}</span>
            <span class="featured-size">{{ artwork.size }}</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- 服務特色 -->
    <section class="features">
      <div v-for="item in features" :key="item.title" class="feature-item">
        <h3 class="feature-title">{{ item.title }}</h3>
        <p class="feature-desc">{{ item.desc }}</p>
      </div>
    </section>

    <!-- CTA 底部 -->
    <section class="cta-section">
      <p class="cta-sub">那些重要的畫面，依然能被好好留下來</p>
      <h2 class="cta-title">私訊照片＋尺寸<br />我來幫你評估與報價</h2>
      <RouterLink to="/contact" class="btn-primary">私訊訂製</RouterLink>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { artworks } from '../data/artworks.js'

const featuredArtworks = computed(() => {
  const candy = artworks.find(a => a.id === 4)
  const rest = artworks.filter(a => a.id !== 4).slice(0, 2)
  return [candy, ...rest]
})

const features = [
  {
    title: '選款代畫',
    desc: '從指定賣場挑選款式，私訊我連結，由我代購、畫完後直接寄出，不需要自己買或寄送。'
  },
  {
    title: '照片客製',
    desc: '提供照片由我設計成專屬畫稿，可選擇「代畫」由我完成寄出，或「自己畫」拿到畫材套組親手完成。'
  },
  {
    title: '私訊訂製',
    desc: '傳送商品連結或照片給我，我協助評估與報價，全程由我處理，畫完直接出貨到府。'
  }
]
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding-bottom: 48px;
}

/* ── Hero ── */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 32px;
  padding: 48px 0 16px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-deco {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
}

.deco-svg {
  width: 100%;
  max-width: 320px;
  height: auto;
}

.hero-label {
  font-size: 11px;
  letter-spacing: 0.26em;
  color: var(--color-text-light);
  text-transform: uppercase;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(64px, 8vw, 108px);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1;
  color: var(--color-text);
}

.hero-tagline {
  font-size: 14px;
  line-height: 2;
  color: var(--color-text-light);
  letter-spacing: 0.03em;
}

.hero-divider {
  width: 40px;
  height: 1px;
  background: var(--color-border);
  margin: 4px 0;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.btn-primary {
  display: inline-block;
  background: var(--color-text);
  color: #fff;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: opacity 0.2s;
}

.btn-primary:hover { opacity: 0.75; }

.btn-ghost {
  display: inline-block;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: border-color 0.2s, background 0.2s;
}

.btn-ghost:hover {
  border-color: var(--color-text);
  background: var(--color-hover);
}

/* ── Marquee ── */
.marquee-wrap {
  overflow: hidden;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 13px 0;
}

.marquee-track {
  display: flex;
  animation: marquee 22s linear infinite;
  width: max-content;
}

.marquee-text {
  font-size: 11px;
  letter-spacing: 0.2em;
  color: var(--color-text-light);
  white-space: nowrap;
  padding-right: 40px;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-33.333%); }
}

/* ── Featured ── */
.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
}

.featured-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.06em;
}

.featured-more {
  font-size: 12px;
  color: var(--color-text-light);
  letter-spacing: 0.06em;
  transition: color 0.15s;
}

.featured-more:hover { color: var(--color-text); }

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.featured-card {
  display: block;
  border-radius: 10px;
  overflow: hidden;
  background: var(--color-sidebar);
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.featured-img-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.featured-card:hover .featured-img { transform: scale(1.04); }

.featured-img-placeholder {
  width: 100%;
  height: 100%;
  background: var(--color-border);
}

.featured-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px 12px;
}

.featured-name {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.featured-size {
  font-size: 11px;
  color: var(--color-text-light);
}

/* ── Features ── */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 40px 0;
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 32px;
  border-right: 1px solid var(--color-border);
}

.feature-item:first-child { padding-left: 0; }
.feature-item:last-child  { border-right: none; }

.feature-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.feature-desc {
  font-size: 13px;
  line-height: 1.9;
  color: var(--color-text-light);
}

/* ── CTA ── */
.cta-section {
  text-align: center;
  padding: 72px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
}

.cta-sub {
  font-size: 11px;
  letter-spacing: 0.2em;
  color: var(--color-text-light);
  text-transform: uppercase;
}

.cta-title {
  font-family: var(--font-serif);
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.5;
  max-width: 440px;
}

/* ── RWD ── */
@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .hero-deco {
    display: none;
  }
}

@media (max-width: 700px) {
  .featured-grid { grid-template-columns: repeat(2, 1fr); }
  .features {
    grid-template-columns: 1fr;
    padding: 32px 0;
    gap: 28px;
  }
  .feature-item {
    padding: 0;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 28px;
  }
  .feature-item:last-child { border-bottom: none; padding-bottom: 0; }
}

@media (max-width: 480px) {
  .home { gap: 48px; }
  .hero { padding-top: 24px; }
  .featured-grid { grid-template-columns: 1fr; }
}
</style>
