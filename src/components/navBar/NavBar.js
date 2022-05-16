import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Adb from "@material-ui/icons/Adb";

import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: "2.3rem",
  },
}));

const NavBar = ({ getGlobalData }) => {
  const classes = usestyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Adb />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Covid Tracker Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
