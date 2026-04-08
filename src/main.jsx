import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* コンポーネントを画面に表示（HTMLのタグのように使用する） */}
    <App />
  </StrictMode>
);
