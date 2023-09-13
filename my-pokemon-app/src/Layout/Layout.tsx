import { Link, Outlet} from "react-router-dom"
import { Strings } from "../Resource/Strings"


const Layout = () => {
    return (
        <>
        <div>
        <h1 style={{textAlign: "center"}}>{Strings.Pokemon}</h1>
        </div>
        <div>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" ,backgroundColor:"lightgrey",height:"40px"}}>
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
        <Outlet />
        </>
    )
}

export default Layout