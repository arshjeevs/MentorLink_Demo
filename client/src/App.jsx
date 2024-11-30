import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
// import Mentors from './pages/Mentors';
import Contact from './pages/Contact';
// import Login from './pages/auth/Login';
// import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="mentors" element={<Mentors />} /> */}
          <Route path="contact" element={<Contact />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="signup" element={<SignUp />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;