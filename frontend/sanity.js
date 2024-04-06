// import necessary modules
import { createClient } from "@sanity/client";
import imageBuilder from "@sanity/image-url";

// create a Sanity client instance
export const client = createClient({
  projectId: "6dspwvza",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

// create an image builder instance
const builder = imageBuilder(client);

// function to generate URLs for Sanity images
export const urlFor = (source) => builder.image(source);

// export the client instance
export default client;
