import React from "react";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  const experience = [
    {
      id: 1,
      title: "Sitio para el DIF, Guanajuato, México",
      description:
        "Automatización de las diferentes secciones de su sitio web, además de crear un apartado administrativo para gestionar diferentes datos de dichas secci ones, por ejemplo, títulos, imágenes y texto de las noticias que se presentan. Por otra parte, se modificó completamente la UI/UX de todo el sitio, para dar un salto a un diseño más contemporáneo. Se trabajo principalmente con el framework de PHP: Laravel, y otras herramientas y lenguajes más, Bootstrap, JavaScript, CSS y HTML.",
      url: null,
      repo: null,
    },
    {
      id: 2,
      title: "Sitio para Presidencia Municipal, Guanajuato, México",
      description:
        "Actualización del sitio web de la presidencia municipal, enfocado principalmente en frontend y rediseñando la UI/UX respectivamente, gestionado también, por la parte administrativa en el backend, la edición, eliminación y adición de diferentes datos para cada sección del sitio, además de utilizar principalmente el framework de PHP: Laravel, del mismo modo, Bootstrap como framework de diseño responsivo, además de JavaScript, CSS y HTML.",
      url: null,
      repo: null,
    },
    {
      id: 3,
      title: "Timeline",
      description:
        "Una aplicación para realizar sencillas lineas del tiempo, con eventos, fechas y elementos totalmente personalizables.",
      url: "https://pasabaa.github.io/timeline-vanilla/",
      repo: "https://github.com/pasabaa/timeline-vanilla",
    },
    {
      id: 4,
      title: "Message Generator",
      description:
        "Generador de mensajes de la aplicación de Google y demás interfaces.",
      url: "https://pasabaa.github.io/message-generator/",
      repo: "https://github.com/pasabaa/message-generator",
    },
    {
      id: 5,
      title: "Gallery Fetch",
      description:
        "Un buscador de imágenes conectado con la API del sitio web Pixabay, donde se encuentran una gran diversidad de imágenes libres de derechos de autor",
      url: "https://pasabaa.github.io/fetch-images/",
      repo: "https://github.com/pasabaa/fetch-images",
    },
    {
      id: 6,
      title: "Background Generator",
      description:
        "Un simple generador de fondos con efecto blur, y demás cosas personalizables",
      url: "https://pasabaa.github.io/bg-blur-generator/",
      repo: "https://github.com/pasabaa/bg-blur-generator",
    },
    {
      id: 7,
      title: "Portafolio",
      description:
        "Este sitio web, está hecho con React JS y Tailwind CSS. Además cuenta con diferentes secciones y es un sitio totalmente responsivo.",
      url: "https://portfolio-pasabaa.netlify.app/",
      repo: "https://github.com/pasabaa/portfolio",
    },
    {
      id: 68,
      title: "Music Player",
      description:
        "Esta es una aplicación hecha en React, Tailwind CSS, Redux y la API Shazam Core para extraer información de canciones y artistas, además de reproducir un preview de las canciones.",
      url: "",
      repo: "https://github.com/pasabaa/music-player",
    },
  ];

  return (
    <div
      className="py-64 h-100 bg-white/90 flex items-center justify-center"
      id="projects"
    >
      <div className="w-5/12 mx-auto sm:w-10/12">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="text-end max-w-sm sm:text-start">
            <h1 className={`text-3xl font-bold mb-2 text-red-500`}>
              Proyectos
            </h1>
            <h2 className={`text-xl font-bold text-black`}>
              En este tiempo, he logrado tomar experiencia de algunos proyectos.
            </h2>
          </div>

          {experience
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", duration: 0.02 }}
                  key={item.id}
                  className="max-w-sm p-6 rounded-xl bg-gray-300/10 shadow-sm last:max-w-fit sm:last:max-w-sm hover:bg-gray-300/20 transition-all ease-in-out cursor-default"
                >
                  <h1 className="text-black font-bold">{item.title}</h1>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {!item.repo || !item.url === null ? null : (
                    <div className="flex gap-2 mt-6">
                      <a
                        target={"_blank"}
                        className="text-base bg-green-400/20 rounded-full w-7 h-7 flex items-center justify-center"
                        rel="noopener noferrer"
                        title="Ver Online"
                        href={item.url}
                      >
                        <i className="bi bi-globe text-green-500"></i>
                      </a>
                      <a
                        target={"_blank"}
                        className="text-base bg-black/10 rounded-full w-7 h-7 flex items-center justify-center"
                        rel="noopener noferrer"
                        title="Repositorio GitHub"
                        href={item.repo}
                      >
                        <i className="bi bi-github text-black"></i>
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
