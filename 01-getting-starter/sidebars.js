// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'شروع کار',
      items: [
        'getting-started/overview',
        'getting-started/architecture',
        'getting-started/installation',
      ],
    },
  ],

  modules: [
    {
      type: 'category',
      label: '۱. مدیریت پذیرندگان',
      items: [
        'modules/merchant-management/overview',
        'modules/merchant-management/registration',
        'modules/merchant-management/kyc',
        'modules/merchant-management/contracts',
        'modules/merchant-management/mid-tid-mapping',
      ],
    },

    {
      type: 'category',
      label: '۲. مدیریت ترمینال و انبار',
      items: ['modules/terminal-management/overview'],
    },

    {
      type: 'category',
      label: '۳. پردازش تراکنش و تسویه',
      items: ['modules/transaction-processing/overview'],
    },

    {
      type: 'category',
      label: '۴. مانیتورینگ و رخدادها',
      items: ['modules/monitoring/overview'],
    },

    {
      type: 'category',
      label: '۵. پشتیبانی و عملیات',
      items: ['modules/support/overview'],
    },

    {
      type: 'category',
      label: '۶. مالی و حسابداری',
      items: ['modules/finance/overview'],
    },

    {
      type: 'category',
      label: '۷. امنیت و مدیریت ریسک',
      items: ['modules/security/overview'],
    },

    {
      type: 'category',
      label: '۸. توسعه کسب‌وکار',
      items: ['modules/business-development/overview'],
    },

    {
      type: 'category',
      label: '۹. ساختار سازمانی',
      items: ['modules/organization/overview'],
    },

    {
      type: 'category',
      label: '۱۰. گزارش‌ها و تحلیل',
      items: ['modules/reporting/overview'],
    },

    {
      type: 'category',
      label: '۱۱. مدیریت کاربران و دسترسی',
      items: ['modules/user-management/overview'],
    },

    {
      type: 'category',
      label: '۱۲. اعلان‌ها و ارتباطات',
      items: ['modules/notifications/overview'],
    },

    {
      type: 'category',
      label: '۱۳. سرویس‌های یکپارچه‌سازی',
      items: ['modules/integration/overview'],
    },
  ],
};

module.exports = sidebars;
