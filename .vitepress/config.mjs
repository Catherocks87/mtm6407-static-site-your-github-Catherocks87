import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Portfolio",
  

  description: "Hello! Welcome to my portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-me' },
      { text: 'My Projects', link: '/my-projects' },
      { text: 'Resume', link: '/resume' },
      { text: 'Contact Me', link: '/contact-me' }

    ],

    sidebar: [
      {
        text: 'About Me',
        items: [
          { text: 'What I do?', link: '/about-me' },
        ]
      },
      {
        text: 'My Projects',
        items: [
          { text: 'Outfit Planner App', link: '/my-projects' },
          { text: 'eBook lead form pages design', link: '/my-projects' },
          { text: 'Website launch flyer', link: '/my-projects' }
        ]
      },
      {
        text: 'Resume',
        items: [
          { text: 'Education', link: '/resume' },
          { text: 'Experience', link: '/resume' },
          { text: 'Skills', link: '/resume' }
        ]
      },
      {
        text: 'Contact Me',
        items: [
          { text: 'Email', link: '/contact-me' },
          { text: 'LinkedIn', link: '/contact-me' },
          { text: 'GitHub', link: '/contact-me'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Catherocks87' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/catherine-manrique/' }
    ]
  }
})
