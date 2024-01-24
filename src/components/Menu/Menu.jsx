'use client';

import MenuStyle from '@/components/Menu/menu.module.scss';
import { navLinks } from '@/utils/configs/baseConfig';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [styleState, setStyleState] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusable;
  let firstFocusable;
  let lastFocusable;

  const setFocusable = () => {
    menuFocusable = [
      buttonRef.current,
      ...Array.from(navRef.current.querySelectorAll('a')),
    ];
    firstFocusable = menuFocusable[0];
    lastFocusable = menuFocusable[menuFocusable - 1];
  };

  const handleBackwardTab = (event) => {
    if (document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  };

  const handleForwardTab = (event) => {
    if (document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  };

  const onKeyDown = (event) => {
    switch (event.key) {
      case 'Escape':
      case 'Esc': {
        setMenuOpen(false);
        break;
      }

      case 'Tab': {
        if (menuFocusable && menuFocusable.length === 1) {
          event.preventDefault();
          break;
        }
        if (event.shiftKey) {
          handleBackwardTab(event);
        } else {
          handleForwardTab(event);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (event) => {
    if (event.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusable();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [onKeyDown, setFocusable]);

  useEffect(() => {
    let tempStyle = '';
    if (menuOpen) {
      tempStyle = MenuStyle.aside_show;
    } else {
      tempStyle = MenuStyle.aside_hide;
    }
    setStyleState(tempStyle);
  }, [menuOpen]);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <div className={MenuStyle.menu}>
      <div ref={wrapperRef}>
        <button
          className={MenuStyle.button}
          onClick={() => toggleMenu()}
          ref={buttonRef}
          aria-label='Menu'
        >
          <div className={MenuStyle.menuBox}>
            <div className={MenuStyle.menuBoxInner} />
          </div>
        </button>
      </div>
      <aside
        className={clsx(MenuStyle.aside, styleState)}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
      >
        <nav
          className={MenuStyle.nav}
          ref={navRef}
        >
          {navLinks && (
            <ol className={MenuStyle.outerList}>
              {navLinks.map(({ url, name }, index) => (
                <li
                  className={MenuStyle.innerList}
                  key={index}
                >
                  <Link
                    href={url}
                    className={MenuStyle.listLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </nav>
      </aside>
    </div>
  );
}

export default HamburgerMenu;
