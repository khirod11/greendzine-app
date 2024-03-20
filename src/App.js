
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Footer from './components/navbar/Footer';
import Header from './components/navbar/Header';
import User from './components/user/User';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    setShowFooter(location.pathname !== '/greendzine-app');
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/greendzine-app' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/user' element={<User />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
