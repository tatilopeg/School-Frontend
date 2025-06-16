import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";
import App from "./App.tsx";
import AppLayout from "./components/layouts/AppLayout.tsx";
import AuthLayout from "./components/layouts/AuthLayout.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/ApolloClient.ts";

import RegisterPage from "./pages/register/RegisterPage.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import PeoplePage from "./pages/people/peoplePage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<Navigate to={"/inicio"} />} />
          <Route path="/inicio" element={<AppLayout />}>
            <Route index element={<App />} />
            <Route path="people" element={<PeoplePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </ApolloProvider>
);
