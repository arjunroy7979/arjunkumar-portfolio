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
      <div className="main-container py-12" id="services">
        <h1 className="text-4xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <i class=" fa-2x fa fa-code"></i>
            <h1 className="text-2xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-sm rounded shadow-lg text-white">
              Check
              <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class="fa fa-skyatlas fa-2x"></i>
            <h1 className="text-2xl">JavaScript Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-1 text-white text-sm bg-cyan-500 hover:bg-cyan-400 rounded shadow-lg">
              Check
              <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class="fa fa-server fa-2x"></i>
            <h1 className="text-2xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-1 text-white text-sm bg-cyan-500 hover:bg-cyan-400 rounded shadow-lg">
              Check
              <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
