import { Avatar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from './store';

export default function Home() {
  const userDetails = useSelector((state: RootState) => state.user.details);
  if (!userDetails) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Avatar src={userDetails?.pictureUrl} />
      <Typography component="h1" variant="h5">
        Hi {userDetails?.firstName} {userDetails?.lastName}
      </Typography>
    </>
  );
}
