import gql from 'graphql-tag';

export const BOOK_QUERY = gql`
  query getBookById($id: String) {
    book(filter: {uid: {eq: $id}}) {
      uid
      title
      description
      authorName
      authorLastName
      date
      progress
      pages
      screen {
        url
      }
    }
  }
`;
