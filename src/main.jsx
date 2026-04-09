import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 再レンダリングの理解のため、一時的に<StrictMode>を外します
root.render(<App />);
