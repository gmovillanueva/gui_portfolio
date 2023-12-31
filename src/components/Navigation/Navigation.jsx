'use client';

import NavStyle from '@/components/Navigation/navigation.module.scss';
import LogoSVG from '@/components/_icons/LogoSVG';
import { navLinks } from '@/utils/configs/baseConfig';
import useScrollDirection from '@/utils/hooks/useScrollDirection';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Navigation() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection('down');

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  /*  let navToggle = NavStyle.base;

  if (scrollDirection === 'down' && !scrolledToTop) {
    navToggle = clsx(NavStyle.base, NavStyle.hide);
    return navToggle;
  } else if (scrollDirection === 'up' && !scrolledToTop) {
    navToggle = clsx(NavStyle.base, NavStyle.show);
    return navToggle;

  }*/

  const navToggle = () => {
    if (scrollDirection === 'down' && !scrolledToTop) {
      return clsx(NavStyle.base, NavStyle.base_hide);
    } else if (scrollDirection === 'up' && !scrolledToTop) {
      return clsx(NavStyle.base, NavStyle.base_show);
    } else {
      return NavStyle.base;
    }
  };

  const userLogo = (
    <div
      className={NavStyle.logo}
      tabIndex='-1'
    >
      <a
        href='/'
        aria-label='home'
      >
        <div className={NavStyle.logoMain}>
          <LogoSVG />
        </div>
      </a>
    </div>
  );
  return (
    <header className={navToggle()}>
      <nav
        id='header-nav'
        className={NavStyle.nav}
      >
        <>{userLogo}</>

        <div className={NavStyle.listContainer}>
          <ol className={NavStyle.list}>
            {navLinks &&
              navLinks.map(({ url, name }, index) => (
                <li
                  key={index}
                  className={NavStyle.item}
                >
                  <Link
                    href={url}
                    className={NavStyle.link}
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </ol>
        </div>
        <div id='header-nav-button'></div>
      </nav>
    </header>
  );
}
