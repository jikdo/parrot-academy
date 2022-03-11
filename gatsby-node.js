const path = require('path');

exports.createPages = async({graphql, actions}) =>{
  const {createPage} = actions;

  const gettingStartedQueryResults = await graphql(
    `query {
      allMdx(filter: {frontmatter: {category: {eq: "getting-started"}}}) {
        nodes {
          id
          slug
          frontmatter {
            category
            date
            title
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
            hero_image_alt  
          }
          body
        }
      }
    }`
  );

  const howToQueryResults = await graphql(
    `query {
      allMdx(filter: {frontmatter: {category: {eq: "how-to"}}}) {
        nodes {
          id
          slug
          frontmatter {
            category
            date
            title
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
            hero_image_alt  
          }
          body
        }
      }
    }`
  );

  const strategiesQueryResults = await graphql(
    `query {
      allMdx(filter: {frontmatter: {category: {eq: "strategies"}}}) {
        nodes {
          id
          slug
          frontmatter {
            category
            date
            title
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
            hero_image_alt  
          }
          body
        }
      }
    }`
  );


  const template = path.resolve('src/components/ContentDetail.js');
  

  gettingStartedQueryResults.data.allMdx.nodes.forEach(node => {
    
    createPage({
      path: `/getting-started/${node.slug}`,
      component: template,
      context: {
        data: node
      }
    });
  });

  howToQueryResults.data.allMdx.nodes.forEach(node => {

    createPage({
      path: `/how-to/${node.slug}`,
      component: template,
      context: {
        data: node
      }
    });
  });

  strategiesQueryResults.data.allMdx.nodes.forEach(node => {
  
    createPage({
      path: `/strategies/${node.slug}`,
      component: template,
      context: {
        data: node
      }
    });
  });
}

