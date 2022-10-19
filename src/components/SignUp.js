import { Google, Facebook, LockOutlined } from "@mui/icons-material";
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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../images/logo.svg";
import aw from "../images/aw.svg";
import Copyright from "./Copyright";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();

  const [sign_up_form, set_sign_up_form] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handle_Sign_up_form_change = (e) => {
    const { name, value } = e.target;
    set_sign_up_form((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(sign_up_form);
    let form_data = new FormData();
    form_data.append("name", "name");
    form_data.append("email", "email");
    form_data.append("password", "password");
    form_data.append("confirm_password", "password");

    localStorage.setItem("user_data", JSON.stringify(sign_up_form));
    navigate("/");

    fetch("https://cool-artists.herokuapp.com/api/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: form_data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          localStorage.setItem(form_data, "user_data");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          backgroundImage: "url(https://source.unsplash.com/random)",
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
          container
          spacing={2}
          item
          xs={false}
          sm={3}
          md={6}
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item>
            <img src={aw} alt="text" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          component={Paper}
          elevation={6}
          square
          sx={{ height: "80vh", mt: "10vh", mb: "10vh", borderRadius: "10px" }}
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mb: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create A New Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Username"
                name="name"
                value={sign_up_form.name}
                onChange={handle_Sign_up_form_change}
                autoComplete="name"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={sign_up_form.email}
                onChange={handle_Sign_up_form_change}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={sign_up_form.password}
                onChange={handle_Sign_up_form_change}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="dob"
                label="Date of Birth"
                type="date"
                id="dob"
              />
              <Button
                type="submit"
                size="medium"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>

              <Grid item sx={{ textAlign: "right" }}>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>

              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={3}
          md={3}
          sx={{
            backgroundColor: "transparent",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
