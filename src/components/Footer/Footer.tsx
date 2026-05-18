function Footer({}) {
  return (
    <>
      <div className="py-10 px-2 bg-gray-200  flex justify-around flex-col gap-4 mobile:flex-row mobile:gap-4">
        <div className="flex flex-col mobile:w-2/5 gap-3">
          <div className="flex items-center gap-5">
            <i className="bi bi-geo-alt-fill text-2xl"></i>
            <div className="flex flex-col">
              <span className="text-base">21 Revolution Street</span>
              <span className="font-bold text-base">Paris, France</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="bi bi-telephone-fill text-2xl"></i>
            <div className="flex flex-col">
              <span className="font-bold text-base">+91 8989898989</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="bi bi-envelope-fill text-2xl"></i>
            <div className="flex flex-col">
              <span className="font-bold text-base">support@company.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 mobile:w-1/4">
          <p className="font-bold">About the company</p>
          <p className="text-left text-sm">
            We bring you a personalized news experience built for clarity and
            speed. Our platform curates the most relevant stories from trusted
            sources, helping you stay informed without the noise.
          </p>
          <div className="flex gap-2 pt-5">
            <i className="bi bi-facebook  text-3xl text-gray-600"></i>
            <i className="bi bi-twitter  text-3xl text-gray-600"></i>
            <i className="bi bi-linkedin  text-3xl text-gray-600"></i>
            <i className="bi bi-github text-3xl text-gray-600"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
