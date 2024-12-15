/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio Website',
  description:
    'This is my portfolio website which contains my resume, my skillset, my projects and my achievements.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <ToastContainer />
        <script src="https://kit.fontawesome.com/1b20c7f767.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
