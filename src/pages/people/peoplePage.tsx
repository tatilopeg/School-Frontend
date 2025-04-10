import { UserModel } from "@/models/UserModel";
import { getPeople } from "@/server/people/getPeople";
import { useEffect, useState, type ReactElement } from "react";

export default function PeoplePage(): ReactElement {
  const [people, setPeople] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await getPeople();
      setPeople(response);
    };
    fetchPeople();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">        
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl text-center text-green-400 mb-8">
          Nuestros usuarios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {people.map(({ id, username,rol }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">
                        {username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-col items-center justify-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {username}
                    </h2>
                    <p className="text-gray-500 text-sm">Rol: {rol}</p>                    
                    <p className="text-gray-500 text-sm">Id: {id}</p>                    
                  </div>
                </div>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
