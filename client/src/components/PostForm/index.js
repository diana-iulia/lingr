import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const PostsForm = () => {
  const [postText, setPostsText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPosts, { error }] = useMutation(ADD_POST, {


    // refetchQueries: [QUERY_ME]


    // update(cache, { data: { addPosts } }) {
    //   try {
    //     const { posts } = cache.readQuery({ query: QUERY_POSTS });

    //     cache.writeQuery({
    //       query: QUERY_POSTS,
    //       data: { posts: [addPosts, ...posts] },
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }

      // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, posts: [...me.posts, addPosts] } },
      // });
    // },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const postAuthor = (Auth.getProfile().data.username)
    try {
      const { data } = await addPosts({
        variables: {
          postText,
          // postAuthor: Auth.getProfile().data.username,
        },
      });


      setPostsText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postsText' && value.length <= 280) {
      setPostsText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's on your mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="postsText"
                placeholder="Here's a new post..."
                value={postText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your posts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostsForm;
