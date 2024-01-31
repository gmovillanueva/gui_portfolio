import LayoutStyle from '@/app/layout.module.scss';
import Background from '@/components/Background/Background';
import Navigation from '@/components/Navigation/Navigation';
import '@/styles/_global.scss';
import Helmet from '@components/Helmet/Helmet';
import { JetBrains_Mono } from 'next/font/google';

const jBrain = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata = {
  title: 'Portfolio',
  description: 'Created by Will Newton',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en' />
      <Helmet />
      <body className={jBrain.className}>
        <div
          id='layoutBorder'
          className={LayoutStyle.borderRing}
        >
          <div
            id='root'
            className={LayoutStyle.root}
          >
            <Background />
            <Navigation />
            <div id='content'>{children}</div>
          </div>
        </div>
      </body>
    </>
  );
}
