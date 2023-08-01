import React from "react";
import LayoutsApp from "./LayoutsApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../features/identity/components/Login";
import Password from "../features/identity/components/Password";
import Otp from "../features/identity/components/Otp";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutsApp />}>
          <Route index element={<Login />} />
          <Route path="password" element={<Password />} />
          <Route path="otp" element={<Otp />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
