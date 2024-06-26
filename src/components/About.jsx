import { useState } from "react";
import bannerImage from "../assets/bi2.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Frontend Developer & Backend Developer",
    desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
    illo fugit explicabo blanditiis enim quaerat dolorum fugiat
    ducimus minus ipsum.`,
    desc2: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. A
    dignissimos esse itaque impedit quas omnis odit, velit ullam
    suscipit? Vel obcaecati pariatur voluptatem sapiente.
    Necessitatibus vero laborum nam quaerat ullam?
`,
    actionButton: {
      title: "Read More",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-10" id="about">
        <h1 className="text-center pb-10  text-4xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="Arjun kumar"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-4xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-cyan-500 hover:bg-cyan-400 px-3 py-1 text-sm text-white rounded shadow-lg">
                {data.actionButton.title}
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
