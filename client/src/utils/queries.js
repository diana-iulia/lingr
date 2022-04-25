import { gql } from "@apollo/client";

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
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;
export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;
// Gettting all posts for the logged in user
export const QUERY_USER_POSTS = gql`
  query getMyPosts($username: String!) {
    user(username: $username) {
      _id
      username
      posts {
          _id
          postText
          postAuthor
          createdAt
        }
    }
  }
`;
export const QUERY_SINGLE_POSTS = gql`
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
