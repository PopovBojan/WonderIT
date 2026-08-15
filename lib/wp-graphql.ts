const API_URL = "https://wonderit-wp-wordpress.server.wonderit.io/graphql";

type FeaturedImage = {
  node: {
    sourceUrl: string;
    altText?: string;
  };
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  slug: string;
  date: string;
  modified?: string;
  featuredImage?: FeaturedImage;
  categories?: { nodes: Array<{ name: string; slug: string }> };
  author?: { node?: { name: string } };
};

async function fetchAPI(
  query: string,
  { variables }: { variables?: Record<string, unknown> } = {},
) {
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

  if (!res.ok) {
    throw new Error(`WordPress API request failed with status ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(`Failed to fetch API: ${json.errors[0].message}`);
  }
  return json.data;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  let after: string | null = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchAPI(
      `
    query AllPosts($after: String) {
      posts(first: 100, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          excerpt
          slug
          date
          modified
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
      { variables: { after } },
    );

    posts.push(...((data?.posts?.nodes || []) as BlogPost[]));
    after = data?.posts?.pageInfo?.endCursor || null;
    hasNextPage = Boolean(data?.posts?.pageInfo?.hasNextPage && after);
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchAPI(
    `
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        title
        excerpt
        content
        slug
        date
        modified
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

  return (data?.post as BlogPost | null) || null;
}

export async function getProjects() {
  const data = await fetchAPI(
    `
    query GetProjects {
      projects(first: 100) {
        nodes {
          title
          projectFields {
            externalLink
            projectImageUrl
            techStack
            projectCategory
            projectDescription
          }
        }
      }
    }
    `
  );

  return data?.projects?.nodes || [];
}

export async function getTestimonialLogos() {
  const data = await fetchAPI(
    `
    query GetTestimonialLogos {
      testimonialLogos(first: 100) {
        nodes {
          title
          slug
          databaseId
          testimonialLogos {
            image
          }
        }
      }
    }
    `
  );

  return data?.testimonialLogos?.nodes || [];
}
