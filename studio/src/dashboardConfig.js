export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4ace04f61242017c8e74a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sy7c5ipa',
                  apiId: 'f616a17d-ec53-4e87-a756-75536e3012a6'
                },
                {
                  buildHookId: '5e4ace044a65a40176ff915f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kdaqtxje',
                  apiId: '7ed54a48-a482-4683-afa8-17fef5ff6dc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slavisa82/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kdaqtxje.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
