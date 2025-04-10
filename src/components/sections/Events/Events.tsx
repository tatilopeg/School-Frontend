import { ReactElement, useEffect, useState } from "react";
import { CreateEvent } from "@/components/Organisms/CreateEvent/CreateEvent";
import { FaPlus } from "react-icons/fa";
import { EventModel } from "@/models/EventModel";
import { Event } from "@/components/Organisms/Event/Event";
import { getEvents } from "@/server/events/getEvents";

export const Events = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [eventos,setEventos] = useState<EventModel[]>([]);
  
  useEffect(()=>{
    const fetchData = async() => {
      const data = await getEvents();
      setEventos(data);
    }
    fetchData();
  },[])
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center text-green-400 mb-8">
          Eventos Escolares
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventos.map((evento,id)=>(
            <Event {...evento} key={id}/>
          ))}
        </div>

        <div
          className="mt-8 w-64 h-64 border-2 border-dashed border-green-300 flex flex-col items-center justify-center gap-3 rounded-2xl
               hover:border-solid hover:border-green-400 transition-all duration-300 ease-in-out cursor-pointer group   "
          onClick={()=>setOpen(!open)}     
        >
          <FaPlus
            color="gainsboro"
            size={50}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <p className="text-green-300 font-semibold group-hover:text-green-400 transition-colors duration-300">
            Crear nuevo evento
          </p>
        </div>
      </div>
      <CreateEvent open={open} close={setOpen}/>
    </section>
  );
};
