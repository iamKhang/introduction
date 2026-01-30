import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Revita from './pages/projects/Revita';
import Vodka from './pages/projects/Vodka';

// Base path từ vite.config.ts - normalize để loại bỏ trailing slash
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

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
  // Chỉ dùng basename nếu không phải root
  const basename = basePath === '/' ? undefined : basePath;
  
  return (
    <BrowserRouter basename={basename}>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="revita" element={<Revita />} />
          <Route path="vodka" element={<Vodka />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
