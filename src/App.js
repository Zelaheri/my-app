import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import RecoveryPage from "./pages/recoverypage"
import NotFound from "./pages/notfound";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recoverypage" element={<RecoveryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
