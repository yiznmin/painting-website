import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ArtworkDetailView from '../views/ArtworkDetailView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/portfolio', name: 'portfolio', component: PortfolioView },
  { path: '/portfolio/:id', name: 'artwork', component: ArtworkDetailView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/privacy', name: 'privacy', component: PrivacyView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
