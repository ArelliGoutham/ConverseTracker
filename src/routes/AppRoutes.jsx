import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import Dashboard from '../pages/dashboard';

import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/header/header';
import { useEffect, useState } from 'react';
import Tourney from '../pages/tourney';

const AppRoutes = () => {
  // const navigate = useNavigate();

  // let isAuthenticated = false;
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const getAuthentication = (currentStatus, navigate) => {
  //     console.log('Recived boolean:', currentStatus);
  //     // isAuthenticated = currentStatus;
  //     setIsAuthenticated(currentStatus);
  //     console.log(isAuthenticated);
  //     navigate('/home');
  // }

  return (
    <>
      <Router>
        {/* <Header isAuthenticated = {isAuthenticated}/> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tourneys" element={<Tourney />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />

          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />}></PrivateRoute>}
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
