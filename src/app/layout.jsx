import LayoutStyle from '@/app/layout.module.scss';
import Background from '@/components/Background/Background';
import Navigation from '@/components/Navigation/Navigation';
import '@/styles/_global.scss';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JetBrains_Mono } from 'next/font/google';

const jBrain = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata = {
  title: "Will's Portfolio GUI",
  description: "A Portfolio 'GUI' for William Newton's terminal portfolio.",
  generator: 'Next.js',
  applicationName: 'GUI Portfolio',
  keywords: ['Next.js', 'React', 'JavaScript', 'SCSS', 'Portfolio'],
  authors: [{ name: 'William' }],
  creator: 'William Newton',
  publisher: 'William Newton',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en' />
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
        <SpeedInsights />
      </body>
    </>
  );
}
