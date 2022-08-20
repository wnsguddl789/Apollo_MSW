import { gql } from '@apollo/client';

const FETCH_USER_INFO_QUERY = gql`
  query fetchUserInfo {
    user {
      username
      firstName
    }
  }
`;

const SIGN_IN_MUTATION = gql`
  mutation Login($username: String!) {
    login(username: $username) {
      username
    }
  }
`;

const GET_REPOSITORY = gql`
  query RepositoryQuery($repository: String!, $owner: String!) {
    repository(name: $repository, owner: $owner) {
      id
      name
      description
      stargazerCount
    }
  }
`;

export { SIGN_IN_MUTATION, GET_REPOSITORY, FETCH_USER_INFO_QUERY };
