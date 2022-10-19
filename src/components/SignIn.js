import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { Google, Facebook, LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../images/logo.svg";
import aw from "../images/aw.svg";
import Copyright from "./Copyright";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  let navigate = useNavigate();

  const [sign_in_form, set_sign_in_form] = useState({
    password: "",
    email: "",
  });

  const handle_Sign_in_form_change = (e) => {
    const { name, value } = e.target;
    set_sign_in_form((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    localStorage.setItem("user_data", JSON.stringify(sign_in_form));
    fetch("https://cool-artists.herokuapp.com/api/login", {
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
          sx={{ height: "80vh", mt: "15vh", mb: "15vh", borderRadius: "10px" }}
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
            <Avatar sx={{ mb: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={sign_in_form.email}
                autoFocus
                onChange={handle_Sign_in_form_change}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={sign_in_form.password}
                autoComplete="current-password"
                onChange={handle_Sign_in_form_change}
              />

              <Button
                type="submit"
                size="medium"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <hr />
              <Button variant="outlined" sx={{ mt: 3 }} startIcon={<Google />}>
                Continue With Google
              </Button>
              <Button
                variant="outlined"
                sx={{ mt: 1, mb: 1 }}
                startIcon={<Facebook />}
              >
                Continue With Facebook
              </Button>
              <Grid container>
                <Grid item xs sx={{ textAlign: "left" }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item sx={{ textAlign: "right" }}>
                  <Link href="/signup" variant="body2">
                    {"No account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
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
