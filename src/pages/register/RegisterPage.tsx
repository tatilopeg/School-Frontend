import { FormEvent, type ReactElement } from "react";
import colegio from "@/assets/colegio.png";
import { NavLink } from "react-router";
import { AuthModel } from "@/models/AuthModel";
import { registerUser } from "@/server/auth/register";
import { ToastContainer, toast } from "react-toastify";

export default function RegisterPage(): ReactElement {
  const error = () => toast.error("Error creando el usuario");
  const success = () => toast.success("Usuario creado exitosamente");

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = Object.fromEntries(data.entries());

    const user: AuthModel = {
      username: formData.username as string,
      password: formData.password as string,    
      rol: formData.roles as string
    };

    console.log(user);
    const response = await registerUser(user);
    if (!response) {
      error();
    } else {
      success();
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <ToastContainer />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src={colegio}
          alt="Icono de colegio"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Registrarse
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

          <select
            id="roles"
            name="roles"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="Estudiante"
          >            
            <option value="Estudiante">Estudiante</option>
            <option value="Docente">Docente</option>
            <option value="Investigador">Investigador</option>
            <option value="Funcionario">Funcionario</option>
          </select>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrarse
            </button>
          </div>

          <NavLink to={"/auth"}>Iniciar sesion</NavLink>
        </form>
      </div>
    </div>
  );
}
