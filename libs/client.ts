import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'onlymyblog',
  apiKey: process.env.API_KEY as string,
});