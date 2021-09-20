import { gql } from "@apollo/client"

export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`

export const SIGN_UP_MUTATION = gql`
  mutation signUp($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, password: $password, username: $username) {
      token
      user
    }
  }
`

export const JOIN_COMMUNITY_MUTATION = gql`
  mutation joinCommunity($userId: String!, $communityId: String!) {
    joinCommunity(userId: $userId, communityId: $communityId) {
      status
    }
  }
`
