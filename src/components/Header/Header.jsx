import HeaderStyle from '@/components/Header/header.module.scss';
import LogoSVG from '@/components/_icons/LogoSVG';
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
        <div className={HeaderStyle.logo_container}>
          <LogoSVG />
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

        <div className={HeaderStyle.list_container}>
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
