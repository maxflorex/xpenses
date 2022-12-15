import { InMemoryCache } from '@apollo/client'


// PREVENT CACHE WARNING

export const cache: any = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                expenses: {
                    merge(existing, incoming) {
                        return incoming
                    }
                },

            }
        }
    }
})