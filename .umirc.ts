import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'interview',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  /**
   * 打包输出路径
   */
  outputPath: 'docs-dist',
  /**
   * 站点模式
   */
  mode: 'site',
  /**
   * 解决html引用不到 js 和 css 的问题
   */
  publicPath: './',
  // more config: https://d.umijs.org/config
});
