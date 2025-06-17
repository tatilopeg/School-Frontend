import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://school-backend-final.onrender.com/api/graphql',
  }),
  cache: new InMemoryCache()
})

export default client;