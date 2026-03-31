<template>
  <div class="size-guide">
    <h1 class="page-title">尺寸指南</h1>
    <p class="page-subtitle">PAINTING SIZE GUIDE</p>

    <!-- 等比例框架視覺 -->
    <section class="section">
      <h2 class="section-title">尺寸比例一眼看清</h2>
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

    <!-- 日常生活對比 -->
    <section class="section">
      <h2 class="section-title">日常生活尺寸對比</h2>
      <p class="section-sub">EVERYDAY SIZE COMPARISON</p>

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
      <p class="section-sub">ON YOUR WALL</p>

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

    <!-- CTA -->
    <div class="cta-block">
      <p>確定尺寸了嗎？</p>
      <RouterLink to="/pricing" class="cta-btn-ghost">查看報價</RouterLink>
      <RouterLink to="/contact" class="cta-btn">立即諮詢</RouterLink>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.size-guide {
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
  margin-bottom: 56px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 6px;
  letter-spacing: 0.04em;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);
}

.section-sub {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--color-text-light);
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

.size-col-name  { font-size: 13px; font-weight: 500; letter-spacing: 0.04em; }
.size-col-approx { font-size: 11px; color: var(--color-text-light); }
.size-col-place  { font-size: 11px; color: var(--color-text-light); }

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
  gap: 20px;
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

.everyday-icon { font-size: 24px; }

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

.wall-label { font-size: 12px; font-weight: 500; color: var(--color-text); }
.wall-name  { font-size: 11px; color: var(--color-text-light); }

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
  gap: 12px;
}

.cta-block p {
  font-size: 14px;
  color: var(--color-text-light);
  margin: 0;
  margin-right: 8px;
}

.cta-btn {
  background: var(--color-text);
  color: #fff;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.cta-btn:hover { opacity: 0.75; }

.cta-btn-ghost {
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: border-color 0.2s;
  white-space: nowrap;
}

.cta-btn-ghost:hover { border-color: var(--color-text); }

@media (max-width: 600px) {
  .everyday-row { flex-wrap: wrap; }
  .everyday-desc { margin-left: 0; border-left: none; padding-left: 0; border-top: 1px solid var(--color-border); padding-top: 10px; max-width: 100%; }
  .cta-block { flex-wrap: wrap; }
}
</style>
