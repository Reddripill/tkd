// src/App.tsx
"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/screens/home/main/Main";
import AdminPanel from "./app/admin/page";

const App: React.FC = () => (
   <Router>
      <Routes>
         <Route path="/admin" element={<AdminPanel />} />
         <Route path="/" element={<Main />} />
      </Routes>
   </Router>
);

export default App;
