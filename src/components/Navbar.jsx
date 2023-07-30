import Inputs from "./Inputs";
import Logo from "./The_Simpsons_yellow_logo.svg";

const Navbar = ({ total, simpsons, onSearch, onSort }) => {
  return (
    <div className="nav">
      <img src={Logo} className="logo" />
      <h2 className="favorites">Number of favourites: {total}</h2>
      <Inputs simpsons={simpsons} onSearch={onSearch} onSort={onSort} />
    </div>
  );
};

export default Navbar;
