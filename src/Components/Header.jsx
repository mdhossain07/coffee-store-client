import logo from "../assets/images/more/logo1.png";
import bg from "../assets/images/more/15.jpg";

const bgStyle = {
  backgroundImage: `url(${bg})`,
};

const Header = () => {
  return (
    <div>
      <div style={bgStyle}>
        {/* Navbar */}
        <div className="flex justify-center items-center gap-10">
          <img className="w-[70px] h-[80px]" src={logo} alt="" />
          <h2 className="text-white text-3xl font-semibold">
            Espresso Emporium
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
