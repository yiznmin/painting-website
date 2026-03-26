<template>
  <div class="about">
    <div class="about-header">
      <div class="about-avatar-wrap">
        <img v-if="false" src="" alt="YiMui" class="about-avatar" />
        <div class="about-avatar-placeholder"></div>
      </div>
      <div class="about-intro">
        <h1 class="about-name">YiMui</h1>
        <p class="about-en">Digital Oil Painting Artist</p>
        <p class="about-bio">
          從一張照片到一幅畫布，我將你珍貴的瞬間轉化為數位油畫。
          每一筆都是對細節的堅持，每一幅畫都是獨一無二的故事。
          不管是心愛的寵物、人像紀念，還是喜歡的風景，
          我都能以手繪質感為你留存最美的記憶。
        </p>
        <div class="about-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="about-social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            @yimui
          </a>
          <RouterLink to="/contact" class="about-social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            聯絡我
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- 製作流程 -->
    <section class="process">
      <h2 class="section-title">製作流程</h2>
      <p class="section-sub">How It Works</p>
      <div class="steps">
        <div v-for="(step, i) in steps" :key="i" class="step">
          <div class="step-num">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
          <div v-if="i < steps.length - 1" class="step-arrow">→</div>
        </div>
      </div>
    </section>

    <!-- 價格說明 -->
    <section class="pricing">
      <h2 class="section-title">價格參考</h2>
      <p class="section-sub">Pricing Guide</p>
      <div class="pricing-grid">
        <div v-for="tier in pricingTiers" :key="tier.size" class="pricing-card">
          <div class="pricing-size">{{ tier.size }} cm</div>
          <div class="pricing-colors">{{ tier.colors }}</div>
          <div class="pricing-difficulty">{{ tier.difficulty }}</div>
          <div class="pricing-price">{{ tier.price }}</div>
          <RouterLink :to="{ name: 'contact', query: { size: tier.size } }" class="pricing-cta">
            詢價
          </RouterLink>
        </div>
      </div>
      <p class="pricing-note">* 實際報價依細節調整，歡迎諮詢。</p>
    </section>
  </div>
</template>

<script setup>
const steps = [
  {
    title: '送出諮詢',
    desc: '填寫諮詢表單，附上參考圖片與尺寸需求。'
  },
  {
    title: '確認報價',
    desc: '我會在 1–2 個工作日內回覆詳細報價與時程。'
  },
  {
    title: '付訂金',
    desc: '確認後付 50% 訂金，正式開始製作。'
  },
  {
    title: '草稿確認',
    desc: '完成草稿後請您確認構圖與色調，可提出修改意見。'
  },
  {
    title: '完成付款',
    desc: '確認滿意後付尾款，作品以精美包裝寄出。'
  }
]

const pricingTiers = [
  { size: '30×40', colors: '20 色', difficulty: '簡易', price: '詢價' },
  { size: '40×40', colors: '24 色', difficulty: '簡易', price: '詢價' },
  { size: '40×50', colors: '30 色', difficulty: '中等', price: '詢價' },
  { size: '40×70', colors: '70 色', difficulty: '複雜', price: '詢價' }
]
</script>

<style scoped>
.about {
  max-width: 820px;
}

.about-header {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 64px;
}

.about-avatar-wrap {
  flex-shrink: 0;
}

.about-avatar-placeholder {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--color-border);
}

.about-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
}

.about-intro {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-name {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.about-en {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--color-text-light);
}

.about-bio {
  font-size: 14px;
  line-height: 1.9;
  color: var(--color-text);
  max-width: 480px;
}

.about-links {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}

.about-social {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 5px 14px;
  transition: all 0.18s;
}

.about-social:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}

/* 共用 section */
.section-title {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}

.section-sub {
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--color-text-light);
  margin-bottom: 32px;
}

/* 製作流程 */
.process {
  margin-bottom: 64px;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  align-items: flex-start;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.step-num {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 400;
  color: var(--color-border);
  line-height: 1;
  flex-shrink: 0;
  min-width: 36px;
}

.step-content {
  max-width: 140px;
  padding-top: 2px;
}

.step-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  letter-spacing: 0.02em;
}

.step-desc {
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-light);
}

.step-arrow {
  font-size: 18px;
  color: var(--color-border);
  padding: 0 12px;
  padding-top: 4px;
  flex-shrink: 0;
}

@media (max-width: 700px) {
  .steps {
    flex-direction: column;
    gap: 20px;
  }
  .step-arrow {
    display: none;
  }
  .step-content {
    max-width: 100%;
  }
}

/* 價格 */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.pricing-card {
  background: var(--color-sidebar);
  border-radius: 10px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
}

.pricing-size {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.pricing-colors,
.pricing-difficulty {
  font-size: 12px;
  color: var(--color-text-light);
}

.pricing-price {
  font-size: 15px;
  font-weight: 600;
  margin-top: 8px;
  letter-spacing: 0.02em;
}

.pricing-cta {
  margin-top: 12px;
  display: inline-block;
  font-size: 12px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 4px 14px;
  color: var(--color-text-light);
  transition: all 0.18s;
  text-align: center;
}

.pricing-cta:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}

.pricing-note {
  font-size: 12px;
  color: var(--color-text-light);
}

@media (max-width: 600px) {
  .about-header {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
