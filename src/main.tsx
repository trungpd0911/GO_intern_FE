import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Search from './pages/search.tsx';
import Report from './pages/report.tsx';
import Setting from './pages/setting.tsx';
import GlobalLayout from "@/layouts/global.tsx"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<GlobalLayout />} >
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </StrictMode>,
  </BrowserRouter >
)
