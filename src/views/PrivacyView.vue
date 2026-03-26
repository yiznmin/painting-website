<template>
  <div class="privacy">
    <h1 class="page-title">隱私政策與使用條款</h1>
    <p class="page-subtitle">Privacy Policy / Terms of Use</p>

    <section class="section">
      <h2>一、個人資料蒐集</h2>
      <p>當您填寫客製化諮詢表單時，我們將蒐集您提供的姓名、電子郵件及其他聯絡資訊，僅用於回覆諮詢及處理訂單。</p>
    </section>

    <section class="section">
      <h2>二、資料使用方式</h2>
      <p>您的個人資料不會出售、出租或以任何方式分享給第三方，僅用於 YiMui 與您之間的溝通聯絡。</p>
    </section>

    <section class="section">
      <h2>三、著作權聲明</h2>
      <p>本網站所有作品圖像及文字內容均為 YiMui 所有，未經書面授權不得轉載、複製或商業使用。</p>
    </section>

    <section class="section">
      <h2>四、Cookie 使用</h2>
      <p>本網站不使用第三方追蹤 Cookie，僅於必要時使用技術性 Cookie 以確保網站正常運作。</p>
    </section>

    <section class="section">
      <h2>五、聯絡我們</h2>
      <p>如對隱私政策有任何疑問，歡迎透過<RouterLink to="/contact" class="link">客製化諮詢頁面</RouterLink>與我們聯絡。</p>
    </section>
  </div>
</template>

<style scoped>
.privacy {
  max-width: 680px;
}

.page-title {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 4px;
}

.page-subtitle {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--color-text-light);
  margin-bottom: 40px;
}

.section {
  margin-bottom: 28px;
}

.section h2 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}

.section p {
  font-size: 14px;
  line-height: 1.8;
  color: var(--color-text);
}

.link {
  text-decoration: underline;
  color: var(--color-text);
}
</style>
