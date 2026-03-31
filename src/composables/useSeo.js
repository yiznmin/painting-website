import { onMounted, onUnmounted } from 'vue'

const BASE_TITLE = 'YiMui 手繪油畫訂製'

export function useSeo({ title, description }) {
  const fullTitle = title ? `${title}｜${BASE_TITLE}` : BASE_TITLE

  function setMeta() {
    document.title = fullTitle

    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    desc.setAttribute('content', description)

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', fullTitle)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', description)
  }

  onMounted(setMeta)
  onUnmounted(() => { document.title = BASE_TITLE })
}
