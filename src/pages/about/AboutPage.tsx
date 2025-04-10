import { type ReactElement } from "react";

export default function AboutPage(): ReactElement {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">      
      <div className="relative bg-green-700 overflow-hidden my-6 rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Institución Educativa La Aurora
              </h1>
              <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
                Sede La Rivera - Formando líderes para el campo colombiano
              </p>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Escuela rural"
          />
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Nuestra Institución</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Educación con raíces en el campo
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Fundada en 1985, formamos a los jóvenes de La Rivera con valores, tradiciones y herramientas para el desarrollo rural sostenible.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Misión</h3>
                <p className="mt-2 text-base text-gray-500">
                  Formar integralmente a los estudiantes con énfasis en desarrollo rural, conservación ambiental y emprendimiento agropecuario.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Visión</h3>
                <p className="mt-2 text-base text-gray-500">
                  Ser para 2030 el referente educativo rural de la región, con proyectos productivos que beneficien a la comunidad.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Valores</h3>
                <p className="mt-2 text-base text-gray-500">
                  Respeto por la tierra, trabajo en equipo, honestidad, innovación rural y amor por nuestra cultura campesina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-green-50 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Historia de la escuela"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Nuestra Historia
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Fundada por un grupo de campesinos visionarios en 1985, comenzó como una pequeña escuela unitaria con 15 estudiantes. Hoy atendemos a más de 200 alumnos desde preescolar hasta básica secundaria.
              </p>
              <div className="mt-6">
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-2">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">2005</h4>
                    <p className="text-gray-500">Construcción de la sede actual con apoyo de la comunidad</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-2">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">2012</h4>
                    <p className="text-gray-500">Implementación del programa de agricultura escolar</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-2">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">2020</h4>
                    <p className="text-gray-500">Reconocimiento como mejor proyecto educativo rural del departamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Programas
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Educación adaptada a las necesidades de nuestra comunidad rural
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Escuela Nueva",
                description: "Modelo flexible multigrado para primaria que se adapta a nuestra realidad rural",
                icon: "👨‍🏫"
              },
              {
                name: "Proyectos Productivos",
                description: "Huerta escolar, piscicultura y avicultura como herramientas pedagógicas",
                icon: "🌱"
              },
              {
                name: "Tecnología Agrícola",
                description: "Introducción a técnicas modernas de cultivo y sostenibilidad",
                icon: "🚜"
              },
              {
                name: "Cultura Campesina",
                description: "Rescate de tradiciones, música y saberes ancestrales de la región",
                icon: "🎵"
              },
              {
                name: "Deportes Rurales",
                description: "Tejo, caballos de paso y otras disciplinas tradicionales",
                icon: "🏅"
              },
              {
                name: "Educación Ambiental",
                description: "Programas de reforestación y conservación de cuencas hidrográficas",
                icon: "🌳"
              }
            ].map((program) => (
              <div key={program.name} className="pt-6">
                <div className="flow-root bg-green-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg text-2xl">
                        {program.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{program.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="relative bg-green-700 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Comunidad rural"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Parte de la comunidad de La Rivera
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-green-100 mx-auto">
              Más que una escuela, somos el corazón educativo de nuestra vereda
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {[
              { value: "200+", label: "Estudiantes" },
              { value: "15", label: "Docentes" },
              { value: "98%", label: "Pertenencia étnica campesina" },
              { value: "100%", label: "Comprometidos con nuestro territorio" }
            ].map((stat) => (
              <div key={stat.label} className="bg-green-800 bg-opacity-50 p-6 rounded-lg">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}