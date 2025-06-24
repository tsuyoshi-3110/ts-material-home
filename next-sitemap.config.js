/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ts-Matelix-home.vercel.app",
  generateRobotsTxt: true, // ← robots.txt も自動生成
  sitemapSize: 5000,
  generateIndexSitemap: false, // ← sitemap-0.xml を生成しない
};
