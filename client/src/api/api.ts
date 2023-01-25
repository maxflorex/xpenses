import { ApolloClient } from "@apollo/client";
import { cache } from './cache'


// APOLLO CLIENT

export const client: any = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache
})