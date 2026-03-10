import React from 'react';
import ReactDOM from 'react-dom/client';
import AShApp from './App.jsx';

// Simple storage polyfill for standalone web (replaces Claude artifact storage)
if (!window.storage) {
  const store = {};
  window.storage = {
    get: async (key) => {
      const val = localStorage.getItem(`ash_${key}`);
      return val ? { key, value: val } : null;
    },
    set: async (key, value) => {
      localStorage.setItem(`ash_${key}`, typeof value === 'string' ? value : JSON.stringify(value));
      return { key, value };
    },
    delete: async (key) => {
      localStorage.removeItem(`ash_${key}`);
      return { key, deleted: true };
    },
    list: async (prefix) => {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k.startsWith(`ash_${prefix || ''}`)) keys.push(k.replace('ash_', ''));
      }
      return { keys };
    },
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AShApp />
  </React.StrictMode>
);
