import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Auth from "../../utils/auth";

// import { TabContext, Box, TabList, Tab, TabPanel, Tabs } from "@mui/base";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      








      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          {/* <h1 className="m-0">LINGR</h1> */}
          <Link className="text-light" to="/">
            <h1 className="m-0">LINGR</h1>
          </Link>
          <p className="m-0">x people lingring</p>
        </div>





      {/* TODO: FIX THIS */}
      <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Home" value="1" />
      <Tab label="My Page" value="2" />
      <Tab label="Make a Post" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1">
    <Link className="text-light" to="/me">
      {/* <h1 className="m-0">LINGR</h1> */}
    </Link>
  </TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <Link className="text-light" to="/me">
    <TabPanel value="3">Item Three</TabPanel>
  </Link>
</TabContext>




























        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
