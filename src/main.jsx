import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { CreateNewOrder } from './pages/CreateNewOrder'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/criar-novo-pedido" element={<CreateNewOrder />} />
    </Routes>
  </BrowserRouter>
)
