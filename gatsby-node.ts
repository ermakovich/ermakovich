import UnusedWebpackPlugin from 'unused-webpack-plugin'
import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import { CreatePagesArgs } from 'gatsby'

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions

  async function createCollectionPages(category: string, component: string) {
    const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/${category}/" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

    if (result.errors) {
      reporter.panicOnBuild(result.errors)
      return
    }

    // Create blog posts pages.
    const entries = (result.data as any).allMarkdownRemark.edges

    entries.forEach((entry, index) => {
      const previous =
        index === entries.length - 1 ? null : entries[index + 1].node
      const next = index === 0 ? null : entries[index - 1].node

      createPage({
        path: entry.node.fields.slug,
        component,
        context: {
          slug: entry.node.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  await createCollectionPages(
    'posts',
    path.resolve('./src/components/posts/post.tsx')
  )
  await createCollectionPages(
    'projects',
    path.resolve('./src/components/projects/project.tsx')
  )
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    plugins:
      stage === 'build-html'
        ? [
            new UnusedWebpackPlugin({
              directories: [path.join(__dirname, 'src')],
              exclude: ['*.md', '*.jpg', '*.jpeg', '*.png', '*.pdf', '*.d.ts'],
            }),
          ]
        : [],
  })
}
