import { GoogleLogin } from '@react-oauth/google';

interface GoogleSignInProps {
  onSuccess: (idToken: string) => void;
}

function GoogleSignIn(props: GoogleSignInProps) {
  const onSuccess = (res: any) => {
    console.log(`success: ${res.credential}`);
    props.onSuccess(res.credential);
  };

  const onFail = () => {
    console.log(`fail`);
  };

  return <GoogleLogin onSuccess={onSuccess} onError={onFail} />;
}

export default GoogleSignIn;
