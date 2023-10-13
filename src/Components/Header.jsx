import logo from "../assets/images/more/logo1.png";

const bgStyle = {
  backgroundImage: 'url("../assets/images/more/15.jpg")',
};

const Header = () => {
  return (
    <div style={bgStyle}>
      <div className="flex justify-center items-center gap-10">
        <img className="w-[80px] h-[90px]" src={logo} alt="" />
        <h2 className="text-white text-4xl font-semibold">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
