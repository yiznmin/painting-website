<template>
  <div class="services">
    <h1 class="page-title">服務項目</h1>
    <p class="page-subtitle">Services</p>

    <!-- 一句話總覽 -->
    <div class="intro">
      <p>提供三種方式，讓你以最適合自己的方式擁有一幅油畫。</p>
      <p class="intro-sub">不管是送禮、紀念、還是佈置空間，都有對應的選擇。</p>
    </div>

    <!-- 服務一：代畫 -->
    <section class="service-block featured">
      <div class="service-tag">主推服務</div>
      <div class="service-header">
        <span class="service-num">01</span>
        <h2 class="service-title">數字油畫代畫</h2>
      </div>
      <p class="service-desc">
        去指定賣場挑一幅喜歡的數字油畫，傳給我連結，我幫你代購、代畫，完成後直接寄到你手上。<br/>
        不需要自己買材料、不需要自己畫、也不需要跑郵局，全程交給我處理。
      </p>
      <div class="service-highlight">
        <p>收到的是一幅<strong>完成的畫</strong>，不是還要自己動手的材料包</p>
        <p>看起來更用心，也更有質感</p>
      </div>
      <ul class="service-steps">
        <li><span class="step-num">1</span>前往指定賣場挑選喜歡的款式</li>
        <li><span class="step-num">2</span>把商品連結傳給我</li>
        <li><span class="step-num">3</span>確認報價後付訂金</li>
        <li><span class="step-num">4</span>我代購、代畫，完成後寄出</li>
      </ul>
      <div class="service-suitable">
        <span class="suitable-label">適合：</span>
        <span>送禮</span><span>節日紀念</span><span>空間佈置</span><span>收藏</span>
      </div>
      <div class="service-actions">
        <a href="https://tw.shp.ee/Ypd5hsNs" target="_blank" rel="noopener" class="btn-primary">前往指定賣場</a>
        <RouterLink to="/portfolio" class="btn-ghost">先看成果再決定</RouterLink>
        <RouterLink to="/contact" class="btn-ghost">詢問代畫</RouterLink>
      </div>
    </section>

    <!-- 服務二：照片客製 -->
    <section class="service-block">
      <div class="service-header">
        <span class="service-num">02</span>
        <h2 class="service-title">照片客製油畫</h2>
      </div>
      <p class="service-desc">
        提供你的照片，我設計成專屬畫稿。完成方式有兩種，你可以選擇最適合自己的。
      </p>

      <div class="two-options">
        <div class="option">
          <div class="option-name">代畫完成</div>
          <p class="option-desc">由我完成整幅畫，畫完直接寄到你手上。適合想要成品但不想自己畫的人。</p>
        </div>
        <div class="option">
          <div class="option-name">自己畫</div>
          <p class="option-desc">我提供完整畫材套組（畫布、顏料、畫筆、參考圖），你按照數字填色完成。不需要任何繪畫基礎，完成後是獨一無二的作品。</p>
        </div>
      </div>

      <div class="service-suitable">
        <span class="suitable-label">適合主題：</span>
        <span>寵物</span><span>人像</span><span>情侶</span><span>家人</span><span>紀念日</span>
      </div>
      <div class="service-actions">
        <RouterLink to="/contact" class="btn-primary">詢問客製</RouterLink>
        <RouterLink to="/pricing" class="btn-ghost">查看報價</RouterLink>
      </div>
    </section>

    <!-- 服務三：成品 -->
    <section class="service-block">
      <div class="service-header">
        <span class="service-num">03</span>
        <h2 class="service-title">成品作品選購</h2>
      </div>
      <p class="service-desc">
        已完成的油畫作品，可直接購入。無需等待製作時間，適合臨時送禮或快速佈置空間。每一幅都是獨一無二的原作，尚未售出的作品價格可議。
      </p>
      <div class="service-suitable">
        <span class="suitable-label">適合：</span>
        <span>快速送禮</span><span>空間佈置</span><span>收藏原作</span>
      </div>
      <div class="service-actions">
        <RouterLink to="/portfolio" class="btn-primary">瀏覽成品</RouterLink>
        <RouterLink to="/contact" class="btn-ghost">私訊詢問價格</RouterLink>
      </div>
    </section>

    <!-- 訂製流程 -->
    <section class="flow-section">
      <h2 class="flow-title">訂製流程</h2>
      <div class="flow-steps">
        <div class="flow-step" v-for="step in flow" :key="step.label">
          <div class="flow-icon">{{ step.icon }}</div>
          <div class="flow-label">{{ step.label }}</div>
          <div class="flow-desc">{{ step.desc }}</div>
        </div>
      </div>
      <p class="flow-note">確認訂單後不再修改內容，因此會在確認前充分討論細節。</p>
    </section>

    <!-- CTA -->
    <div class="cta-block">
      <p>有任何問題都可以先私訊詢問</p>
      <RouterLink to="/contact" class="btn-primary">立即諮詢</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '../composables/useSeo.js'

