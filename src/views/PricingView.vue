<template>
  <div class="pricing">
    <h1 class="page-title">報價說明</h1>
    <p class="page-subtitle">Pricing / Custom Order</p>

    <!-- 方案 -->
    <section class="section">
      <h2 class="section-title">畫作方案</h2>
      <div class="plans">
        <div class="plan-card" v-for="plan in plans" :key="plan.name" :class="{ featured: plan.featured }">
          <div v-if="plan.featured" class="badge">主推</div>
          <div class="plan-name">{{ plan.name }}</div>
          <div class="plan-colors">{{ plan.colors }}</div>
          <ul class="plan-features">
            <li v-for="f in plan.features" :key="f">{{ f }}</li>
          </ul>
          <div class="plan-price">{{ plan.price }}</div>
        </div>
      </div>
    </section>

    <!-- 尺寸與價格說明 -->
    <section class="section">
      <h2 class="section-title">尺寸與價格</h2>
      <div class="info-block">
        <div class="info-row">
          <span class="info-label">常見尺寸</span>
          <span>30 × 40 cm</span>
        </div>
        <div class="info-row">
          <span class="info-label">價格區間</span>
          <span>約 2000 ～ 3000 元</span>
        </div>
      </div>
      <p class="note">實際報價會依以下因素微調：</p>
      <ul class="factor-list">
        <li>人物 / 主體數量</li>
        <li>細節與背景複雜度</li>
        <li>畫面精緻程度</li>
      </ul>
      <div class="cta-note">
        📩 提供照片後我會先幫你評估報價，再決定是否製作
      </div>
    </section>

    <!-- 製作時間 -->
    <section class="section">
      <h2 class="section-title">製作時間</h2>
      <div class="info-block">
        <div class="info-row">
          <span class="info-label">基本工期</span>
          <span>約 10 ～ 14 天</span>
        </div>
      </div>
      <p class="note">有指定日期或急件需求，請提前告知，我會幫您安排。</p>
    </section>

    <!-- 案例 -->
    <section class="section">
      <h2 class="section-title">報價案例參考</h2>
      <div class="cases">
        <div class="case-card" v-for="c in cases" :key="c.title">
          <div class="case-title">{{ c.title }}</div>
          <div class="case-meta">
            <span>📏 {{ c.size }}</span>
            <span>🎨 {{ c.style }}</span>
            <span>🕒 {{ c.time }}</span>
            <span>💰 {{ c.price }}</span>
          </div>
          <p class="case-desc">{{ c.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 尺寸指南 -->
    <section class="section">
      <h2 class="section-title">尺寸指南</h2>
      <p class="section-subtitle">PAINTING SIZE GUIDE</p>

      <!-- 等比例框架視覺 -->
      <div class="size-visual">
        <div v-for="s in sizes" :key="s.label" class="size-col">
          <div class="size-frame-wrap">
            <div class="size-frame" :style="{ width: s.w + 'px', height: s.h + 'px' }">
              <span class="size-frame-label">{{ s.label }}</span>
              <span class="size-frame-unit">cm</span>
            </div>
          </div>
          <div class="size-col-name">{{ s.name }}</div>
          <div class="size-col-approx">{{ s.approx }}</div>
          <div class="size-col-place">{{ s.place }}</div>
        </div>
      </div>

      <div class="size-a4-note">
        <span class="size-a4-ref" :style="{ width: '63px', height: '89px' }">A4<br/>21×29.7</span>
        <span class="size-a4-text">← A4 紙張作為參考比例，上方畫框皆為等比例縮放</span>
      </div>

      <div class="size-tip">
        最簡單的方式：拿一張 A4 紙貼在牆上感受一下<br/>
        30×40 ≈ 1.3 張 A4 ｜ 40×50 ≈ 2.3 張 A4 ｜ 40×70 ≈ 3.2 張 A4
      </div>
    </section>

    <!-- 日常生活尺寸對比 -->
    <section class="section">
      <h2 class="section-title">日常生活尺寸對比</h2>
      <p class="section-subtitle">EVERYDAY SIZE COMPARISON</p>

      <div class="everyday-list">
        <div v-for="s in sizes" :key="s.label" class="everyday-row">
          <div class="everyday-frame-wrap">
            <div class="everyday-frame" :style="{ width: s.w + 'px', height: s.h + 'px' }">
              <span style="font-size:12px;font-weight:500;">{{ s.label }}</span>
            </div>
          </div>
          <div class="everyday-approx-sign">≈</div>
          <div class="everyday-items">
            <div v-for="item in s.everyday" :key="item.icon" class="everyday-item">
              <span class="everyday-icon">{{ item.icon }}</span>
              <span class="everyday-text">{{ item.text }}</span>
            </div>
          </div>
          <div class="everyday-desc">{{ s.everydayDesc }}</div>
        </div>
      </div>
    </section>

    <!-- 掛牆感受 -->
    <section class="section">
      <h2 class="section-title">掛在牆上的感覺</h2>
      <p class="section-subtitle">ON YOUR WALL</p>

      <div class="wall-frames">
        <div v-for="s in sizes" :key="s.label" class="wall-col">
          <div class="wall-frame" :style="{ width: s.w * 0.75 + 'px', height: s.h * 0.75 + 'px' }"></div>
          <div class="wall-label">{{ s.label }}</div>
          <div class="wall-name">{{ s.name }}</div>
        </div>
      </div>

      <div class="wall-notes">
        <p>沙發寬度通常 180～240 cm，掛一幅 40×70 剛好是沙發的 1/3～1/4 寬，比例很舒服。</p>
        <p>也可以掛 2～3 幅小尺寸組合牆面！</p>
      </div>
    </section>

    <!-- 聯絡 CTA -->
    <div class="cta-block">
      <p>想了解更多或提供照片詢價？</p>
      <RouterLink to="/contact" class="cta-btn">前往諮詢</RouterLink>
    </div>
  </div>
</template>

<script setup>
const plans = [
  {
    name: '基本款',
    colors: '23 色',
    features: ['簡約風格', '適合單人 / 背景簡單'],
    price: '約 2000 ～ 2400 元',
    featured: false
  },
  {
    name: '精緻款',
    colors: '30 ～ 36 色',
    features: ['細節更豐富', '人物更立體'],
    price: '約 2600 ～ 3000 元',
    featured: true
  },
  {
    name: '高階款',
    colors: '40 色以上',
    features: ['高還原度', '收藏等級'],
    price: '3000 元以上',
    featured: false
  }
]

// 尺寸資料（等比例：1cm = 3px）
const sizes = [
  {
    label: '30×40', w: 90, h: 120,
    name: '小巧精緻', approx: '≈ A3 紙張大小', place: '書桌、床頭櫃',
    everyday: [
      { icon: '🗞️', text: '一張 A3 紙\n29.7×42cm' },
      { icon: '🛍️', text: '購物袋\n差不多大' },
      { icon: '📚', text: '兩本雜誌\n並排寬度' }
    ],
    everydayDesc: '適合放在書桌、床頭櫃、小角落妝點空間'
  },
  {
    label: '40×50', w: 120, h: 150,
    name: '經典百搭', approx: '≈ 筆電螢幕大小', place: '客廳、玄關',
    everyday: [
      { icon: '💻', text: '15吋筆電\n打開的樣子' },
      { icon: '🪟', text: '小窗戶\n差不多大小' },
      { icon: '🎒', text: '一個背包\n正面面積' }
    ],
    everydayDesc: '最熱門尺寸！客廳、玄關、臥室都很適合'
  },
  {
    label: '40×70', w: 120, h: 210,
    name: '大器質感', approx: '≈ 半面門的高度', place: '沙發上方、走廊',
    everyday: [
      { icon: '🚪', text: '門的 1/3\n高度' },
      { icon: '🧘', text: '瑜伽墊\n寬度×1/3長' },
      { icon: '🖥️', text: '27吋螢幕\n差不多高度' }
    ],
    everydayDesc: '氣勢十足！沙發上方、走廊、玄關主視覺'
  }
]

const cases = [
  {
    title: '寵物客製油畫',
    size: '30 × 40 cm',
    style: '簡約（23 色）',
    time: '約 10 天',
    price: '2200 元',
    desc: '將日常照片轉換成溫柔的油畫風格，適合做紀念或送禮。'
  },
  {
    title: '人物紀念畫',
    size: '30 × 40 cm',
    style: '精緻（30+ 色）',
    time: '約 14 天',
    price: '2800 元',
    desc: '保留人物細節與情感，完成後更有收藏價值。'
  }
]
</script>

<style scoped>
.pricing {
  max-width: 640px;
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
  margin-bottom: 48px;
}

.section {
  margin-bottom: 48px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  letter-spacing: 0.04em;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);
}

/* 方案卡片 */
.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.plan-card {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #fff;
}

.plan-card.featured {
  border-color: var(--color-text);
  background: var(--color-hover);
}

.badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-text);
  color: #fff;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 20px;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

