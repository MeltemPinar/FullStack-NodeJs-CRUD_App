import { Link } from "react-router-dom";

Link;
const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 border-b">
      <Link className="flex items-center" to={"/"}>
        <img width={80} src={"/movie-logo.png"} alt="" />
        <span className="font-bold text-2xl max-sm:hidden"> Filmania</span>
      </Link>
      <Link
        to={"/create"}
        className="border rounded-full p-1 px-5 hover:bg-black hover:text-white transition"
      >
        Fil oluştur
      </Link>
    </header>
  );
};

export default Header;
