import { ReactElement } from "react";
import { Header } from "../sections/Header/Header";
import { Navigate, Outlet } from "react-router";

export default function AppLayout(): ReactElement {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
