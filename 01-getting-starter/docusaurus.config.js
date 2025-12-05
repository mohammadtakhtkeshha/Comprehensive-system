// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'سیستم جامع مدیریت PSP',
  tagline: 'سامانه مدیریت پذیرندگان و پردازش تراکنش‌های بانکی',
  url: 'https://mohammadtakhtkeshha.github.io',
  baseUrl: '/Comprehensive-system/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  organizationName: 'mohammadtakhtkeshha', // GitHub username
  projectName: 'Comprehensive-system', // Repository name
  deploymentBranch: 'gh-pages',

  // i18n
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
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mohammadtakhtkeshha/Comprehensive-system/edit/main/',
        },
        blog: false, // غیرفعال کردن بلاگ
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'سیستم مدیریت PSP',
        logo: {
          alt: 'PSP Management System Logo',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
