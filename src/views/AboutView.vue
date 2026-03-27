<template>
  <div class="about">
    <div class="about-header">
      <div class="about-avatar-wrap">
        <img src="/images/headshot.jpg" alt="YiMui" class="about-avatar" />
      </div>
      <div class="about-intro">
        <h1 class="about-name">YiMui</h1>
        <p class="about-en">客製化數字油畫</p>
        <p class="about-bio">
          從一張照片開始，慢慢填進顏色，最後變成一幅可以被保存的回憶。<br /><br />
          不管會不會畫畫，都能擁有一幅屬於自己的作品。<br />
          你可以選擇親手一筆一筆完成，也可以交給我幫你畫成一幅完整的油畫。<br /><br />
          在忙碌的生活裡，那些重要的畫面，依然能被好好留下來。
        </p>
        <div class="about-links">
          <a href="https://www.instagram.com/yii.mui?igsh=MWJ3dHViMDIxcWp5ZQ==" target="_blank" rel="noopener" class="about-social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            @yii.mui
          </a>
          <RouterLink to="/contact" class="about-social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            聯絡我
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- 服務項目 -->
    <section class="services">
      <h2 class="section-title">服務內容</h2>
      <p class="section-sub">What I Offer</p>
      <div class="service-grid">
        <div class="service-card">
          <div class="service-tag">指定賣場選款</div>
          <h3 class="service-name">選款代畫</h3>
          <p class="service-desc">
            前往指定賣場挑選喜歡的款式，<br />
            私訊我商品連結，<br />
            由我代為購買、畫完後直接寄給你。
          </p>
          <ul class="service-list">
            <li>不需要自己買商品</li>
            <li>不需要寄送給我</li>
            <li>畫完直接出貨到府</li>
          </ul>
          <a href="https://tw.shp.ee/Ypd5hsNs" target="_blank" rel="noopener" class="service-shop-btn">前往賣場選款式 →</a>
        </div>
        <div class="service-card">
          <div class="service-tag">照片客製</div>
          <h3 class="service-name">客製畫作</h3>
          <p class="service-desc">
            提供你的照片，由我設計成專屬畫稿。<br />
            寵物、人像、情侶、家人都可以，<br />
            再選擇你想要的完成方式。
          </p>
          <div class="service-options">
            <div class="service-option">
              <span class="option-label">代畫</span>
              <span class="option-desc">由我畫完後直接寄出</span>
            </div>
            <div class="service-option">
              <span class="option-label">自己畫</span>
              <span class="option-desc">提供畫材套組，親手完成屬於你的作品</span>
            </div>
          </div>
        </div>
      </div>
      <div class="service-subjects">
        <span class="subject-tag" v-for="s in subjects" :key="s">{{ s }}</span>
      </div>
    </section>

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
            <a v-if="step.link" :href="step.link" target="_blank" rel="noopener" class="step-link">前往賣場 →</a>
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
    title: '私訊我',
    desc: '選款代畫：傳送賣場商品連結。照片客製：傳送照片與希望尺寸。',
    link: 'https://tw.shp.ee/Ypd5hsNs'
  },
  {
    title: '評估報價',
    desc: '我協助評估內容並提供報價，說明呈現效果後由你決定是否製作。'
  },
  {
    title: '確認付訂金',
    desc: '確認訂單後支付訂金，訂單一旦確認即不再修改內容。'
  },
  {
    title: '開始製作',
    desc: '依選擇服務進行——自己畫組準備畫材寄出；代畫組由我完成整幅作品。'
  },
  {
    title: '完成出貨',
    desc: '付尾款後出貨，全程由我處理，無需自行購買或寄送材料。'
  }
]

const subjects = ['寵物', '人像', '情侶', '家人', '紀念日', '禮物', '收藏']

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

/* 服務項目 */
.services {
  margin-bottom: 64px;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.service-card {
  background: var(--color-sidebar);
  border-radius: 12px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
}

.service-tag {
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 3px 12px;
  width: fit-content;
}

.service-name {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.service-desc {
  font-size: 13px;
  line-height: 1.9;
  color: var(--color-text-light);
}

.service-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.service-list li {
  font-size: 12px;
  color: var(--color-text);
  padding-left: 14px;
  position: relative;
}

.service-list li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--color-text-light);
}

.service-subjects {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.service-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}

.service-option {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 8px 12px;
  background: var(--color-bg);
  border-radius: 8px;
}

.option-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
  letter-spacing: 0.04em;
}

.option-desc {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.6;
}

.service-shop-btn {
  display: inline-block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1px;
  transition: border-color 0.15s;
  width: fit-content;
}

.service-shop-btn:hover {
  border-color: var(--color-text);
}

.step-link {
  display: inline-block;
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-light);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1px;
  transition: color 0.15s, border-color 0.15s;
}

.step-link:hover {
  color: var(--color-text);
  border-color: var(--color-text);
}

.subject-tag {
  font-size: 12px;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 4px 14px;
  letter-spacing: 0.04em;
}

@media (max-width: 600px) {
  .service-grid { grid-template-columns: 1fr; }
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
