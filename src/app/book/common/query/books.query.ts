import gql from 'graphql-tag';

export const BOOKS_QUERY = gql`
  query {
    allBooks(orderBy: title_ASC) {
      uid
      title
      description
      authorName
      authorLastName
      screen {
        url
      }
    }
  }
`;
