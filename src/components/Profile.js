import React from "react";
import {
  IconButton,
  Typography,
  Grid,
  Box,
  Paper,
  Button,
  Avatar,
  Link,
  TextField,
  CssBaseline,
  Tab,
  Tabs
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Projects from "./Projects";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RoomIcon from "@mui/icons-material/Room";
import SendIcon from "@mui/icons-material/Send";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Edit from "@mui/icons-material/Edit"

const Profile = () => {
  const theme = createTheme();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{          
          padding: "10vh",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          component={Paper}
          elevation={6}
          square
          sx={{ height: "fit-content", borderRadius: "10px" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                mb: 1,
                height: "50px",
                width: "50px",
                src: "url(https://source.unsplash.com/random)",
                alt: "user",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Typography component="h1" variant="h5">
              Thomas Mwaniki
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography component="h1" variant="subtitle2">
                Top Artist
              </Typography>
              <Typography component="h3" variant="subtitle2">
                Natulenge Juu!
              </Typography>             
              <Typography component="h3" variant="subtitle2">
                <RoomIcon />
                Nairobi, Kenya
              </Typography>

              <hr />   
              <Typography component="h3" sx={{ fontWeight: "bold" }}>
                Top Tools
              </Typography>
              <Typography component="h3" variant="subtitle2">
                InDesign
              </Typography>
              <Typography component="h3" variant="subtitle2">
                Photoshop
              </Typography>
              <Typography component="h3" variant="subtitle2">
                Dreamweaver
              </Typography>

              <hr />   
              
              <Button
                variant="contained"
                fullWidth
                startIcon={<Edit />}
                sx={{ m: 1 }}
              >
                Edit Profile
              </Button>            

             
            </Box>
          </Box>
        </Grid>
        <Grid
          spacing={2}
          item
          xs={false}
          sm={6}
          md={9}
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           <Projects />                  
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Profile;
