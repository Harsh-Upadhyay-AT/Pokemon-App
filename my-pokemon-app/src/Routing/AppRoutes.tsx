import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home"
import PokemonList from "../Pages/PokemonList/PokemonList"
import MyPokemonList from "../Pages/MyPokemonList/MyPokemonList"
import PokemonDetails from "../Pages/PokemonDetails/PokemonDetails"


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/pokemon/list" element={<PokemonList/>}/>
                <Route path="/my/pokemon/list/" element={<MyPokemonList/> }/>
                <Route path="pokemon/:listId" element={<PokemonDetails />}/>
                {/* <Route path="/*" element={<Error404/>}/> */}
        </Route>
        </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes