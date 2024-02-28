export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Komstart Template',
  url: 'http://localhost:3000',
  ogImage: 'http://localhost:3000/og.jpg',
  creator: 'Ekom Enyong',
  description: 'A Next.js 14 barebones starter template.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    twitter: 'https://twitter.com/ekomenyong',
    github: 'https://github.com/ekomenyong/komstart',
    docs: 'https://ui.shadcn.com',
  },
};
