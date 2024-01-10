import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <header>Header</header>
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
