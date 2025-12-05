# ⚡ راهنمای سریع رفع خطا

## 🚀 مراحل سریع

### 1. پاک کردن Cache
```bash
cd 01-getting-starter
npm run clear
```

### 2. نصب مجدد (اگر نیاز است)
```bash
npm install
```

### 3. اجرای پروژه
```bash
npm run dev
```

## ✅ بررسی نصب کتابخانه‌ها

اگر خطا دارید، این دستورات را اجرا کنید:

```bash
# بررسی همه کتابخانه‌ها
cd 01-getting-starter
npm list @react-spring/web react-icons tailwindcss

# نصب مجدد اگر نیاز است
npm install @react-spring/web react-icons tailwindcss postcss autoprefixer

# پاک کردن cache
npm run clear

# اجرای پروژه
npm run dev
```

## 🔧 اگر هنوز مشکل دارید

### راه‌حل کامل:
```bash
cd 01-getting-starter

# حذف node_modules و package-lock.json
rm -rf node_modules package-lock.json

# نصب مجدد
npm install

# پاک کردن cache
npm run clear

# اجرای پروژه
npm run dev
```

## 📝 چک‌لیست

- [ ] همه کتابخانه‌ها در `package.json` هستند
- [ ] `npm install` اجرا شده است
- [ ] Cache پاک شده است (`npm run clear`)
- [ ] PostCSS config موجود است
- [ ] Tailwind config موجود است

## ⚠️ نکات مهم

1. **همیشه بعد از نصب کتابخانه‌ها cache را پاک کنید**
2. **اگر خطا دارید، مرورگر را هم refresh کنید (Ctrl+Shift+R)**
3. **مطمئن شوید که Node.js version مناسب است (14+)**

## 🎯 کتابخانه‌های مورد نیاز

```json
{
  "dependencies": {
    "@react-spring/web": "^9.7.3",
    "react-icons": "^4.12.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  }
}
```

## 💡 اگر مشکل ادامه داشت

1. بررسی کنید که آیا همه فایل‌های config موجود هستند:
   - `tailwind.config.js`
   - `postcss.config.js`
   
2. بررسی console مرورگر برای خطاهای بیشتر

3. بررسی terminal برای خطاهای build

