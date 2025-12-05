# سرویس‌های یکپارچه‌سازی (Integration Services)

## معرفی

این ماژول مسئول اتصال سیستم به سرویس‌های بیرونی و مدیریت ارتباطات است.

## سرویس‌های یکپارچه

### 1. اتصال به شاپرک
- ارسال تراکنش‌ها
- دریافت پاسخ‌ها
- مدیریت خطاها

### 2. اتصال به سوئیچ بانک
- ارسال درخواست‌ها
- دریافت پاسخ‌ها
- مدیریت ارتباط

### 3. اتصال به سرویس‌های استعلام
- ثبت احوال
- سامانه شاهکار
- سازمان مالیات
- سایر سرویس‌ها

### 4. EventBus و Queue
- مدیریت صف‌ها
- Event-driven Architecture
- Kafka Integration

## معماری یکپارچه‌سازی

### API Gateway
- مدیریت درخواست‌ها
- احراز هویت
- Rate Limiting

### Message Queue
- RabbitMQ
- Apache Kafka
- مدیریت صف‌ها

### Event Bus
- توزیع رویدادها
- Pub/Sub Pattern
- Event Sourcing

## فرآیند یکپارچه‌سازی

1. **اتصال**
   - تنظیم اتصال
   - تست اتصال
   - فعال‌سازی

2. **ارسال درخواست**
   - ساخت درخواست
   - ارسال به سرویس
   - دریافت پاسخ

3. **مدیریت خطا**
   - تشخیص خطا
   - Retry Logic
   - ثبت خطا

## صفحات مرتبط

- [اتصال به شاپرک](/docs/modules/integration/shaparak)
- [اتصال به سوئیچ بانک](/docs/modules/integration/bank-switch)
- [سرویس‌های بیرونی](/docs/modules/integration/external-services)
- [Event Bus](/docs/modules/integration/event-bus)

