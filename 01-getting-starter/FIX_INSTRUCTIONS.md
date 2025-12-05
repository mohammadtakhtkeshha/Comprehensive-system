# 🔧 راهنمای رفع خطاها

## مشکلات حل شده

کتابخانه‌های زیر نصب شده‌اند:
- ✅ `@react-spring/web` - برای انیمیشن‌ها
- ✅ `react-icons` - برای آیکون‌ها  
- ✅ `tailwindcss` - برای استایل‌دهی
- ✅ `postcss` و `autoprefixer` - برای پردازش CSS

## مراحل رفع مشکل

### 1. پاک کردن Cache

```bash
cd 01-getting-starter
npm run clear
```

### 2. نصب مجدد Dependencies

```bash
npm install
```

### 3. بررسی نصب کتابخانه‌ها

```bash
# بررسی React Spring
npm list @react-spring/web

# بررسی React Icons
npm list react-icons

# بررسی Tailwind
npm list tailwindcss
```

### 4. اجرای پروژه

```bash
npm run dev
```

## اگر مشکل ادامه داشت

### راه‌حل 1: حذف node_modules و نصب مجدد

```bash
cd 01-getting-starter
rm -rf node_modules package-lock.json
npm install
npm run clear
npm run dev
```

### راه‌حل 2: بررسی Version Compatibility

مطمئن شوید که نسخه‌های کتابخانه‌ها با React 17 سازگار هستند:

```json
{
  "dependencies": {
    "@react-spring/web": "^9.7.3",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-icons": "^4.12.0"
  }
}
```

### راه‌حل 3: بررسی Tailwind Config

مطمئن شوید که `tailwind.config.js` درست تنظیم شده است:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
};
```

### راه‌حل 4: بررسی PostCSS Config

مطمئن شوید که `postcss.config.js` وجود دارد:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## خطاهای رایج

### خطا: "Module not found: Error: Can't resolve '@react-spring/web'"

**راه‌حل:**
```bash
npm install @react-spring/web
npm run clear
npm run dev
```

### خطا: "Cannot find module 'tailwindcss'"

**راه‌حل:**
```bash
npm install -D tailwindcss postcss autoprefixer
npm run clear
npm run dev
```

### خطا: "Cannot find module 'react-icons/fa'"

**راه‌حل:**
```bash
npm install react-icons
npm run clear
npm run dev
```

## ✅ بررسی نهایی

پس از رفع مشکلات، پروژه باید به درستی کار کند. اگر هنوز مشکل دارید:

1. مطمئن شوید که همه وابستگی‌ها نصب شده‌اند
2. Cache را پاک کنید
3. سرور توسعه را restart کنید
4. مرورگر را refresh کنید

## 📝 نکات مهم

- همیشه بعد از نصب کتابخانه‌های جدید، cache را پاک کنید
- از `npm run clear` قبل از هر build استفاده کنید
- اگر از yarn استفاده می‌کنید، `yarn` را به جای `npm` استفاده کنید

