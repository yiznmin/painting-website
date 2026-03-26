<template>
  <div class="contact">
    <h1 class="page-title">客製化諮詢</h1>
    <p class="page-subtitle">Custom Order / Contact</p>

    <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
      <div v-if="route.query.artwork" class="artwork-hint">
        詢問作品：<strong>{{ route.query.artwork }}</strong>
      </div>

      <div class="form-group">
        <label for="name">姓名 *</label>
        <input id="name" v-model="form.name" type="text" placeholder="您的姓名" required />
      </div>

      <div class="form-group">
        <label for="email">電子郵件 *</label>
        <input id="email" v-model="form.email" type="email" placeholder="example@email.com" required />
      </div>

      <div class="form-group">
        <label for="phone">聯絡電話</label>
        <input id="phone" v-model="form.phone" type="tel" placeholder="0912-345-678" />
      </div>

      <div class="form-group">
        <label for="size">希望尺寸</label>
        <select id="size" v-model="form.size">
          <option value="">請選擇</option>
          <option>30×40</option>
          <option>40×40</option>
          <option>40×50</option>
          <option>40×70</option>
          <option>50×60</option>
          <option>50×70</option>
          <option>其他（請備註）</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">諮詢內容 *</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          placeholder="請描述您想要的作品、風格、用途等..."
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="files">附上參考圖片（可多選）</label>
        <div class="file-upload-area" @dragover.prevent @drop.prevent="handleDrop">
          <input
            id="files"
            type="file"
            multiple
            accept="image/*"
            class="file-input"
            @change="handleFileChange"
          />
          <label for="files" class="file-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <span>點擊或拖曳上傳圖片</span>
          </label>
        </div>
        <ul v-if="files.length" class="file-list">
          <li v-for="(f, i) in files" :key="i" class="file-item">
            <span>{{ f.name }}</span>
            <button type="button" class="remove-file" @click="removeFile(i)">✕</button>
          </li>
        </ul>
      </div>

      <div v-if="errorMsg" class="form-error">{{ errorMsg }}</div>
      <div v-if="successMsg" class="form-success">{{ successMsg }}</div>

      <button type="submit" class="submit-btn" :disabled="submitting">
        {{ submitting ? '送出中...' : '送出諮詢' }}
      </button>
    </form>

    <div class="contact-note">
      <p>送出後，我們會盡快與您聯絡。</p>
    </div>

    <!-- FAQ -->
    <div class="faq">
      <h2 class="faq-title">常見問題 FAQ</h2>
      <div class="faq-list">
        <details v-for="item in faqs" :key="item.q" class="faq-item">
          <summary class="faq-q">{{ item.q }}</summary>
          <p class="faq-a">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  size: '',
  message: ''
})

const files = ref([])
const submitting = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

const faqs = [
  {
    q: '完成一幅作品需要多久時間？',
    a: '依尺寸與複雜度而定，一般小尺寸（30×40）約需 2–3 週，大尺寸或複雜作品約需 4–6 週。'
  },
  {
    q: '費用怎麼計算？',
    a: '費用依尺寸、色數與難易度報價，送出諮詢後我會根據您的需求提供詳細報價單。'
  },
  {
    q: '可以指定人像或寵物嗎？',
    a: '可以！人像、寵物、風景、靜物都接受。送出諮詢時附上您喜歡的參考圖，我們來討論細節。'
  },
  {
    q: '如何付款？',
    a: '確認訂單後先付訂金 50%，完成後確認滿意再付尾款。接受銀行轉帳、LINE Pay。'
  },
  {
    q: '作品如何寄送？',
    a: '完成後以厚紙板妥善包裝，使用黑貓宅急便寄送，運費由買方負擔，亦可面交（台北地區）。'
  },
  {
    q: '可以要求修改嗎？',
    a: '可以，製作過程中會提供草稿確認，正式完成前可提出一次修改意見。'
  }
]

function handleFileChange(e) {
  const newFiles = Array.from(e.target.files)
  files.value = [...files.value, ...newFiles]
  e.target.value = ''
}

