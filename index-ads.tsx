import React from 'react';
import ReactDOM from 'react-dom/client';
import AppAds from './AppAds';

// Entry point exclusivo para /consultoria2 (campanha Google Ads)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppAds />
    </React.StrictMode>
);
