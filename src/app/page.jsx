import Home from '@/pages/Home';
import * as RootStyle from './page.module.scss';

export default function App() {
  return (
    <div
      id='root'
      className={RootStyle.root}
    >
      <Home />
    </div>
  );
}
