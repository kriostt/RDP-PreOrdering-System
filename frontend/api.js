import sanityClient from "./sanity";

let sanityQuery = (query, params) => sanityClient.fetch(query, params);

export const getCategoriesWithItem = () => {
  return sanityQuery(`
  *[_type == "category"]{
    ...,
    dish[]->{
      ...
    }
  }   
    `);
};

export const getCategories = () => {
  return sanityQuery(`
    *[_type=='category'] `);
};
