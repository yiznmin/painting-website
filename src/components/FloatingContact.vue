<template>
  <div class="float-wrap">
    <button class="float-toggle" @click="open = !open" :aria-label="open ? '關閉' : '聯絡我'">
      <svg v-if="!open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
      <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>

    <Transition name="pop">
      <div v-if="open" class="float-menu">
        <a
          href="https://www.instagram.com/yii.mui?igsh=MWJ3dHViMDIxcWp5ZQ=="
          target="_blank"
          rel="noopener"
          class="float-item"
          title="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
          <span>Instagram</span>
        </a>

        <a
          href="mailto:yiimui.studio@gmail.com"
          class="float-item"
          title="Email"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>Email</span>
        </a>

        <RouterLink to="/contact" class="float-item" @click="open = false" title="客製化諮詢">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          <span>客製化諮詢</span>
        </RouterLink>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.float-wrap {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.float-toggle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--color-text);
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  transition: transform 0.2s, opacity 0.2s;
  cursor: pointer;
}

.float-toggle:hover {
  transform: scale(1.08);
  opacity: 0.88;
}

.float-menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
}

.float-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 24px;
  padding: 9px 18px 9px 14px;
  font-size: 13px;
  color: var(--color-text);
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  transition: transform 0.18s, box-shadow 0.18s;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

.float-item:hover {
  transform: translateX(-4px);
  box-shadow: 0 4px 18px rgba(0,0,0,0.16);
}

/* 動畫 */
.pop-enter-active {
  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-leave-active {
  transition: all 0.15s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.92);
}

@media (max-width: 600px) {
  .float-wrap {
    bottom: 20px;
    right: 16px;
  }
}
</style>
