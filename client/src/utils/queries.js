import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;
export const QUERY_SINGLE_POSTS  = gql`
  query getSinglePosts($postsId: ID!) {
    posts(postsId: $postsId) {
      _id
      postsText
      postsAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;
