<template>
  <div class="layout">
    <SideNav />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
  <FloatingContact />
</template>

<script setup>
import SideNav from './components/SideNav.vue'
import FloatingContact from './components/FloatingContact.vue'
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  min-width: 0;
  padding: 40px 48px;
}

@media (max-width: 600px) {
  .layout {
    flex-direction: column;
  }
  .main-content {
    padding: 24px 20px;
  }
}
</style>
