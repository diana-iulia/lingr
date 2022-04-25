const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }
 
  type Query {
    users: [User]
    user(username: String!): User
    me: User
    posts(username: String): [Post]
    getMyPosts(username: String!): User
  }

  type Mutation {
    addUser(
        username: String!, 
        email: String!, 
        password: String!)
        : Auth
    login(
        email: String!, 
        password: String!)
        : Auth
    addPost(
        postText: String!
    ) : Post
  }
`;

module.exports = typeDefs;
