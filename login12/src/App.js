import Login from './Login.js';
import Page2 from './Page2.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="page2" element={<Page2/>}/>
      </Routes>
    </BrowserRouter>
  );
}