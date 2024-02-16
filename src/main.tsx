import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import { ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='dark text-foreground bg-background' style={{ width: '100vw', height: '100vh' }}>
    <App />
    <ToastContainer />    
    </main>
    </NextUIProvider>
    
  </React.StrictMode>,
)
