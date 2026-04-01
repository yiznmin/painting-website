<template>
  <div v-if="artwork" class="detail">
    <button class="back-btn" @click="router.back()">← 返回作品集</button>

    <div class="detail-layout">
      <div class="detail-left">
        <div class="detail-image-wrap">
          <img v-if="artwork.image" :src="artwork.image" :alt="artwork.title" class="detail-image" />
          <div v-else class="detail-image-placeholder"></div>
        </div>

        <!-- 繪製過程 -->
        <div v-if="artwork.processing?.length" class="processing-section">
          <p class="processing-label">繪製過程</p>
          <div class="processing-grid">
            <img
              v-for="(img, i) in artwork.processing"
              :key="i"
              :src="img"
              :alt="`${artwork.title} 過程 ${i + 1}`"
              class="processing-img"
            />
          </div>
        </div>
      </div>

      <div class="detail-info">
        <div v-if="artwork.classification" class="detail-classification">{{ artwork.classification }}</div>
        <h1 class="detail-title">{{ artwork.title }}</h1>
        <div class="detail-tags">
          <span class="tag">{{ artwork.size }} cm</span>
          <span class="tag">{{ artwork.colors }}</span>
          <span class="tag">{{ artwork.difficulty }}</span>
        </div>
        <p class="detail-desc">{{ artwork.description }}</p>

        <!-- 未售出可議價提示 -->
        <div v-if="artwork.negotiable" class="negotiable-block">
          <p class="negotiable-title">此作品尚未售出</p>
          <p class="negotiable-desc">價格可議，歡迎私訊詢問，我會根據您的預算提供報價。</p>
        </div>

        <RouterLink
          :to="{ name: 'contact', query: { artwork: artwork.title } }"
          class="cta-btn"
        >
          {{ artwork.negotiable ? '私訊詢問價格' : '客製化這款' }}
        </RouterLink>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <p>找不到此作品。</p>
    <RouterLink to="/portfolio">← 回作品集</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { artworks } from '../data/artworks.js'

const route = useRoute()
const router = useRouter()

const artwork = computed(() =>
  artworks.find(a => a.id === Number(route.params.id))
)
</script>

<style scoped>
.back-btn {
  background: none;
  border: none;
  font-size: 13px;
  color: var(--color-text-light);
  padding: 0;
  margin-bottom: 32px;
  letter-spacing: 0.04em;
  transition: color 0.15s;
  cursor: pointer;
}

.back-btn:hover {
  color: var(--color-text);
}

.detail-layout {
  display: flex;
  gap: 48px;
  align-items: flex-start;
}

.detail-left {
  flex: 1;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-image-wrap {
  border-radius: 10px;
  overflow: hidden;
}

.detail-image {
  width: 100%;
  object-fit: contain;
}

.detail-image-placeholder {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--color-border);
  border-radius: 10px;
}

.processing-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.processing-label {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--color-text-light);
  text-transform: uppercase;
}

.processing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}

.processing-img {
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
  background: var(--color-border);
}

.detail-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-classification {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 3px 12px;
  width: fit-content;
}

.negotiable-block {
  background: var(--color-hover);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.negotiable-title {
  font-size: 13px;
  font-weight: 500;
}

.negotiable-desc {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.detail-title {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 4px 14px;
  font-size: 12px;
  color: var(--color-text-light);
  letter-spacing: 0.04em;
}

.detail-desc {
  font-size: 14px;
  line-height: 1.8;
  color: var(--color-text);
}

.cta-btn {
  display: inline-block;
  background: var(--color-text);
  color: #fff;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
  width: fit-content;
}

.cta-btn:hover {
  opacity: 0.8;
}

.not-found {
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 700px) {
  .detail-layout {
    flex-direction: column;
    gap: 24px;
  }
  .detail-left {
    max-width: 100%;
  }
}
</style>
