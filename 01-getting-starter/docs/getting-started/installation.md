# نصب و راه‌اندازی

راهنمای نصب و راه‌اندازی سیستم جامع مدیریت PSP.

## 📋 پیش‌نیازها

### سخت‌افزار

- **CPU**: حداقل 4 هسته
- **RAM**: حداقل 8 GB
- **Storage**: حداقل 100 GB SSD
- **Network**: اتصال پایدار به اینترنت

### نرم‌افزار

- **Operating System**: Linux (Ubuntu 20.04+ یا CentOS 8+)
- **Docker**: نسخه 20.10+
- **Docker Compose**: نسخه 1.29+
- **Node.js**: نسخه 18+ (برای توسعه)
- **PostgreSQL**: نسخه 14+
- **Redis**: نسخه 6+

## 🚀 نصب سریع

### روش 1: استفاده از Docker Compose (توصیه می‌شود)

```bash
# کلون کردن مخزن
git clone https://github.com/mohammadtakhtkeshha/Comprehensive-system.git
cd Comprehensive-system

# کپی فایل تنظیمات
cp .env.example .env

# ویرایش تنظیمات
nano .env

# راه‌اندازی سیستم
docker-compose up -d

# بررسی وضعیت
docker-compose ps
```

### روش 2: نصب دستی

```bash
# نصب وابستگی‌ها
npm install

# تنظیم متغیرهای محیطی
cp .env.example .env
nano .env

# راه‌اندازی Database
npm run db:migrate

# راه‌اندازی سیستم
npm run start
```

## ⚙️ تنظیمات اولیه

### فایل `.env`

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/psp_db

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=24h

# External Services
SHAPARAK_API_URL=https://api.shaparak.ir
SHAPARAK_API_KEY=your-api-key

# Notification
SMS_PROVIDER=your-sms-provider
SMS_API_KEY=your-sms-api-key

# Application
PORT=3000
NODE_ENV=production
```

### تنظیمات Database

```sql
-- ایجاد Database
CREATE DATABASE psp_db;

-- ایجاد User
CREATE USER psp_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE psp_db TO psp_user;
```

## 🔧 راه‌اندازی ماژول‌ها

### 1. مدیریت پذیرندگان

```bash
# راه‌اندازی سرویس
npm run module:merchant:start
```

### 2. مدیریت ترمینال

```bash
npm run module:terminal:start
```

### 3. پردازش تراکنش

```bash
npm run module:transaction:start
```

## ✅ بررسی نصب

### تست اتصال Database

```bash
npm run db:test
```

### تست سرویس‌ها

```bash
npm run test:health
```

### بررسی Logs

```bash
# مشاهده Logs
docker-compose logs -f

# یا برای سرویس خاص
docker-compose logs -f merchant-service
```

## 🔐 تنظیمات امنیتی اولیه

### 1. تغییر رمزهای پیش‌فرض

```bash
# تغییر رمز Database
# تغییر رمز Redis
# تغییر JWT_SECRET
```

### 2. تنظیم Firewall

```bash
# باز کردن پورت‌های لازم
sudo ufw allow 3000/tcp  # API
sudo ufw allow 5432/tcp  # PostgreSQL (فقط داخلی)
```

### 3. تنظیم SSL/TLS

```bash
# نصب Certificate
# تنظیم Reverse Proxy (Nginx)
```

## 📊 دسترسی اولیه

پس از نصب، می‌توانید با حساب کاربری پیش‌فرض وارد شوید:

- **Username**: admin
- **Password**: (در فایل تنظیمات اولیه)

⚠️ **هشدار**: بلافاصله پس از اولین ورود، رمز عبور را تغییر دهید!

## 🐛 عیب‌یابی

### مشکل اتصال به Database

```bash
# بررسی وضعیت PostgreSQL
sudo systemctl status postgresql

# بررسی اتصال
psql -U psp_user -d psp_db -h localhost
```

### مشکل اتصال به Redis

```bash
# بررسی وضعیت Redis
redis-cli ping
```

### مشکل در اجرای Docker

```bash
# بررسی وضعیت Containers
docker ps -a

# مشاهده Logs
docker logs <container-id>
```

## 📚 مراجع بیشتر

- [معماری سیستم](/docs/getting-started/architecture)
- [پیکربندی ماژول‌ها](/docs/modules)

## 🆘 پشتیبانی

در صورت بروز مشکل، لطفاً:

1. بررسی کنید که تمام پیش‌نیازها نصب شده‌اند
2. Logs سیستم را بررسی کنید
3. مستندات را مطالعه کنید
4. با تیم پشتیبانی تماس بگیرید

