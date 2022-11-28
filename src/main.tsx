import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RoutesProductApp } from './RoutesProductApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <RoutesProductApp />
    </BrowserRouter>
  // </React.StrictMode>
)
