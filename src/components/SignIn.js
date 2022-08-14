import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography } from '@mui/material';
import { Google, Facebook, LockOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/logo.svg'
import aw from '../images/aw.svg'
import Copyright from './Copyright';
import { useNavigate } from "react-router-dom";



const theme = createTheme();




export default function SignIn() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/")
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main"
        sx={{ height: '100vh',
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
        <CssBaseline />
        <Grid container spacing={2}
          item
          xs={false}
          sm={3}
          md={6}
          sx={{            
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
            <Grid item>
                <img src={logo} alt='logo' />
            </Grid>
            <Grid item>
                <img src={aw} alt='text'/>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square sx={{ height: '70vh', mt: '15vh', mb: '15vh', borderRadius: '10px'  }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',              
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ mb: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                size='medium'                
                variant="contained"
                sx={{ mt: 3, mb: 2 }}                
              >
                Sign In
              </Button>
              <hr/>

              <Button variant="outlined" sx={{ mt: 3 }}  startIcon={<Google />} >
                Continue With Google
              </Button>
              <Button variant="outlined" sx={{ mt: 1, mb: 1 }} startIcon={<Facebook />}>
                Continue With Facebook
              </Button>
              <Grid container>
                <Grid item xs sx={{ textAlign: 'left' }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item sx={{ textAlign: 'right' }}>
                  <Link href="#" variant="body2">
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
            backgroundColor: 'transparent'
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}