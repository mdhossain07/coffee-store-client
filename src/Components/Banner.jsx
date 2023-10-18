import banner from "../assets/images/more/3.png";
import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src={banner} className="w-full h-[700px]" alt="" />
        <div className="absolute top-64 right-0 px-32 space-y-5">
          <h2 className="text-white font-medium text-3xl">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="w-[600px] text-white text-sm">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] border-0">Learn More</button>
        </div>
      </div>

      {/* Features */}
      <div className="bg-[#ECEAE3] py-6 px-5 text-center">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="space-y-2">
            <img className="mx-auto" src={icon1} alt="" />
            <p className="text-[#331A15] font-semibold">Awesome Aroma</p>
            <p className="text-[#331A15] text-sm w-[300px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2">
            <img className="mx-auto" src={icon2} alt="" />
            <p className="text-[#331A15] font-semibold">High Quality</p>
            <p className="text-[#331A15] text-sm w-[300px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2">
            <img className="mx-auto" src={icon3} alt="" />
            <p className="text-[#331A15] font-semibold">Pure Grades</p>
            <p className="text-[#331A15] text-sm w-[300px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2">
            <img className="mx-auto" src={icon4} alt="" />
            <p className="text-[#331A15] font-semibold">Proper Roasting</p>
            <p className="text-[#331A15] text-sm w-[300px]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
