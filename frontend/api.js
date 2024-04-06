// import necessary module
import sanityClient from "./sanity";

// function to execute a query with error handling
let sanityQuery = (query, params) => {
  return sanityClient.fetch(query, params).catch((error) => {
    // log error if fetching data fails
    console.error("Error fetching data from Sanity:", error);
    // throw the error for further handling
    throw error;
  });
};

// function to fetch featured categories with their dishes
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

// function to fetch all categories
export const getCategories = () => {
  return sanityQuery(` *[_type == "category"] `);
};

// function to fetch a featured category by its ID
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

// function to fetch featured items with their details
export const getFeaturedItems = () => {
  return sanityQuery(`  
  *[_type == "featuredItems"] {
    ...,
    dishes[]->{
      ...
    }
  }`);
};
