import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login.tsx";
import Home from "./pages/home.tsx"
import MainLayout from "./layouts/MainLayout.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                {/*<Route path="about" element={<About />} />*/}
                {/*<Route path="contact" element={<Contact />} />*/}
            </Route>

        </Routes>
    </BrowserRouter>
)
