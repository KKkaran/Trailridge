import { gql } from "@apollo/client";

export const Query_PURCHASES = gql`
    query seePurchases {
        purchases {
            createdAt
            description
            price
            username
        }
    }










`