import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Guides',
      links: [
        { text: 'All Guides', href: getBlogPermalink() },
        { text: 'IDEs', href: getPermalink('ides', 'category') },
        { text: 'Frameworks', href: getPermalink('frameworks', 'category') },
        { text: 'DevOps', href: getPermalink('devops', 'category') },
        { text: 'Databases', href: getPermalink('databases', 'category') },
        { text: 'Cloud', href: getPermalink('cloud', 'category') },
        { text: 'Tutorials', href: getPermalink('tutorials', 'category') },
      ],
    },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Categories',
      links: [
        { text: 'IDEs', href: getPermalink('ides', 'category') },
        { text: 'Frameworks', href: getPermalink('frameworks', 'category') },
        { text: 'DevOps', href: getPermalink('devops', 'category') },
        { text: 'Databases', href: getPermalink('databases', 'category') },
        { text: 'Cloud', href: getPermalink('cloud', 'category') },
        { text: 'Tutorials', href: getPermalink('tutorials', 'category') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'All Guides', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
        { text: 'Affiliate Disclosure', href: getPermalink('/disclosure') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Disclosure', href: getPermalink('/disclosure') },
  ],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} CodeStackHub. All rights reserved.
  `,
};
