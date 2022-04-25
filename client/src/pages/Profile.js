import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME , QUERY_USER_POSTS} from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  console.log("Logged in", user.username);
  // const { loading1, data1 } = useQuery(QUERY_USER_POSTS, {
  //   variables:{username: user.username}
  // });
  // console.log(data1); 

  



  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }







  console.log(user.username, "has", user.posts.length, "posts")

  for (let i = 0; i < user.posts.length; i++) {
    console.log(user.posts[i].postText)
  }


  const singlePostText = user.posts.map((number) =>
    <li>
      <a href="/me" style={{textDecoration: "none"}}>{number.postText}</a> {" "}
      <p>{number.createdAt}</p>
    </li>
  );
  // console.log("list items:",listItems[0])

  return (
    <div>
      <div className="profile_formatting mb-3">
        <h2 className=" bg-dark text-light p-3 mb-5">
          {/* Viewing {userParam ? `${user.username}'s` : 'your'} profile.  */}
          {user.username}'s posts. 
        </h2>

        <ul
          style= {{ listStyleType: "none" }}
        >
            <h2>{singlePostText}</h2>
        </ul>


        {/* <div className="col-12 col-md-10 mb-5">
          Your Posts
          <ul>
            {listItems}
          </ul>
        </div> */}
        {/* {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            Content Here
          </div>
        )} */}
        {/* <h2>View All my Posts</h2> */}
      </div>
    </div>
  );
};

export default Profile;
