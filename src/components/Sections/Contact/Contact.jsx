import ContactStyle from '@components/Sections/Contact/contact.module.scss';
import { email } from '@utils/configs/baseConfig';
import clsx from 'clsx';
export default function Contact() {
  let customHeader = clsx(ContactStyle.header, ContactStyle.topLine);
  return (
    <section
      id='contact'
      className={ContactStyle.section}
    >
      <h2 className={customHeader}>04. Interested?</h2>
      <h2 className={ContactStyle.title}>Get in touch!</h2>
      <p>Feel free to reach out to me.</p>
      <a
        className={ContactStyle.emailLink}
        href={`mailto:${email}`}
      >
        Reach out.
      </a>
    </section>
  );
}
