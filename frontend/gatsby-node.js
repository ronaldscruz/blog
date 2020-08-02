const slugify = require("slugify")

const createPostRoutes = async (graphql, actions, reporter) => {
  const PostTemplate = require.resolve("./src/templates/Post/index.tsx")

  const postResult = await graphql(`
    {
      allStrapiPost {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  if (postResult.errors) {
    reporter.panicOnBuild("Error fetching posts")
  }

  postResult.data.allStrapiPost.edges.forEach(({ node: { id, title } }) => {
    const slug = slugify(title, {
      replacement: "-",
      lower: true,
    })

    actions.createPage({
      path: `post/${slug}`,
      component: PostTemplate,
      context: {
        id,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPostRoutes(graphql, actions, reporter)
}
