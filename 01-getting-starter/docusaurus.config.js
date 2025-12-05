// @ts-check
// Docusaurus configuration - fixed for GitHub Pages + RTL + i18n

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'سیستم جامع مدیریت PSP',
  tagline: 'سامانه مدیریت پذیرندگان و پردازش تراکنش‌های بانکی',

  // *** IMPORTANT for GitHub Pages ***
  url: 'https://mohammadtakhtkeshha.github.io',
  baseUrl: '/Comprehensive-system/',
  trailingSlash: false,

  organizationName: 'mohammadtakhtkeshha',
  projectName: 'Comprehensive-system',

  // GitHub Actions handles deployment — DO NOT set deploymentBranch
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.svg',

  // Localization
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'en'],
    localeConfigs: {
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mohammadtakhtkeshha/Comprehensive-system/edit/main/',
        },
        blog: false, // Blog disabled
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'سیستم مدیریت PSP',
      logo: {
        alt: 'لوگوی سیستم PSP',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'مستندات',
        },
        {
          type: 'docSidebar',
          sidebarId: 'modules',
          position: 'left',
          label: 'ماژول‌ها',
        },
        {
          href: 'https://github.com/mohammadtakhtkeshha/Comprehensive-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'مستندات',
          items: [
            {
              label: 'شروع کار',
              to: '/docs/intro',
            },
            {
              label: 'ماژول‌ها',
              to: '/docs/modules',
            },
          ],
        },
        {
          title: 'بانک رفاه کارگران',
          items: [
            {
              label: 'وب‌سایت بانک',
              href: 'https://www.refah-bank.ir',
            },
          ],
        },
      ],
      copyright: `حق نشر © ${new Date().getFullYear()} سیستم جامع مدیریت PSP - بانک رفاه کارگران.`,
    },

    // Code highlighting
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
