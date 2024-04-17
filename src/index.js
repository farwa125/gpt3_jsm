import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App'; // Remove '.css' extension
import './index.css';

createRoot(document.getElementById('root')).render(<App />);
