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

  const handleLogoutNav = () => {
    navigate("/login");
  };

  const login_state = localStorage.getItem("user_data");

  let login_data = JSON.parse(login_state);
  let username = login_data && login_data.name;

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
        <hr />
        <a id="artists" className="menu-item" href="/list-artists">
          Artists
        </a>
        <a id="media" className="menu-item" href="/list-media">
          Media
        </a>
        <a id="art_works" className="menu-item" href="/art_works">
          Art Works
        </a>
        <a id="experiences" className="menu-item" href="/list-experiences">
          Experiences
        </a>
        <a id="provenance" className="menu-item" href="/list-provenance">
          Provenance
        </a>
      </Menu>
      {/* <Grid
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
          {!login_state && (
            <>
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
            </>
          )}
          {login_state && (
            <Grid item mx={1}>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleLogoutNav}
                sx={{
                  borderRadius: "50px",
                  color: "black",
                  borderColor: "black",
                }}
              >
                ({username}) Log Out
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid> */}
    </Box>
  );
}
