import bannerImage from "../assets/bi1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "Mern Stack Devloper"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Arjun Kumar</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold text-black" ref={el}></span>
          </h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, nemo. Omnis quis reprehenderit aspernatur culpa
            inventore rem, illum iure optio et blanditiis quia alias
            consequuntur totam dicta vel molestiae. Odio laboriosam quisquam,
            exercitationem omnis numquam vero nesciunt explicabo incidunt vel
            eaque a repellat nisi, debitis repudiandae excepturi quasi
            praesentium id!
          </p>

          <div className="icons-container flex space-x-5">
            <a className=" hover:bg-blue-600 border cursor-pointer  px-3 py-4 w-10 h-10  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa fa-facebook text-4xl"></i>
            </a>

            <a className=" hover:bg-pink-400   border cursor-pointer  px-3 py-4 w-10 h-10  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-red-600 border  cursor-pointer  px-3 py-4 w-10 h-10  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa text-4xl  fa-youtube-play"></i>
            </a>

            <a className=" hover:bg-sky-600  border  cursor-pointer px-3 py-4 w-10 h-10  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa text-4xl  fa-linkedin"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-sm px-3 py-2 bg-cyan-500 hover:bg-cyan-400 rounded shadow-lg" href="/contact">
            Contact Me
            <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
