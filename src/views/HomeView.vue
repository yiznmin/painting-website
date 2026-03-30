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

    <!-- 服務項目 -->
    <section class="services">
      <div class="services-header">
        <p class="services-label">SERVICES</p>
        <h2 class="services-title">三種方式，都能擁有一幅專屬的畫</h2>
      </div>
      <div class="service-cards">

        <!-- 主推 -->
        <div class="service-card featured">
          <div class="service-badge">主推</div>
          <div class="service-num">01</div>
          <h3 class="service-name">數字油畫代畫</h3>
          <p class="service-tagline">去賣場挑一幅喜歡的<br />傳給我，我幫你畫完寄出</p>
          <ul class="service-points">
            <li>到指定賣場選畫，傳連結就好</li>
            <li>由我代購、代畫，不需要自己寄送</li>
            <li>畫完直接寄到你手上</li>
          </ul>
          <div class="service-tags">
            <span>送禮</span><span>擺設</span><span>紀念</span>
          </div>
          <div class="service-btn-group">
            <a href="https://tw.shp.ee/Ypd5hsNs" target="_blank" rel="noopener" class="service-btn">前往指定賣場</a>
            <RouterLink to="/contact" class="service-btn-ghost">詢問代畫</RouterLink>
          </div>
        </div>

        <!-- 照片客製 -->
        <div class="service-card">
          <div class="service-num">02</div>
          <h3 class="service-name">照片客製</h3>
          <p class="service-tagline">把你的照片<br />變成一幅專屬油畫</p>
          <ul class="service-points">
            <li>提供照片，我設計成專屬畫稿</li>
            <li>可選代畫——由我完成寄出</li>
            <li>可選自己畫——拿材料套組親手完成</li>
          </ul>
          <div class="service-tags">
            <span>寵物</span><span>人像</span><span>情侶</span><span>家人</span>
          </div>
          <RouterLink to="/contact" class="service-btn-ghost">詢問客製</RouterLink>
        </div>

        <!-- 成品 -->
        <div class="service-card">
          <div class="service-num">03</div>
          <h3 class="service-name">成品作品</h3>
          <p class="service-tagline">無需等待<br />直接擁有油畫質感</p>
          <ul class="service-points">
            <li>已完成的油畫作品，可直接購入</li>
            <li>適合臨時送禮或快速佈置空間</li>
            <li>每一幅都是獨一無二的原作</li>
          </ul>
          <div class="service-tags">
            <span>快速到手</span><span>送禮首選</span>
          </div>
          <RouterLink to="/portfolio" class="service-btn-ghost">瀏覽成品</RouterLink>
        </div>

      </div>
    </section>

    <!-- 心理價值 -->
    <section class="value-section">
      <p class="value-quote">這不是買現成的畫</p>
      <p class="value-quote accent">是為了某個人特別準備的</p>
      <p class="value-sub">不知道送什麼禮物的時候，其實可以很簡單——<br />去賣場挑一幅好看的數字油畫，傳給我，我幫你畫完。<br />收到的是一幅完成的畫，不是還要自己動手的材料包。</p>
    </section>

    <!-- CTA 底部 -->
    <section class="cta-section">
      <p class="cta-sub">有送禮需求？想先確認時間？</p>
      <h2 class="cta-title">私訊照片或商品連結<br />我來幫你評估與安排</h2>
      <RouterLink to="/contact" class="btn-primary">立即諮詢</RouterLink>
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

/* ── Services ── */
.services-header {
  text-align: center;
  margin-bottom: 32px;
}

.services-label {
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--color-text-light);
  margin-bottom: 10px;
}

.services-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.service-card {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
}

.service-card.featured {
  border-color: var(--color-text);
  background: var(--color-hover);
}

.service-badge {
  position: absolute;
  top: -11px;
  left: 24px;
  background: var(--color-text);
  color: #fff;
  font-size: 11px;
  padding: 2px 12px;
  border-radius: 20px;
  letter-spacing: 0.08em;
}

.service-num {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--color-text-light);
}

.service-name {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.service-tagline {
  font-size: 13px;
  line-height: 1.8;
  color: var(--color-text-light);
}

.service-points {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-top: 1px solid var(--color-border);
  padding-top: 12px;
}

.service-points li {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.6;
}

.service-points li::before {
  content: '✔ ';
  color: var(--color-text);
  font-size: 10px;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.service-tags span {
  font-size: 11px;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2px 10px;
  letter-spacing: 0.04em;
}

.service-btn {
  display: inline-block;
  background: var(--color-text);
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: opacity 0.2s;
  text-align: center;
}

.service-btn:hover { opacity: 0.75; }

.service-btn-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-btn-ghost {
  display: inline-block;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: border-color 0.2s, background 0.2s;
  text-align: center;
}

.service-btn-ghost:hover {
  border-color: var(--color-text);
  background: var(--color-hover);
}

/* ── Value ── */
.value-section {
  text-align: center;
  padding: 48px 24px;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.value-quote {
  font-family: var(--font-serif);
  font-size: clamp(18px, 2.2vw, 24px);
  font-weight: 400;
  letter-spacing: 0.06em;
  color: var(--color-text-light);
}

.value-quote.accent {
  color: var(--color-text);
}

.value-sub {
  font-size: 13px;
  line-height: 2;
  color: var(--color-text-light);
  margin-top: 8px;
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
  .service-cards { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .home { gap: 48px; }
  .hero { padding-top: 24px; }
  .featured-grid { grid-template-columns: 1fr; }
}
</style>
