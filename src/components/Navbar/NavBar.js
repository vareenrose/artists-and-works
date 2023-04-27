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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        OVERVIEW
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        WORKS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        MEDIA
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        PROVENANCE
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        EXPERIENCES
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        ARTWORKS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
