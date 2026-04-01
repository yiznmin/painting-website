<template>
  <div class="why">
    <p class="page-label">WHY DIGITAL OIL PAINTING</p>
    <h1 class="page-title">為什麼越來越多人<br/>選擇數字油畫？</h1>
    <p class="page-desc">不是因為便宜，而是因為它能做到的事，其他方式很難替代。</p>

    <!-- 5 個優點 -->
    <div class="points">
      <div class="point" v-for="(p, i) in points" :key="i">
        <div class="point-left">
          <div class="point-num">0{{ i + 1 }}</div>
          <div class="point-line"></div>
        </div>
        <div class="point-content">
          <h2 class="point-title">{{ p.title }}</h2>
          <p class="point-desc">{{ p.desc }}</p>
        </div>
      </div>
    </div>

    <!-- 對比圖 -->
    <section class="compare-section">
      <p class="compare-label">實際成品對比</p>
      <div class="compare-grid">
        <div class="compare-img-wrap" @click="openLightbox('/images/outdoor_.jpg', '整體擺設效果')">
          <img :src="'/images/outdoor_.jpg'" alt="數字油畫整體擺設效果" class="compare-img" />
          <div class="compare-zoom-hint">點擊放大</div>
          <span class="compare-caption">整體擺設效果</span>
        </div>
        <div class="compare-img-wrap" @click="openLightbox('/images/detail1.jpg', '細節近拍')">
          <img :src="'/images/detail1.jpg'" alt="數字油畫細節近拍" class="compare-img" />
          <div class="compare-zoom-hint">點擊放大</div>
          <span class="compare-caption">細節近拍</span>
        </div>
        <div class="compare-img-wrap" @click="openLightbox('/images/detail2jpg.jpg', '筆觸質感')">
          <img :src="'/images/detail2jpg.jpg'" alt="數字油畫細節質感" class="compare-img" />
          <div class="compare-zoom-hint">點擊放大</div>
          <span class="compare-caption">筆觸質感</span>
        </div>
      </div>

      <ImageLightbox :src="lightboxSrc" :alt="lightboxAlt" @close="lightboxSrc = ''" />
    </section>

    <!-- 小提醒 -->
    <section class="note-section">
      <div class="note-title">誠實說明</div>
      <p class="note-desc">數字油畫本質上是「填色畫作」，在顏色較淺的區域，近看可能會看到些微數字痕跡。</p>
      <div class="note-list">
        <div class="note-item">日常擺放距離觀看時，幾乎完全不會察覺</div>
        <div class="note-item">整體呈現依然細緻、有質感</div>
        <div class="note-item">不影響收藏與送禮效果</div>
      </div>
      <p class="note-sub">我們選擇誠實說明，因為讓你放心才是最重要的。</p>
    </section>

    <!-- CTA -->
    <div class="cta-block">
      <p>想親眼看看更多作品？</p>
      <RouterLink to="/portfolio" class="btn-primary">瀏覽作品集</RouterLink>
      <RouterLink to="/contact" class="btn-ghost">直接諮詢</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSeo } from '../composables/useSeo.js'
import ImageLightbox from '../components/ImageLightbox.vue'

const lightboxSrc = ref('')
const lightboxAlt = ref('')
function openLightbox(src, alt = '') { lightboxSrc.value = src; lightboxAlt.value = alt }

useSeo({
  title: '為什麼選擇數字油畫',
  description: '數字油畫呈現效果接近真正油畫、價格親民、手工完成比印刷更有溫度，每一幅都具有紀念價值。了解為什麼越來越多人選擇數字油畫。'
})

const points = [
  {
    title: '呈現效果接近真正油畫',
    desc: '完成後的畫面質感，與一般油畫作品非常相似。從遠處看，幾乎無法分辨差異，適合作為居家擺設的視覺焦點，或作為送禮收藏的高質感禮物。'
  },
  {
    title: '價格比傳統油畫更親民',
    desc: '傳統手繪油畫往往需要數萬元起跳，而數字油畫在相同尺寸與複雜度下，價格更容易入手，讓更多人能擁有一幅屬於自己的油畫作品。'
  },
  {
    title: '手工完成，比印刷更有溫度',
    desc: '不是輸出、不是印刷，而是一筆一筆填色完成的作品。每一幅都帶有手作的痕跡與情感，這是任何數位複製品無法替代的真實質感。'
  },
  {
    title: '成品與預覽幾乎一致',
    desc: '選擇款式時看到的完成圖，就是最終呈現的效果。不需要擔心「實物跟照片差很多」的落差問題，所見即所得。'
  },
  {
    title: '每一幅都具有紀念價值',
    desc: '不論是寵物、情侶、家人，還是某個重要的時刻，都能透過數字油畫轉化成可以長久保存的畫作。幾年後再看，依然有意義。'
  }
]
</script>

<style scoped>
.why {
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-bottom: 48px;
}

.page-label {
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--color-text-light);
  margin-bottom: -52px;
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.4;
}

.page-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-top: -44px;
  border-left: 3px solid var(--color-border);
  padding-left: 16px;
}

/* 優點列表 */
.points {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.point {
  display: flex;
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border);
}

.point:first-child {
  border-top: 1px solid var(--color-border);
}

.point-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.point-num {
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
  width: 32px;
  text-align: center;
}

.point-line {
  width: 1px;
  flex: 1;
  background: var(--color-border);
  min-height: 20px;
}

.point-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 2px;
}

.point-title {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.point-desc {
  font-size: 13px;
  color: var(--color-text-light);
  line-height: 1.9;
  margin: 0;
}

/* 對比圖 */
.compare-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.compare-label {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--color-text-light);
  text-transform: uppercase;
}

.compare-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 10px;
}

.compare-img-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  cursor: zoom-in;
}

.compare-zoom-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.3);
  color: #fff;
  font-size: 12px;
  letter-spacing: 0.1em;
  opacity: 0;
  transition: opacity 0.2s;
  border-radius: 10px;
}

.compare-img-wrap:hover .compare-zoom-hint {
  opacity: 1;
}

.compare-img {
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  background: var(--color-border);
}

.compare-caption {
  font-size: 11px;
  color: var(--color-text-light);
  letter-spacing: 0.06em;
  text-align: center;
}

/* 誠實說明 */
.note-section {
  background: #fffbf4;
  border: 1px solid #e8d8b8;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.note-title {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #a07840;
}

.note-desc {
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
  color: var(--color-text);
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.note-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--color-text-light);
}

.note-item::before {
  content: '✔';
  color: #a07840;
  font-size: 12px;
  flex-shrink: 0;
}

.note-sub {
  font-size: 12px;
  color: var(--color-text-light);
  font-style: italic;
  margin: 0;
  padding-top: 8px;
  border-top: 1px solid #e8d8b8;
}

/* CTA */
.cta-block {
  border-top: 1px solid var(--color-border);
  padding-top: 36px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.cta-block p {
  font-size: 14px;
  color: var(--color-text-light);
  margin: 0;
  margin-right: 8px;
}

.btn-primary {
  display: inline-block;
  background: var(--color-text);
  color: #fff;
  padding: 10px 24px;
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
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 13px;
  letter-spacing: 0.06em;
  transition: border-color 0.2s;
}

.btn-ghost:hover { border-color: var(--color-text); }

@media (max-width: 600px) {
  .compare-grid { grid-template-columns: 1fr 1fr; }
  .compare-img-wrap:first-child { grid-column: 1 / -1; }
  .compare-img-wrap:first-child .compare-img { aspect-ratio: 16 / 9; }
  .note-section { padding: 24px 20px; }
}
</style>
