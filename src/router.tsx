import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import type { ReactNode } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Revita from './pages/projects/Revita';

// Base path từ vite.config.ts
const basePath = import.meta.env.BASE_URL;

// Detect if we're on GitHub Pages (production) or local development
const isGitHubPages = import.meta.env.PROD && window.location.hostname !== 'localhost';

// Router component with fallback
function Router({ children }: { children: ReactNode }) {
  if (isGitHubPages) {
    // Use HashRouter for GitHub Pages
    return <HashRouter basename={basePath}>{children}</HashRouter>;
  }
  // Use BrowserRouter for local development
  return <BrowserRouter basename={basePath}>{children}</BrowserRouter>;
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="revita" element={<Revita />} />
        </Route>
      </Routes>
    </Router>
  );
}
