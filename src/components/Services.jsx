import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-12">
        <h1 className="text-4xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <i class=" fa-2x fa fa-code"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class="fa fa-mobile fa-2x"></i>
            <h1 className="text-4xl">Java Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class="fa fa-server fa-2x"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
