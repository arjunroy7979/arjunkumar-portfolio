const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex justify-between px-40">
        <div>
          <p>
            @2024 <span className="font-bold">Arjun Kumar</span> <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          <a href="/about" className="hover:underline hover:text-orange-500">
            About
          </a>
          <a href="/privacy" className="hover:underline hover:text-orange-500">
            Experiance
          </a>
          <a href="/projects" className="hover:underline hover:text-orange-500">
            Projects{" "}
          </a>
          <a href="/contact" className="hover:underline hover:text-orange-500">
            Contact
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
