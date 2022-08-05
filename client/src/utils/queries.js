import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            username
            email
            recipes {
                title
                definition
                username
                ingredients
            }
        }
    }
`;

export const QUERY_RECIPES = gql`
    query {
        recipes {
            _id
            title
            definition
            username
            ingredients
        }
    }
`;

export const QUERY_RECIPE = gql`
    query recipe($id: ID!) {
        recipe(_id: $id) {
            _id
            title
            definition
            username
            ingredients
        }
    }
`;


// export const QUERY_RECIPES = gql`
//     query recipes($username: String!) {
//         recipes(username: $username) {
//             title
//             definition
//             username
//             ingredients
//         }
//     }
// `;