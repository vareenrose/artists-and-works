import { Google, Facebook, LockOutlined } from '@mui/icons-material';
import { IconButton, Typography, Grid, Box, Paper, Button, Avatar, Link, TextField, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/logo.svg'
import aw from '../images/aw.svg'
import Copyright from './Copyright';


const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square sx={{ height: '80vh', mt: '10vh', mb: '10vh', borderRadius: '10px'  }}>
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
              Create A New Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Typography component="h1" variant="subtitle2">
                    Sign up with social
                </Typography>
                <IconButton aria-label="google-sign-up" size="large">
                    <Google />
                </IconButton>
                <IconButton aria-label="facebook-sign-up" size="large">
                    <Facebook />
                </IconButton>
              <hr/>
              <Typography component="h6" variant="subtitle2" sx={{ mb: 2 }}>
                    Sign up with email
                </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    />
                </Grid>
              </Grid>
              
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
                size='medium'                
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              
              
            <Grid item sx={{ textAlign: 'right' }}>
                <Link href="#" variant="body2">
                {"Already have an account? Sign In"}
                </Link>
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
