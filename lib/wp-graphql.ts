const API_URL = "https://test-wp-site-wordpress.server.wonderit.io/graphql";

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(`Failed to fetch API: ${json.errors[0].message}`);
  }
  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `
  );

  return data?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        title
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data?.post;
}
