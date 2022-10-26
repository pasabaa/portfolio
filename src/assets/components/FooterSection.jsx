import Logo from "../img/logo/logo-iso.png";
export const FooterSection = () => {
  const links = [
    {
      id: "1",
      url: "https://twitter.com/pasabaaa",
      name: "Twitter",
      rel: "noopener noreferrer",
    },
    {
      id: "2",
      url: "https://github.com/pasabaa",
      name: "GitHub",
      rel: "noopener noreferrer",
    },
    {
      id: "3",
      url: "https://www.linkedin.com/in/pablo-s%C3%A1nchez-8127ba221/",
      name: "LinkedIn",
      rel: "noopener noreferrer",
    },
    {
      id: "4",
      url: "https://www.instagram.com/pasabaaa/",
      name: "Instagram",
      rel: "noopener noreferrer",
    },
  ];

  const projects = [
    {
      id: "1",
      url: "https://www.instagram.com/pasabaaa/",
      name: "Timeline",
      rel: "noopener noreferrer",
    },
    {
      id: "2",
      url: "https://www.instagram.com/pasabaaa/",
      name: "Background Generator",
      rel: "noopener noreferrer",
    },
    {
      id: "3",
      url: "https://www.instagram.com/pasabaaa/",
      name: "Message Generator",
      rel: "noopener noreferrer",
    },
    {
      id: "4",
      url: "https://www.instagram.com/pasabaaa/",
      name: "Gallery Fetch",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <>
      <div className="py-28 h-100 bg-gray-100/40 flex items-center justify-center">
        <div className="w-6/12 mx-auto sm:w-10/12">
          <div className="flex justify-between">
            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <p className="text-base font-bold">Social</p>

                {links.map((link) => {
                  return (
                    <a
                      key={link.id}
                      aria-label={link.name}
                      title={link.name}
                      className="text-sm text-gray-500"
                      href={link.url}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-base font-bold">Últimos Proyectos</p>

                {projects.map((project) => {
                  return (
                    <a
                      key={project.id}
                      aria-label={project.name}
                      title={project.name}
                      className="text-sm text-gray-500"
                      href={project.url}
                    >
                      {project.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={Logo}
                alt="pasabaa Logo"
                className="object-scale-down h-24 sm:h-16"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 h-100 bg-black flex items-center justify-center">
        <div className="w-6/12 mx-auto sm:w-10/12 text-center">
          <p className="text-sm text-white">
            &copy; 2022 Copyright - <span className="font-bold">pasabaa</span>
          </p>
        </div>
      </div>
    </>
  );
};
