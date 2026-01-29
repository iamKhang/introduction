import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen">
      <header>
        {/* Navigation */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Footer */}
      </footer>
    </div>
  );
}
