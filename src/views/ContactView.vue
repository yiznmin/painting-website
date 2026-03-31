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
        <label>參考圖片</label>
        <div class="img-hint">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>
            送出諮詢後，請附上參考圖片：<br />
            · IG 私訊
            <a href="https://www.instagram.com/yii.mui?igsh=MWJ3dHViMDIxcWp5ZQ==" target="_blank" rel="noopener" class="note-link">@yii.mui</a><br />
            · Email 附件寄至
            <a href="mailto:yiimui.studio@gmail.com" class="note-link">yiimui.studio@gmail.com</a>
          </span>
        </div>
      </div>

      <div v-if="errorMsg" class="form-error">{{ errorMsg }}</div>
      <div v-if="successMsg" class="form-success">{{ successMsg }}</div>

      <button type="submit" class="submit-btn" :disabled="submitting">
        {{ submitting ? '送出中...' : '送出諮詢' }}
      </button>
    </form>

    <div class="contact-note">
      <p>送出後會盡快與您聯絡。也歡迎直接透過 Instagram 私訊：
        <a href="https://www.instagram.com/yii.mui?igsh=MWJ3dHViMDIxcWp5ZQ==" target="_blank" rel="noopener" class="note-link">@yii.mui</a>
      </p>
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
import emailjs from '@emailjs/browser'
import { useSeo } from '../composables/useSeo.js'

useSeo({
  title: '客製化諮詢',
  description: '數字油畫客製諮詢表單，填寫姓名、尺寸與想法，送出後我會盡快評估報價。也歡迎透過 Instagram 私訊 @yii.mui 直接詢問。'
})

const EMAILJS_SERVICE       = 'service_v06b5jn'
const EMAILJS_TEMPLATE      = 'template_c6n30bb'
const EMAILJS_TEMPLATE_REPLY = 'template_9alvvyq'
const EMAILJS_KEY           = 'NI_EHS8BRNmemSg2F'

const route = useRoute()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  size: '',
  message: ''
})

const submitting = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

const faqs = [
  {
    q: '你們提供哪些服務？',
    a: '共兩種服務。「選款代畫」：前往指定賣場挑選款式，私訊商品連結，由我代購畫完後直接寄給你。「照片客製」：提供照片由我設計成專屬畫稿，可選擇由我代畫完成，或選擇自己畫——提供完整畫材套組，親手完成屬於自己的作品。'
  },
  {
    q: '照片客製的「自己畫」是什麼意思？',
    a: '我會根據你的照片設計好畫稿，並提供完整畫材套組（畫布、顏料、畫筆、參考圖），你按照數字填色即可，不需要任何繪畫基礎，完成後就是一幅獨一無二的作品。'
  },
  {
    q: '可以指定什麼主題？',
    a: '寵物、人像、情侶、家人都可以，也接受紀念日或特殊場合的照片。提供清晰照片後我會協助評估效果。'
  },
  {
    q: '確認訂單後可以修改內容嗎？',
    a: '確認訂單後不再修改內容，因此我們會在確認前充分討論細節，並說明呈現效果，讓你再決定是否製作。'
  },
  {
    q: '費用怎麼計算？',
    a: '依尺寸與服務類型報價，私訊照片與尺寸後我會提供詳細報價。確認後支付訂金，完成後付尾款。'
  },
  {
    q: '需要自己購買材料或寄送嗎？',
    a: '不需要，全程由我協助處理，包含材料準備與寄送，你只需要提供照片即可。'
  }
]


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
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
      from_name:  form.name,
      from_email: form.email,
      phone:      form.phone || '未填',
      size:       form.size  || '未填',
      artwork:    route.query.artwork || '未指定',
      message:    form.message
    }, EMAILJS_KEY)

    await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE_REPLY, {
      from_name:  form.name,
      from_email: form.email,
      message:    form.message
    }, EMAILJS_KEY)

    successMsg.value = '諮詢已送出！我們會盡快與您聯絡，參考圖片請透過 IG 或 Email 附件傳送。'
    form.name = ''
    form.email = ''
    form.phone = ''
    form.size = ''
    form.message = ''
  } catch {
    errorMsg.value = '送出失敗，請直接透過 IG 私訊或寄信至 yiimui.studio@gmail.com。'
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

.img-hint {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 14px 16px;
  background: var(--color-hover);
  border-radius: 8px;
  font-size: 13px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.img-hint svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-note {
  margin-top: 28px;
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.note-link {
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  transition: border-color 0.15s;
}

.note-link:hover {
  border-color: var(--color-text);
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
