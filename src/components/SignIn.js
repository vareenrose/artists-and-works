import Avatar from '@mui/material/Avatar';
import '../App.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/logo.svg'
import aw from '../images/aw.svg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {`Copyright © Artists & Works ${new Date().getFullYear()}.`}            
    </Typography>
  );
}

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
              <LockOutlinedIcon />
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

              <Button variant="outlined" sx={{ mt: 3 }}  startIcon={<GoogleIcon />} >
                Continue With Google
              </Button>
              <Button variant="outlined" sx={{ mt: 1, mb: 1 }} startIcon={<FacebookIcon />}>
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