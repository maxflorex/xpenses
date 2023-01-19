import { ApolloClient } from "@apollo/client";
import { cache } from './cache'


// APOLLO CLIENT

export const client: any = new ApolloClient({
    uri: 'https://xpenses-21xn.onrender.com/graphql',
    cache
})