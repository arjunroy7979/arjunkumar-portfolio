const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex justify-between px-40" id="contact">
        <div>
          <p>
            @2024 <span className="font-bold">Arjun Kumar</span> <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-6">
          <a href="#">
            Email: <span className="hover:text-orange-500 text-blue-500">arjunroy7979@gmail.com</span>
          </a>
          <a href="#" id="home" className="hover:underline hover:text-orange-500">
            <i className="fa fa-chevron-circle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
