import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Revita from './pages/projects/Revita';

// Base path từ vite.config.ts
const basePath = import.meta.env.BASE_URL;

// Component to handle GitHub Pages 404.html redirect
function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages 404.html redirect
    // URL format: /introduction/?/revita becomes /introduction/revita
    if (location.search.startsWith('?/')) {
      const path = location.search.slice(2).replace(/~and~/g, '&');
      navigate(path + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export default function AppRouter() {
  return (
    <BrowserRouter basename={basePath}>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="revita" element={<Revita />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