.plan-name {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.plan-colors {
  font-size: 12px;
  color: var(--color-text-light);
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 4px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.plan-features li {
  font-size: 12px;
  color: var(--color-text-light);
}

.plan-features li::before {
  content: '· ';
}

.plan-price {
  font-size: 14px;
  font-weight: 500;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid var(--color-border);
}

/* 資訊區塊 */
.info-block {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
}

.info-row {
  display: flex;
  padding: 12px 16px;
  font-size: 14px;
  gap: 16px;
  border-bottom: 1px solid var(--color-border);
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  color: var(--color-text-light);
  width: 80px;
  flex-shrink: 0;
  font-size: 13px;
}

.note {
  font-size: 13px;
  color: var(--color-text-light);
  margin-bottom: 8px;
}

.factor-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.factor-list li {
  font-size: 13px;
  color: var(--color-text-light);
  padding-left: 4px;
}

.factor-list li::before {
  content: '· ';
}

.cta-note {
  background: var(--color-hover);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 13px;
  color: var(--color-text);
}

/* 案例 */
.cases {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.case-card {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
}

.case-title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
}

.case-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 13px;
  color: var(--color-text-light);
  margin-bottom: 10px;
}

.case-desc {
  font-size: 13px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin: 0;
}

.section-subtitle {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--color-text-light);
  margin-top: -14px;
  margin-bottom: 24px;
}

