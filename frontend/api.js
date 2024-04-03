import sanityClient from "./sanity";

let sanityQuery = (query, params) => sanityClient.fetch(query, params);

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
