import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SimpleHeader from './SimpleHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-vh-100 d-flex flex-column">
      {isHomePage || isAuthPage ? <SimpleHeader /> : <Header />}
      <main className="flex-grow-1">
        {children}
      </main>
      {!isHomePage && (
        <footer className="bg-light text-center py-3 mt-auto">
          <div className="container">
            <span className="text-muted">© 2025 ContactView - Gestión de Contactos</span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
