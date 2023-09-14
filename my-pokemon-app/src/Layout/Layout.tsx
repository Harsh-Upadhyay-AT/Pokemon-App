import { Link, Outlet } from "react-router-dom";
import { Strings } from "../Resource/Strings";
import "./Layout.css"; 

const Layout = () => {
  return (
    <>
      <div className="header">
        <h1>{Strings.Pokemon}</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to={"/"}>{Strings.home}</Link>
          </li>
          <li>
            <Link to={"/pokemon/list"}>{Strings.pokemonList}</Link>
          </li>
          <li>
            <Link to={"/my/pokemon/list"}>{Strings.myPokemonList}</Link>
          </li>
        </ul>
      </div>
      <div className="container main-content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
