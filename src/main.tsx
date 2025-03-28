import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
//components
import { App } from './App.tsx'
import { OrderDetail } from './components/OrderDetail.tsx';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/detalhes-pedido/:id" element={<OrderDetail />} />
        </Routes>
    </BrowserRouter>
)
