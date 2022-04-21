import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

import Auth from "../../utils/auth";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import '../../styles/style.css'





import { translations } from '../../lib/localizedStrings';


translations.setLanguage('it');

const Header = () => {


  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  
  return (

    

    <header className="text-light mb-4 flex-row align-center">

      <h1>Lingr</h1>


    <div className="ml-auto p-2">
          {Auth.loggedIn() ? (
            <>
              {/* <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link> */}

              <button className="logout-btn btn btn-lg m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="login-btn btn btn-lg m-2" to="/login">
                {/* {translations.navbar.docs} */}
                {/* TODO: Fix above to show the correct translated language */}
                Login
              </Link>
              <Link className="signup-btn btn btn-lg m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>

    <Box sx={{ padding: '0px',width: '100%', bgcolor: "#3A0CA3" }}>
      <Tabs variant="fullWidth" TabIndicatorProps={{style: { marginBottom: "0px", background:'#FFB703'}}} value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab component={Link} label={<span style={{ fontSize: '20px', color: '#EEEEEE' }}>Home</span>} to="/" />
        
        {/* <Tab component={Link} label={`${Auth.getProfile().data.username}'s Page`} to="/me" /> */}
        <Tab component={Link} label={<span style={{ fontSize: '20px', color: '#EEEEEE' }}>My Page</span>} to="/me" />
        <Tab component={Link} label={<span style={{ fontSize: '20px', color: '#EEEEEE' }}>Make a Post</span>} to="/post" />
        {/* <Tab component={Link} label="Login" to="/login" /> */}
      </Tabs>
    </Box>
    

    



    </header>
  );
};

export default Header;
