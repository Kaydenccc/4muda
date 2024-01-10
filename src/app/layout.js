import { Inter } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './globals.css';
import { NavbarSimple } from './components/Navbar';
import Theme from './components/Theme';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JQueen Property',
  description: 'Generated by create next app',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <main className="flex flex-col  justify-between">
            <NavbarSimple />
            {children}
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
