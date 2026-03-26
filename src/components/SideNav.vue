<template>
  <nav class="sidebar">
    <RouterLink to="/" class="nav-item" :class="{ active: route.name === 'home' }">首頁</RouterLink>
    <RouterLink to="/portfolio" class="nav-item" :class="{ active: route.name === 'portfolio' || route.name === 'artwork' }">作品集</RouterLink>
    <RouterLink to="/about" class="nav-item" :class="{ active: route.name === 'about' }">關於我</RouterLink>
    <RouterLink to="/contact" class="nav-item" :class="{ active: route.name === 'contact' }">客製化諮詢</RouterLink>

    <div class="sidebar-social">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="social-link" title="Instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
        Instagram
      </a>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  background: var(--color-sidebar);
  border-radius: 16px;
  margin: 24px 0 24px 24px;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: fit-content;
  position: sticky;
  top: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.nav-item {
  font-size: 15px;
  font-weight: 400;
  color: var(--color-text);
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  letter-spacing: 0.02em;
}

.nav-item:hover,
.nav-item.active {
  background: var(--color-hover);
  color: var(--color-accent);
  font-weight: 500;
}

.sidebar-social {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.social-link {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  color: var(--color-text-light);
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  letter-spacing: 0.02em;
}

.social-link:hover {
  background: var(--color-hover);
  color: var(--color-text);
}

@media (max-width: 600px) {
  .sidebar {
    width: 100%;
    min-width: unset;
    margin: 16px 16px 0;
    padding: 14px 16px;
    flex-direction: row;
    flex-wrap: wrap;
    position: static;
    border-radius: 12px;
    gap: 6px;
  }
  .sidebar-social {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
    border-left: 1px solid var(--color-border);
    padding-left: 10px;
  }
}
</style>
