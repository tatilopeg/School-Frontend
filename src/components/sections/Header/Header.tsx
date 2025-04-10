import { ReactElement } from "react";
import school from "@/assets/school.png";
import { NavLink } from "react-router";
import { logout } from "@/utils/session";

export const Header = (): ReactElement => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src={school} alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative"></div>
          <NavLink to="/" className="text-sm/6 font-semibold text-gray-900">
            Eventos
          </NavLink>
          <NavLink
            to="people"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Personas
          </NavLink>
          <NavLink to="about" className="text-sm/6 font-semibold text-gray-900">
            Acerca de
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div
            onClick={() => {
              logout();
              window.location.reload();
            }}
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
          >
            Cerrar sesión <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
