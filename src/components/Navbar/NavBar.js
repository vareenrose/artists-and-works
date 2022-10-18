import { useState } from "react";
import { Tabs, Tab, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";

export default function NavBar() {
  let navigate = useNavigate();
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    event.preventdefault();
    setValue(newValue);
  };

  const handleLogoNav = () => {
    console.log("logo navigated");
    navigate("/");
  };

  return (
    <Box sx={{ width: "100%", m: 1 }}>
      <Menu>
        <a className="menu-item--small" href="/">
          Home
        </a>
        <a id="home" className="menu-item" href="/profile">
          Profile
        </a>
        <a id="about" className="menu-item" href="/create">
          Post Content
        </a>
        <a id="contact" className="menu-item" href="/carousel">
          carousel
        </a>
      </Menu>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
      >
        <Grid
          container
          item
          spacing={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Grid item mx={1}>
            <Link to="login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  borderRadius: "50px",
                  color: "black",
                  borderColor: "black",
                }}
              >
                Log In
              </Button>
            </Link>
          </Grid>
          <Grid item mx={1}>
            <Link to="signup" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="medium"
                sx={{ borderRadius: "50px", backgroundColor: "black" }}
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
