import App from './App';
import Page2 from './Page2.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="page2" element={<Page2/>}/>
      </Routes>
    </BrowserRouter>
  );
}