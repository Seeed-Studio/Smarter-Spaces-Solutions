import * as path from 'node:path';
import { pluginCallstackTheme } from '@callstack/rspress-theme/plugin';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';
import { defineConfig } from 'rspress/config';

const DOCS_ROOT = path.join(__dirname, 'docs');
const SRC_ROOT = path.join(__dirname, 'src');

export default defineConfig({
  root: DOCS_ROOT,
  title: 'Smarter Spaces Solutions',
  lang: 'zh',
  icon: '/seeed-logo-round.webp',
  logo: {
    light: '/seeed-logo.svg',
    dark: '/seeed-logo.svg',
  },
  markdown: {
    checkDeadLinks: true,
  },
  globalStyles: path.join(SRC_ROOT, 'styles/index.css'),
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Smarter Spaces Solutions',
      description: 'Open-source initiative for smarter spaces: smart building, elder care, child-friendly environments, animal welfare.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: '智能空间解决方案',
      description: '开源智能空间计划：智能楼宇, 养老、儿童友好、动物福利',
    },
  ],
  themeConfig: {
    footer: {
      message: `© ${new Date().getFullYear()} Seeed Studio, Inc. All Rights Reserved.`,
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Seeed-Studio/Smarter-Spaces-Solutions',
      },
    ],
    lastUpdated: true,
    locales: [
      { lang: 'en', label: 'English', outlineTitle: 'On this page' },
      { lang: 'zh', label: '简体中文', outlineTitle: '本页目录', prevPageText: '上一页', nextPageText: '下一页' }
    ],
  },
  route: {
    cleanUrls: true,
  },
  plugins: [
    pluginCallstackTheme(),
    pluginFontOpenSans(),
    pluginOpenGraph()
  ],
});