useSeo({
  title: '服務項目',
  description: '提供數字油畫代畫、照片客製油畫、成品作品選購三種服務。去賣場挑畫傳給我代畫、或提供照片客製專屬油畫，適合送禮、紀念、佈置空間。'
})

const flow = [
  { icon: '💬', label: '私訊諮詢', desc: '傳照片或連結給我評估' },
  { icon: '💰', label: '確認報價', desc: '提供詳細報價說明' },
  { icon: '✅', label: '付訂金', desc: '確認後付訂金，開始製作' },
  { icon: '🎨', label: '製作中', desc: '約 10～14 天完成' },
  { icon: '📦', label: '寄出', desc: '畫完直接寄到你手上' },
]
</script>

<style scoped>
.services {
  max-width: 680px;
}

.page-title {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 4px;
}

.page-subtitle {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--color-text-light);
  margin-bottom: 32px;
}

.intro {
  margin-bottom: 48px;
  border-left: 3px solid var(--color-border);
  padding-left: 16px;
}

.intro p {
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
}

.intro-sub {
  font-size: 13px !important;
  color: var(--color-text-light);
  margin-top: 6px !important;
}

/* 服務區塊 */
.service-block {
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-block.featured {
  border-color: var(--color-text);
  background: var(--color-hover);
}

.service-tag {
  position: absolute;
  top: -11px;
  left: 24px;
  background: var(--color-text);
  color: #fff;
  font-size: 11px;
  padding: 2px 14px;
  border-radius: 20px;
  letter-spacing: 0.08em;
}

.service-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.service-num {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2px 10px;
}

.service-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.service-desc {
  font-size: 14px;
  line-height: 1.9;
  color: var(--color-text-light);
  margin: 0;
}

.service-highlight {
  background: #fff;
  border-radius: 10px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid var(--color-border);
}

.service-highlight p {
  font-size: 13px;
  line-height: 1.7;
  margin: 0;
  color: var(--color-text-light);
}

.service-highlight strong {
  color: var(--color-text);
}

/* 步驟 */
.service-steps {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-steps li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--color-text-light);
}

.step-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--color-text);
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* 適合標籤 */
.service-suitable {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.suitable-label {
  color: var(--color-text-light);
  font-size: 12px;
}

.service-suitable span:not(.suitable-label) {
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2px 10px;
  color: var(--color-text-light);
  font-size: 11px;
}

/* 兩種選項 */
.two-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.option {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 16px;
}

.option-name {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
}

.option-desc {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin: 0;
}

/* 按鈕 */
.service-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.btn-primary {
  display: inline-block;
  background: var(--color-text);
  color: #fff;
  padding: 10px 22px;
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
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: border-color 0.2s, background 0.2s;
}

.btn-ghost:hover {
  border-color: var(--color-text);
  background: var(--color-hover);
}

/* 訂製流程 */
.flow-section {
  margin-top: 16px;
  border-top: 1px solid var(--color-border);
  padding-top: 40px;
}

.flow-title {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 28px;
  letter-spacing: 0.04em;
}

.flow-steps {
  display: flex;
  gap: 0;
  position: relative;
  margin-bottom: 20px;
}

.flow-steps::before {
  content: '';
  position: absolute;
  top: 22px;
  left: 22px;
  right: 22px;
  height: 1px;
  background: var(--color-border);
  z-index: 0;
}

.flow-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.flow-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.flow-label {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.flow-desc {
  font-size: 11px;
  color: var(--color-text-light);
  line-height: 1.5;
}

.flow-note {
  font-size: 12px;
  color: var(--color-text-light);
  background: var(--color-hover);
  border-radius: 8px;
  padding: 12px 16px;
}

/* CTA */
.cta-block {
  border-top: 1px solid var(--color-border);
  padding-top: 36px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.cta-block p {
  font-size: 14px;
  color: var(--color-text-light);
  margin: 0;
}

@media (max-width: 600px) {
  .service-block { padding: 24px 20px; }
  .two-options { grid-template-columns: 1fr; }
  .flow-steps { flex-direction: column; gap: 12px; }
  .flow-steps::before { display: none; }
  .flow-step { flex-direction: row; text-align: left; gap: 12px; }
  .cta-block { flex-direction: column; align-items: flex-start; }
}
</style>
