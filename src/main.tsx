import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import AppLayout from './components/layouts/AppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<App/>} />                  
          <Route path='/people' element={<>Personas</>} />                  
          <Route path='/about' element={<>Acerca de</>} />                  
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
