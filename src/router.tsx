import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { ReactNode } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

// Detect if we're on GitHub Pages (production) or local development
const isGitHubPages = import.meta.env.PROD && window.location.hostname !== 'localhost';

// Router component with fallback
function Router({ children }: { children: ReactNode }) {
  if (isGitHubPages) {
    // Use HashRouter for GitHub Pages
    return <HashRouter>{children}</HashRouter>;
  }
  // Use BrowserRouter for local development
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
