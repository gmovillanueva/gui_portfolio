import * as HeaderStyle from '@/styles/components/_header.module.scss';
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
        ></div>
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
