'use client';

import MenuStyle from '@/components/Menu/menu.module.scss';
import { navLinks } from '@/utils/configs/baseConfig';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';
import { useDrawerStore } from '@store/menuStore';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

function HamburgerMenu() {
  const { toggleDrawer: toggleDrawer } = useDrawerStore();
  const { openDrawer: curDrawerState } = useDrawerStore();
  const { closeDrawer: closeDrawer } = useDrawerStore();

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
        closeDrawer();
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
      closeDrawer();
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

  /*useEffect(() => {
    let tempStyle = '';
    const contentEl = document.getElementById('content');
    const particleEl = document.getElementById('background');
    const headerEl = document.getElementById('header');
    if (menuOpen) {
      tempStyle = MenuStyle.aside_show;
      contentEl && contentEl.classList.add(MenuStyle.aside_show_content);
      particleEl &&
        particleEl.classList.add(MenuStyle.aside_show_particleCanvas);
      headerEl && headerEl.classList.add(MenuStyle.aside_show_header);
    } else {
      tempStyle = MenuStyle.aside_hide;
      contentEl && contentEl.classList.remove(MenuStyle.aside_show_content);
      particleEl &&
        particleEl.classList.remove(MenuStyle.aside_show_particleCanvas);
      headerEl && headerEl.classList.remove(MenuStyle.aside_show_header);
    }
    setStyleState(tempStyle);
  }, [menuOpen]);*/

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => closeDrawer());

  useEffect(() => {
    const contentEl = document.getElementById('content');
    const particleEl = document.getElementById('background');

    if (curDrawerState) {
      contentEl && contentEl.classList.remove(MenuStyle.aside_hide_content);
      contentEl && contentEl.classList.add(MenuStyle.aside_show_content);
      particleEl &&
        particleEl.classList.remove(MenuStyle.aside_hide_particleCanvas);
      particleEl &&
        particleEl.classList.add(MenuStyle.aside_show_particleCanvas);
    } else {
      contentEl && contentEl.classList.remove(MenuStyle.aside_show_content);
      contentEl && contentEl.classList.add(MenuStyle.aside_hide_content);
      particleEl &&
        particleEl.classList.remove(MenuStyle.aside_show_particleCanvas);
      particleEl &&
        particleEl.classList.add(MenuStyle.aside_hide_particleCanvas);
    }
  }, [curDrawerState]);

  const formatNumber = (index) => {
    let value = index + 1;
    return `0${value}.`;
  };

  return (
    <div className={MenuStyle.menu}>
      <div ref={wrapperRef}>
        <button
          className={MenuStyle.button}
          onClick={toggleDrawer}
          ref={buttonRef}
          aria-label='Menu'
        >
          <svg
            className={MenuStyle.menuBox}
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className={
                curDrawerState
                  ? MenuStyle.checked_crossLines
                  : MenuStyle.unChecked_crossLines
              }
              d='M0 70l28-28c2-2 2-2 7-2h64'
            />
            <path
              className={
                curDrawerState
                  ? MenuStyle.checked_centerLine
                  : MenuStyle.unChecked_centerLine
              }
              d='M0 50h99'
            />
            <path
              className={
                curDrawerState
                  ? MenuStyle.checked_crossLines
                  : MenuStyle.unChecked_crossLines
              }
              d='M0 30l28 28c2 2 2 2 7 2h64'
            />
          </svg>
        </button>
        {/*<MenuCheckBox />*/}
        {/*        <button
          className={MenuStyle.button}
          onClick={toggleDrawer}
          ref={buttonRef}
          aria-label='Menu'
        >
          <div className={MenuStyle.menuBox}>
            <div className={MenuStyle.menuBoxInner} />
          </div>
        </button>*/}
      </div>
      <aside
        className={clsx(
          MenuStyle.aside,
          curDrawerState ? MenuStyle.aside_show : MenuStyle.aside_hide,
        )}
        aria-hidden={!curDrawerState}
        tabIndex={curDrawerState ? 1 : -1}
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
                    onClick={() => closeDrawer()}
                  >
                    <span className={MenuStyle.nav_span}>
                      {formatNumber(index)}
                    </span>
                    {' ' + name}
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
