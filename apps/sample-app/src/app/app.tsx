import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import SignIn from './sign-in';
import Home from './home';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Layout>
  );
}
