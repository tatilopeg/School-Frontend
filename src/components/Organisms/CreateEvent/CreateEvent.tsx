import { EventModel } from "@/models/EventModel";
import { FormEvent, useEffect, useRef, type ReactElement } from "react";
import moment from 'moment';
import { createEvent } from "@/server/events/createEvent";

interface Props {
  open: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateEvent = ({ open, close }: Props): ReactElement => {

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        close(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleForm = async(event: FormEvent<HTMLFormElement>) =>{
    // event.preventDefault();
    const data = new FormData(event.currentTarget);

    const currentFormData:EventModel = {
      title: data.get('title') as string,
      name: data.get('name') as string,
      description: data.get('description') as string,
      date: moment().format('D MMMM YYYY'),
      imageUrl: ''
    }

    const response = await createEvent(currentFormData);    
    console.log(response);
  }


  if (open) {
    return (
      <div className="fixed inset-0  flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Agregar Nuevo Evento
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => close(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div ref={modalRef} onClick={handleClick}>
              <form onSubmit={handleForm}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="titulo"
                  >
                    Tipo de Evento
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    name="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Ej: Feria de Ciencias"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="nombre"
                  >
                    Nombre del Evento
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Ej: Explorando el Mundo Científico"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="descripcion"
                  >
                    Descripción
                  </label>
                  <textarea
                    id="descripcion"
                    name="description"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Descripción detallada del evento..."
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => close(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Guardar Evento
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};
