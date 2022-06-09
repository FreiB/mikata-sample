import { Avatar, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleSignIn from './google-sign-in';
import { useNavigate } from 'react-router-dom';
import { verifyLoginThunk } from './userSlice';
import { useAppDispatch } from './hooks';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLoginSuccess = (idToken: string) => {
    dispatch(verifyLoginThunk(idToken)).then((success) => {
      if (success) {
        navigate('/home');
      }
    });
  };
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box sx={{ mt: 1 }}>
        <GoogleSignIn onSuccess={onLoginSuccess} />
      </Box>
    </>
  );
}
