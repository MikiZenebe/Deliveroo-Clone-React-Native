import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

//Create connection
const client = sanityClient({
  projectId: "ubxm7l62",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

//Pull them down and get the url of image
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
