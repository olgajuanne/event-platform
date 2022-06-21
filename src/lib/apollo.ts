import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oh9j5005wl01z4d50v26ac/master',
  cache: new InMemoryCache()
})