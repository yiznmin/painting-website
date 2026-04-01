<template>
  <Teleport to="body">
    <div v-if="src" class="lightbox-overlay" @click="$emit('close')">
      <button class="lightbox-close" @click="$emit('close')" aria-label="關閉">✕</button>
      <img :src="src" :alt="alt" class="lightbox-img" @click.stop />
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({ src: String, alt: { type: String, default: '' } })
const emit = defineEmits(['close'])

function onKey(e) { if (e.key === 'Escape') emit('close') }
onMounted(() => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  cursor: default;
  border-radius: 4px;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 28px;
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s;
  line-height: 1;
}

.lightbox-close:hover { opacity: 1; }
</style>
