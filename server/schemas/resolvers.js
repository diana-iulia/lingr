const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const post = await Post.create({
          postText,
          postAuthor: context.user.username,
        });

        // console.log(post);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        // console.log(context.user)

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
addComment: async (parent, { postId, commentText }, context) => {
  if (context.user) {
    return Post.findOneAndUpdate(
      { _id: postId },
      {
        $addToSet: {
          comments: { commentText, commentAuthor: context.user.username },
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }
  throw new AuthenticationError('You need to be logged in!');
},
removePost: async (parent, { postId }, context) => {
  if (context.user) {
    const post = await Post.findOneAndDelete({
      _id: postId,
      postAuthor: context.user.username,
    });

    await User.findOneAndUpdate(
      { _id: context.user._id },
      { $pull: { posts: post._id } }
    );

    return post;
  }
  throw new AuthenticationError('You need to be logged in!');
},
removeComment: async (parent, { postId, commentId }, context) => {
  if (context.user) {
    return Post.findOneAndUpdate(
      { _id: postId },
      {
        $pull: {
          comments: {
            _id: commentId,
            commentAuthor: context.user.username,
          },
        },
      },
      { new: true }
    );
  }
  throw new AuthenticationError('You need to be logged in!');
},
},
};


module.exports = resolvers;
