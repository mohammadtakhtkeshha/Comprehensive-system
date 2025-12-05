# راهنمای Deploy به GitHub Pages

## تنظیمات اولیه

### 1. فعال‌سازی GitHub Pages

1. به repository خود در GitHub بروید
2. به بخش **Settings** بروید
3. در منوی سمت چپ، **Pages** را انتخاب کنید
4. در بخش **Source**، گزینه **GitHub Actions** را انتخاب کنید
5. تغییرات را ذخیره کنید

### 2. بررسی تنظیمات Docusaurus

فایل `docusaurus.config.js` باید به این صورت تنظیم شده باشد:

```javascript
url: 'https://mohammadtakhtkeshha.github.io',
baseUrl: '/Comprehensive-system/',
organizationName: 'mohammadtakhtkeshha',
projectName: 'Comprehensive-system',
```

## Deploy خودکار با GitHub Actions

پس از push کردن به branch `main`، به صورت خودکار deploy می‌شود.

### مراحل:

1. تغییرات را commit کنید:
```bash
git add .
git commit -m "به‌روزرسانی مستندات"
```

2. تغییرات را push کنید:
```bash
git push origin main
```

3. وضعیت deploy را در GitHub Actions بررسی کنید:
   - به repository بروید
   - تب **Actions** را باز کنید
   - workflow **Deploy to GitHub Pages** را مشاهده کنید

## Deploy دستی

اگر می‌خواهید به صورت دستی deploy کنید:

```bash
cd 01-getting-starter
npm run deploy
```

این دستور:
- سایت را build می‌کند
- به branch `gh-pages` push می‌کند
- سایت در GitHub Pages در دسترس خواهد بود

## آدرس نهایی

پس از deploy موفق، سایت در آدرس زیر قابل مشاهده خواهد بود:

**https://mohammadtakhtkeshha.github.io/Comprehensive-system/**

## عیب‌یابی

### مشکل: Actions اجرا نمی‌شود

- مطمئن شوید که GitHub Pages از Actions استفاده می‌کند (نه از branch)
- بررسی کنید که فایل `.github/workflows/deploy.yml` وجود دارد

### مشکل: استایل‌ها load نمی‌شوند

- بررسی کنید که `baseUrl` در `docusaurus.config.js` درست تنظیم شده باشد
- مطمئن شوید که baseUrl با نام repository مطابقت دارد

### مشکل: لینک‌ها کار نمی‌کنند

- بررسی کنید که `trailingSlash: false` در config تنظیم شده باشد
- مطمئن شوید که لینک‌ها با baseUrl شروع می‌شوند

## نکات مهم

- ⚠️ همیشه قبل از deploy، سایت را به صورت محلی تست کنید
- ⚠️ مطمئن شوید که همه وابستگی‌ها در `package.json` وجود دارد
- ⚠️ پس از اولین deploy، ممکن است چند دقیقه طول بکشد تا سایت در دسترس باشد