/* 尺寸視覺 */
.size-visual {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 32px;
  padding: 24px 0 20px;
}

.size-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.size-frame-wrap {
  display: flex;
  align-items: flex-end;
  height: 220px;
}

.size-frame {
  border: 1.5px solid #c8b89a;
  border-radius: 2px;
  background: #faf8f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  box-shadow: 2px 2px 0 #e8ddd0, inset 0 0 0 3px #f5f0ea;
}

.size-frame-label {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--color-text);
}

.size-frame-unit {
  font-size: 10px;
  color: var(--color-text-light);
}

.size-col-name {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.size-col-approx {
  font-size: 11px;
  color: var(--color-text-light);
}

.size-col-place {
  font-size: 11px;
  color: var(--color-text-light);
}

.size-a4-note {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px dashed var(--color-border);
  border-bottom: 1px dashed var(--color-border);
  margin: 16px 0;
}

.size-a4-ref {
  border: 1px dashed #aaa;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 9px;
  color: var(--color-text-light);
  line-height: 1.4;
  flex-shrink: 0;
}

.size-a4-text {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.6;
}

.size-tip {
  background: var(--color-hover);
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.9;
  text-align: center;
}

/* 日常對比 */
.everyday-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.everyday-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.everyday-frame-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  flex-shrink: 0;
}

.everyday-frame {
  border: 1.5px solid #c8b89a;
  background: #faf8f5;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 0 #e8ddd0, inset 0 0 0 3px #f5f0ea;
  border-radius: 2px;
}

.everyday-approx-sign {
  font-size: 20px;
  color: var(--color-text-light);
  flex-shrink: 0;
}

.everyday-items {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.everyday-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}

.everyday-icon {
  font-size: 24px;
}

.everyday-text {
  font-size: 10px;
  color: var(--color-text-light);
  line-height: 1.5;
  white-space: pre-line;
}

.everyday-desc {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.7;
  border-left: 2px solid var(--color-border);
  padding-left: 12px;
  margin-left: auto;
  max-width: 120px;
}

/* 掛牆 */
.wall-frames {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 32px;
  padding: 24px 0 20px;
}

.wall-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.wall-frame {
  border: 1.5px solid #c8b89a;
  background: #faf8f5;
  border-radius: 2px;
  box-shadow: 2px 2px 0 #e8ddd0, inset 0 0 0 2px #f5f0ea;
}

.wall-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text);
}

.wall-name {
  font-size: 11px;
  color: var(--color-text-light);
}

.wall-notes {
  background: var(--color-hover);
  border-radius: 8px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wall-notes p {
  font-size: 13px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin: 0;
}

/* CTA */
.cta-block {
  border-top: 1px solid var(--color-border);
  padding-top: 36px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.cta-block p {
  font-size: 14px;
  color: var(--color-text-light);
  margin: 0;
}

.cta-btn {
  background: var(--color-text);
  color: #fff;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 14px;
  letter-spacing: 0.06em;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.cta-btn:hover {
  opacity: 0.75;
}

@media (max-width: 600px) {
  .plans {
    grid-template-columns: 1fr;
  }

  .cta-block {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