function handleDrop(e) {
  const newFiles = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'))
  files.value = [...files.value, ...newFiles]
}

function removeFile(index) {
  files.value.splice(index, 1)
}

async function handleSubmit() {
  errorMsg.value = ''
  successMsg.value = ''

  if (!form.name || !form.email || !form.message) {
    errorMsg.value = '請填寫必填欄位（姓名、電子郵件、諮詢內容）。'
    return
  }

  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailReg.test(form.email)) {
    errorMsg.value = '請輸入正確的電子郵件格式。'
    return
  }

  submitting.value = true

  try {
    const artworkInfo = route.query.artwork ? `詢問作品：${route.query.artwork}\n` : ''
    const subject = encodeURIComponent(`[YiMui 客製化諮詢] ${form.name}`)
    const body = encodeURIComponent(
      `${artworkInfo}姓名：${form.name}\n電子郵件：${form.email}\n聯絡電話：${form.phone || '未填'}\n希望尺寸：${form.size || '未填'}\n\n諮詢內容：\n${form.message}\n\n附件數量：${files.value.length} 個（請另行寄送附件）`
    )
    window.location.href = `mailto:yimui@example.com?subject=${subject}&body=${body}`

    successMsg.value = '已開啟郵件程式，請確認送出。附件請另行寄送至 yimui@example.com。'
    form.name = ''
    form.email = ''
    form.phone = ''
    form.size = ''
    form.message = ''
    files.value = []
  } catch {
    errorMsg.value = '發生錯誤，請直接寄信至 yimui@example.com。'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
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
  margin-bottom: 36px;
}

.artwork-hint {
  background: var(--color-hover);
  border-left: 3px solid var(--color-text);
  border-radius: 0 8px 8px 0;
  padding: 10px 16px;
  font-size: 13px;
  color: var(--color-text);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--color-text);
}

input,
select,
textarea {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  font-family: inherit;
  background: #fff;
  color: var(--color-text);
  transition: border-color 0.2s;
  outline: none;
  resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #aaa;
}

.file-upload-area {
  position: relative;
  border: 1.5px dashed var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  background: #faf9f7;
  transition: border-color 0.2s;
}

.file-upload-area:hover {
  border-color: #aaa;
}

.file-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  border: none;
  padding: 0;
}

.file-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  cursor: pointer;
  font-size: 13px;
  color: var(--color-text-light);
}

.file-list {
  list-style: none;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  background: var(--color-hover);
  border-radius: 6px;
  padding: 6px 12px;
}

.remove-file {
  background: none;
  border: none;
  color: var(--color-text-light);
  font-size: 12px;
  padding: 0 4px;
  cursor: pointer;
  transition: color 0.15s;
}

.remove-file:hover {
  color: #c00;
}

.form-error {
  background: #fff0f0;
  border: 1px solid #f5c2c2;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #c00;
}

.form-success {
  background: #f0f7f0;
  border: 1px solid #b2d4b2;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #2a6a2a;
}

.submit-btn {
  background: var(--color-text);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 32px;
  font-size: 14px;
  letter-spacing: 0.06em;
  transition: opacity 0.2s;
  align-self: flex-start;
  cursor: pointer;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.75;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.contact-note {
  margin-top: 28px;
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* FAQ */
.faq {
  margin-top: 56px;
  border-top: 1px solid var(--color-border);
  padding-top: 40px;
}

.faq-title {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 24px;
  letter-spacing: 0.04em;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-q {
  font-size: 14px;
  font-weight: 500;
  padding: 16px 4px;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.02em;
  transition: color 0.15s;
}

.faq-q::-webkit-details-marker { display: none; }

.faq-q::after {
  content: '+';
  font-size: 18px;
  font-weight: 300;
  color: var(--color-text-light);
  transition: transform 0.2s;
}

details[open] .faq-q::after {
  transform: rotate(45deg);
}

.faq-q:hover {
  color: var(--color-accent);
}

.faq-a {
  font-size: 13px;
  line-height: 1.8;
  color: var(--color-text-light);
  padding: 0 4px 16px;
}
</style>
