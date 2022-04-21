import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((posts) => (
          <div key={posts._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${posts.postAuthor}`}
                >
                  {posts.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this post on {posts.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this post on {posts.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{posts.postText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/post/${posts._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
