import React, { useEffect, useState } from 'react';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import { Snackbar } from '@mui/material';
import { useDispatch } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from './Header';
import Copyright from './Copyright';
// import { User } from '../../entities/User';
import { sendAsync } from '../../message-control/renderer';
import ConnectionObject from '../../utils/connectionObject';
import actions from "../../store/actions";
import SignUp from './SignUp';

export default function SignIn() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    createConnection(ConnectionObject).catch(console.error)
  }, [])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendAsync(`SELECT * FROM users WHERE email="${data.get('email')!}" AND password="${data.get('email')!}"`).then((result: any[]) => {
      dispatch(actions.users.processSignIn())

    }).catch(() => {
      setOpen(true);
    });

  };

  return (
    <>
      {isSignIn ?
        <>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Invalid email and password"
          />
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Header />
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />

              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Button onClick={() => setIsSignIn(false)}>
                      {"Don't have an account? Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright />
          </Container></>
        :
        <SignUp setIsSignIn={setIsSignIn} />
      }
    </>
  );
}