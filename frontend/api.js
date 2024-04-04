import sanityClient from "./sanity";

// let sanityQuery = (query, params) => sanityClient.fetch(query, params);

let sanityQuery = (query, params) => {
  return sanityClient.fetch(query, params).catch((error) => {
    console.error("Error fetching data from Sanity:", error);
    throw error;
  });
};

export const getFeaturedCategories = () => {
  return sanityQuery(`
  *[_type == "featured"] {
    ...,
    categories[]->{
      ...,
      dishes[]->{
        ...
      }
    }
  }   
    `);
};

export const getCategories = () => {
  return sanityQuery(` *[_type == "category"] `);
};

export const getFeaturedCategoryById = (id) => {
  return sanityQuery(
    ` 
  *[_type == "featured" && _id == $id] {
    ...,
    categories[]->{
      ...,
      dishes[]->{
        ...
      }
    }
  } [0]
 `,
    { id }
  );
};

export const getFeaturedItems = () => {
  return sanityQuery(`  
  *[_type == "featuredItems"] {
    ...,
    dishes[]->{
      ...
    }
  }`);
};
