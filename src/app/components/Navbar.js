'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent
} from '@/components/ui/sheet';
import { useState } from 'react';

const Navbar = () => {
  const navLinks = [
    { id: 1, navLinkname: 'Skills', navPath: '/pages/skills' },
    { id: 2, navLinkname: 'Works', navPath: '/pages/works' },
    { id: 3, navLinkname: 'Achievements', navPath: '/pages/achievements' },
    { id: 4, navLinkname: 'Connect', navPath: '/pages/connect' },
    { id: 5, navLinkname: 'AskMyAI', navPath: 'https://chatfolio-som.vercel.app/' },
  ];

  const pathname = usePathname();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <header className="text-white bg-slate-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
          <Link
            className="flex items-center justify-center font-poppins gap-1 mb-0"
            href="/"
          >
            <i className="ri-terminal-line text-4xl lg:text-5xl text-green-300 "></i>
            <span className="text-lg lg:text-2xl tracking-wider font-poppins font-semibold text-white">
              Somenath
            </span>
          </Link>
          <nav className="ml-auto flex flex-wrap items-center text-base tracking-wide font-poppins justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.navPath}
                className={`mr-5 hidden lg:block hover:text-green-500 ${
                  pathname === link.navPath &&
                  'border-b-2 border-green-500 text-green-500'
                }`}
              >
                {link.navLinkname}
              </Link>
            ))}
            <i
              className="block lg:hidden ri-menu-line text-2xl cursor-pointer text-green-300"
              onClick={() => setOpenDrawer(true)}
            ></i>
          </nav>
        </div>
      </header>

      <Sheet open={openDrawer} onOpenChange={setOpenDrawer}>
        <SheetContent className="bg-slate-800 flex flex-col gap-10 border-slate-800 items-center justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.navPath}
              className='text-white hover:text-green-300 text-xl font-poppins tracking-wider'
              onClick={() => setOpenDrawer(false)}
            >
              {link.navLinkname}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
