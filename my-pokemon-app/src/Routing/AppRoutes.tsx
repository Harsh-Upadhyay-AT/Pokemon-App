import Layout from "Layout";
import Berry from "Pages/Berry";
import BerryDetails from "Pages/Berry/BerryDetails";
import ContestType from "Pages/Contest";
import EncounterList from "Pages/Encounter";
import Evolution from "Pages/Evolution";
import Home from "Pages/Home";
import Move from "Pages/Move";
import MyPokemonList from "Pages/MyPokemonList";
import PokemonDetails from "Pages/PokemonDetails";
import PokemonList from "Pages/PokemonList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokemon/list" element={<PokemonList />} />
          <Route path="/my/pokemon/list/" element={<MyPokemonList />} />
          <Route path="pokemon/:listId" element={<PokemonDetails />} />
          <Route path="/berry/" element={<Berry/>} />
          <Route path="berry/:listId" element={<BerryDetails />} />
          <Route path="/contest-type/" element={<ContestType />} />
          <Route path="/encounter-method/" element={<EncounterList />} />
          <Route path="/evolution-chain/" element={<Evolution />}/>
          <Route path="/move/" element={<Move />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
