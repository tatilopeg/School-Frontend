import { type ReactElement } from "react";
import libros from "@/assets/libros.png";
import { NavLink } from "react-router";
import type { AuthModel } from "@/models/AuthModel";
import { ToastContainer,toast } from "react-toastify";
import { loginUser } from "@/server/auth/login";

export default function LoginPage(): ReactElement {
  const error = () => toast.error("Credenciales incorrectas");

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = Object.fromEntries(data.entries());

    const user: AuthModel = {
      username: formData.username as string,
      password: formData.password as string,
    };

    console.log(user);
    const response = await loginUser(user);
    console.log(response)

    if (!response) {
      error();
    }else{
        localStorage.setItem('TOKEN',response.token);
        window.location.reload();
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <ToastContainer/>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src={libros}
          alt="Icono de libros"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Iniciar sesión
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleForm}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Nombre de usuario
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                id="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Iniciar sesión
            </button>
          </div>

          <NavLink to={"/auth/register"}>Registrarse</NavLink>
        </form>
      </div>
    </div>
  );
}
