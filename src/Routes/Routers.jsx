import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TestPage from "../pages/TestPage/TestPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Test" element={<TestPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path=":first" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
