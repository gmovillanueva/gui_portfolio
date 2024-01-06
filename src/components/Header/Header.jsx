import HeaderStyle from '@/components/Header/header.module.scss';
import LogoSVG from '@/components/_icons/LogoSVG';
import LogoSpinner from '@/components/_icons/LogoSpinner';
import { navLinks } from '@/utils/configs/baseConfig';
import Link from 'next/link';
export default function Header() {
  const userLogo = (
    <div
      className={HeaderStyle.logo}
      tabIndex='-1'
    >
      <a
        href='/'
        aria-label='home'
      >
        <div className={HeaderStyle.logoContainer}>
          <div className={HeaderStyle.logoSpinner}>
            <LogoSpinner />
          </div>
          <div className={HeaderStyle.logoMain}>
            <LogoSVG />
          </div>
        </div>
      </a>
    </div>
  );
  return (
    <header className={HeaderStyle.base}>
      <nav
        id='header-nav'
        className={HeaderStyle.nav}
      >
        <>{userLogo}</>

        <div className={HeaderStyle.listContainer}>
          <ol className={HeaderStyle.list}>
            {navLinks &&
              navLinks.map(({ url, name }, index) => (
                <li
                  key={index}
                  className={HeaderStyle.item}
                >
                  <Link
                    href={url}
                    className={HeaderStyle.link}
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
