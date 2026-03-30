<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <h1 class="portfolio-title">Digital Oil Painting</h1>
      <p class="portfolio-subtitle">CHOOSE YOUR LEVEL OF SUPPORT</p>
    </div>

    <!-- 分類 Tab -->
    <div class="classification-bar">
      <button
        class="class-tab"
        :class="{ active: activeClass === '' }"
        @click="setClass('')"
      >全部</button>
      <button
        v-for="c in classificationTabs"
        :key="c"
        class="class-tab"
        :class="{ active: activeClass === c }"
        @click="setClass(c)"
      >{{ c }}</button>
    </div>

    <!-- 篩選 Tags -->
    <div class="filter-bar">
      <button
        class="filter-tag"
        :class="{ active: activeFilter === '' }"
        @click="setFilter('')"
      >全部</button>
      <button
        v-for="tag in filterTags"
        :key="tag"
        class="filter-tag"
        :class="{ active: activeFilter === tag }"
        @click="setFilter(tag)"
      >{{ tag }}</button>
    </div>

    <div class="artwork-grid">
      <RouterLink
        v-for="artwork in pagedArtworks"
        :key="artwork.id"
        :to="{ name: 'artwork', params: { id: artwork.id } }"
        class="artwork-card"
      >
        <div class="card-image-wrap">
          <img v-if="artwork.image" :src="artwork.image" :alt="artwork.title" class="card-image" />
          <div v-else class="card-image-placeholder"></div>
          <span v-if="artwork.classification" class="card-badge">{{ artwork.classification }}</span>
        </div>
        <div class="card-info">
          <h3 class="card-title">{{ artwork.title }}</h3>
          <ul class="card-meta">
            <li>{{ artwork.size }}</li>
            <li>{{ artwork.colors }}</li>
            <li>{{ artwork.difficulty }}</li>
          </ul>
        </div>
      </RouterLink>
    </div>

    <p v-if="pagedArtworks.length === 0" class="empty">沒有符合篩選條件的作品。</p>

    <div v-if="totalPages > 1" class="pagination">
      <button class="page-btn" :disabled="currentPage === 1" @click="currentPage--">‹</button>
      <span class="page-label">PAGE {{ currentPage }} / {{ totalPages }}</span>
      <button class="page-btn" :disabled="currentPage === totalPages" @click="currentPage++">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { artworks } from '../data/artworks.js'

const isLarge = ref(window.innerWidth >= 1200)
window.addEventListener('resize', () => { isLarge.value = window.innerWidth >= 1200 })

// 分類 Tab
const classificationTabs = [...new Set(artworks.map(a => a.classification).filter(Boolean))]
const activeClass = ref('')

function setClass(c) {
  activeClass.value = c
  currentPage.value = 1
}

// 篩選 Tags
const filterTags = ['簡易', '中等', '複雜', '30×40', '40×40', '40×50', '40×70', '50×60', '50×70']
const activeFilter = ref('')

function setFilter(tag) {
  activeFilter.value = tag
  currentPage.value = 1
}

const filteredArtworks = computed(() => {
  let result = artworks
  if (activeClass.value) result = result.filter(a => a.classification === activeClass.value)
  if (activeFilter.value) result = result.filter(a =>
    a.difficulty === activeFilter.value || a.size === activeFilter.value
  )
  return result
})

const pageSize = computed(() => isLarge.value ? 6 : 4)
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(filteredArtworks.value.length / pageSize.value))

watch(totalPages, (n) => { if (currentPage.value > n) currentPage.value = 1 })

const pagedArtworks = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredArtworks.value.slice(start, start + pageSize.value)
})
</script>

<style scoped>
.portfolio {
  max-width: 900px;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 28px;
}

.portfolio-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
}

.portfolio-subtitle {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--color-text-light);
}

.classification-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  justify-content: center;
}

.class-tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 6px 14px;
  font-size: 13px;
  font-family: inherit;
  color: var(--color-text-light);
  cursor: pointer;
  transition: all 0.18s;
  letter-spacing: 0.04em;
}

.class-tab:hover {
  color: var(--color-text);
}

.class-tab.active {
  color: var(--color-text);
  border-bottom-color: var(--color-text);
  font-weight: 500;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
  justify-content: center;
}

.filter-tag {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 5px 16px;
  font-size: 12px;
  font-family: inherit;
  color: var(--color-text-light);
  cursor: pointer;
  transition: all 0.18s;
  letter-spacing: 0.04em;
}

.filter-tag:hover {
  border-color: #aaa;
  color: var(--color-text);
}

.filter-tag.active {
  background: var(--color-text);
  border-color: var(--color-text);
  color: #fff;
}

.artwork-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (min-width: 1200px) {
  .artwork-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.artwork-card {
  background: var(--color-sidebar);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.artwork-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.card-image-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
}

.card-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  letter-spacing: 0.04em;
  backdrop-filter: blur(4px);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--color-border);
}

.card-info {
  padding: 14px 16px 16px;
}

.card-title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}

.card-meta {
  list-style: disc;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-meta li {
  font-size: 12px;
  color: var(--color-text-light);
}

.empty {
  text-align: center;
  color: var(--color-text-light);
  font-size: 14px;
  margin: 40px 0;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
}

.page-btn {
  background: none;
  border: 1px solid var(--color-border);
  width: 32px;
  height: 32px;
  border-radius: 6px;
  font-size: 18px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  cursor: pointer;
}

.page-btn:hover:not(:disabled) {
  background: var(--color-hover);
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-label {
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--color-text-light);
}
</style>
