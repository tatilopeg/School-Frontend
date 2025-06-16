import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query {
    allEvents {
      id
      title
      name
      description
      date
    }
  }
`;
