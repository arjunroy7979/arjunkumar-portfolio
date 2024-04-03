import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Arjun Kumar");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Experience",
      link: "/experiance",
      id: 3,
    },
    {
      title: "Projects",
      link: "/projects",
      id: 4,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 4,
    }
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "https://drive.google.com/file/d/1VMjFzAi0zYTRNRhUoq0LC4tG5pr-p2_s/view",
  });

  return (
    <>
      <div className="h-16 border main flex justify-between items-center xl:px-16 px-5 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-sm xl:text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="lg:space-x-6">
          {/* menu links */}
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>

        <div>
          {/* buttons */}
          <a
            href={actionButton.link} rel="_blank"
            className="px-4 py-2 shadow rounded bg-cyan-500 hover:bg-cyan-400 text-sm text-white "
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
