'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {

  const navLinks = [
    { id: 1, navLinkname: 'Skills', navPath: '/pages/skills' },
    { id: 2, navLinkname: 'Works', navPath: '/pages/works' },
    { id: 3, navLinkname: 'Achievements', navPath: '/pages/achievements' },
    { id: 4, navLinkname: 'Connect', navPath: '/pages/connect' },
  ];

  const pathname = usePathname();

  return (
    <div>
      <header className="text-white bg-slate-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
          <Link className="flex items-center justify-center font-poppins gap-1 mb-0" href='/'>
            <i className="ri-terminal-line text-5xl text-green-300 "></i>
            <span className="text-2xl tracking-wider font-poppins font-semibold text-white">
              Somenath
            </span>
          </Link>
          <nav className="ml-auto hidden lg:flex flex-wrap items-center text-base tracking-wide font-poppins justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.navPath}
                className={`mr-5 hover:text-green-500 ${pathname === link.navPath && 'border-b-2 border-green-500 text-green-500'}`}
              >
                {link.navLinkname}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
