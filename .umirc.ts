import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'interview',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  /** 打包输出路径 */
  outputPath: 'docs-dist',
  /** 站点模式 */
  mode: 'site',
  /** 解决html引用不到 js 和 css 的问题 */
  publicPath: './',
  /** 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存 */
  hash: true,
  /** 路由要改成 hash路由，不然打开页面也是空白的。 */
  history: { type: 'hash' },
  /** 开启webpack5 */
  webpack5: {},
  /** 开启mfsu */
  mfsu: {},
  /** 启用 sitemap.xml 自动生成特性 */
  sitemap: {
    hostname: 'https://huxinfeng.gitee.io',
  },
  /** 国际化 */
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // more config: https://d.umijs.org/config
});
