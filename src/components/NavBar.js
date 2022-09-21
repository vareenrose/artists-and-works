import { useState } from "react";
import { Tabs, Tab, Box, Grid, Button } from "@mui/material";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogoNav = () => {
    console.log("logo navigated");
    navigate("/");
  };

  return (
    <Box sx={{ width: "100%", m: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
      >
        <Grid container item spacing={2}>
          <Grid item sx={{}}>
            <img
              src={logo}
              alt="logo"
              onClick={handleLogoNav}
              style={{ height: "80%", width: "80%" }}
            />
          </Grid>
          <Grid item>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" href="/profile" label="Profile" />
              <Tab value="two" href="/create" label="Post Content" />
              <Tab value="three" href="/carousel" label="Carousel" />
            </Tabs>
          </Grid>
        </Grid>
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
