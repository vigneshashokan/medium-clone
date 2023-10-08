import {
  // useCurrentUser,
  createClient,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered "public", but you can use environment variables
   * if you want to differentiate between local dev and production
   */
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  /**
   * Set useCdn to `false` if your application requires the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN.
   */
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

/**
 * Setup a helper function for generating image URLs with only the asset reference data in your documents.
 */
export const urlFor = (source) => imageUrlBuilder(config).image(source);

// export const useCurrentUser = useCurrentUser(config);
