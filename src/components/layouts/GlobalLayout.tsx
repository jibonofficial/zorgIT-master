import { ReactNode } from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import ScrollToTop from '../common/ScrollToTop';

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
