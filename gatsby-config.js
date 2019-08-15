import secrets from './secrets';

module.exports = {
  siteMetadata: {
    title: 'Knowit Praha 2019',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: secrets.AIRTABLE.API_SECRET,
        baseId: secrets.AIRTABLE.BASE_ID,
        tableName: 'CMS',
        tableView: 'published',
        queryName: ''
      }
    },
  ],
  pathPrefix: '/',
};
