# ⚡ راهنمای سریع Deploy به GitHub Pages

## 🎯 سایت شما در آدرس زیر در دسترس است:
**https://mohammadtakhtkeshha.github.io/Comprehensive-system/**

## 📝 مراحل ساده برای Deploy

### 1️⃣ تنظیمات GitHub (یک بار انجام دهید)

#### فعال‌سازی GitHub Pages:
1. به این آدرس بروید: https://github.com/mohammadtakhtkeshha/Comprehensive-system/settings/pages
2. در بخش **Source**:
   - گزینه **GitHub Actions** را انتخاب کنید
3. روی **Save** کلیک کنید

#### فعال‌سازی GitHub Actions:
1. به این آدرس بروید: https://github.com/mohammadtakhtkeshha/Comprehensive-system/settings/actions
2. در بخش **Workflow permissions**:
   - **Read and write permissions** را انتخاب کنید
3. روی **Save** کلیک کنید

### 2️⃣ Deploy کردن سایت

#### روش 1: Deploy خودکار (توصیه می‌شود)

فقط کافی است تغییرات را push کنید:

```bash
cd /Users/mt/BANKRefah/documentPsp/Comprehensive-system

# اضافه کردن همه تغییرات
git add .

# Commit
git commit -m "آماده‌سازی برای GitHub Pages"

# Push
git push origin main
```

بعد از push:
1. به تب **Actions** در GitHub بروید
2. منتظر بمانید تا workflow کامل شود (2-5 دقیقه)
3. سایت شما آماده است! 🎉

#### روش 2: Deploy دستی

```bash
cd 01-getting-starter
npm install
npm run build
npm run deploy
```

### 3️⃣ بررسی نتیجه

1. چند دقیقه صبر کنید (5-10 دقیقه برای اولین بار)
2. به این آدرس بروید: https://mohammadtakhtkeshha.github.io/Comprehensive-system/
3. سایت شما باید نمایش داده شود!

## ✅ چک‌لیست

قبل از deploy، مطمئن شوید:

- [ ] تغییرات commit شده‌اند
- [ ] GitHub Pages از Actions استفاده می‌کند
- [ ] Workflow permissions درست است
- [ ] همه فایل‌ها push شده‌اند

## 🚨 اگر مشکل دارید

### مشکل: Actions اجرا نمی‌شود
→ به Settings → Actions → General بروید و "Allow all actions" را فعال کنید

### مشکل: سایت 404 می‌دهد
→ چند دقیقه صبر کنید و cache مرورگر را پاک کنید (Ctrl+Shift+R)

### مشکل: تصاویر نمایش داده نمی‌شوند
→ مطمئن شوید که فایل‌های SVG در `static/img/` هستند

## 📞 بررسی وضعیت

برای بررسی وضعیت deploy:
1. به این آدرس بروید: https://github.com/mohammadtakhtkeshha/Comprehensive-system/actions
2. آخرین workflow را مشاهده کنید
3. اگر سبز بود، موفق بوده است! ✅

---

## 🎉 موفق باشید!

پس از تنظیمات اولیه، هر بار که push کنید، سایت به صورت خودکار deploy می‌شود!

