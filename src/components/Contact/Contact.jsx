import * as ContactStyle from '@/components/Contact/contact.module.scss';
export default function Contact() {
  return (
    <div>
      <section id='contact'>
        <h2 className={ContactStyle.header}>Get in Touch</h2>
        <p>Feel free to reach out to me.</p>
      </section>
    </div>
  );
}
