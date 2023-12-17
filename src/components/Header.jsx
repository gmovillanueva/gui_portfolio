import * as HeaderStyle from '@/styles/components/_header.module.scss';
import logoCenter from '@public/svg/logoWingCenter.svg';
import logoLeft from '@public/svg/logoWingLeft.svg';
import logoRight from '@public/svg/logoWingRight.svg';
import Image from 'next/image';
export default function Header() {
  return (
    <header className={HeaderStyle}>
      <nav
        id='header-nav'
        className={HeaderStyle.nav}
      >
        <div
          id='header-nav-logo'
          className={HeaderStyle.logo}
        >
          <Image
            src={logoLeft}
            alt='logoWingLeft'
          />
          <Image
            src={logoCenter}
            alt='logoWingCenter'
          />
          <Image
            src={logoRight}
            alt='logoWingRight'
          />
        </div>
        <div className={HeaderStyle.container}>
          <ol className={HeaderStyle.list}>
            <li className={HeaderStyle.listitem}>
              <a
                className={HeaderStyle.listlink}
                href='/#about'
              >
                About
              </a>
            </li>
            <li className={HeaderStyle.listitem}>
              <a
                className={HeaderStyle.listlink}
                href='/#experience'
              >
                Experience
              </a>
            </li>
            <li className={HeaderStyle.listitem}>
              <a
                className={HeaderStyle.listlink}
                href='/#projects'
              >
                Projects & Work
              </a>
            </li>
            <li className={HeaderStyle.listitem}>
              <a
                className={HeaderStyle.listlink}
                href='/#contact'
              >
                Contact
              </a>
            </li>
          </ol>
        </div>
        <div id='header-nav-button'></div>
      </nav>
    </header>
  );
}
