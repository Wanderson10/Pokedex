import { Main, CardList, Card, Steel } from "./style";
import { useSimulationContext } from "../../Context/contexct";
import grass from "../header/img/iconsElements/grass_type_symbol_galar_by_jormxdos_dffvl0s-fullview.png";
import fire from "../header/img/iconsElements/fire_type_symbol_galar_by_jormxdos_dffvl1m-pre.png";
import poison from "../header/img/iconsElements/poison_type_symbol_galar_by_jormxdos_dffvl5p-fullview.png";
import flying from "../header/img/iconsElements/flying_type_symbol_galar_by_jormxdos_dffvl6n-pre.png";
import normal from "../header/img/iconsElements/normal_type_symbol_galar_by_jormxdos_dffvl62-fullview.png";
import water from "../header/img/iconsElements/water_type_symbol_galar_by_jormxdos_dffvl12-fullview.png";
import bug from "../header/img/iconsElements/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png";
import dark from "../header/img/iconsElements/dark_type_symbol_galar_by_jormxdos_dffvl4c-fullview.png";
import ice from "../header/img/iconsElements/ice_type_symbol_galar_by_jormxdos_dffvl40-pre.png";
import fighting from "../header/img/iconsElements/fighting_type_symbol_galar_by_jormxdos_dffvl1w-pre.png";
import dragon from "../header/img/iconsElements/dragon_type_symbol_galar_by_jormxdos_dffvl4n-pre.png";
import electric from "../header/img/iconsElements/electric_type_symbol_galar_by_jormxdos_dffvl6b-fullview.png";
import rock from "../header/img/iconsElements/rock_type_symbol_galar_by_jormxdos_dffvl3a-pre.png";
import metal from "../header/img/iconsElements/metal_type_symbol_tcg_by_jormxdos_dfgddcz-fullview.png";
import ground from "../header/img/iconsElements/ground_type_symbol_galar_by_jormxdos_dffvl6w-fullview.png";
import ghost from "../header/img/iconsElements/ghost_type_symbol_galar_by_jormxdos_dffvl2d-fullview.png";
import fairy from "../header/img/iconsElements/fairy_type_symbol_galar_by_jormxdos_dffvl2x-pre.png";
import psychic from "../header/img/iconsElements/psychic_type_symbol_tcg_by_jormxdos_dfgddbk-fullview.png";

import { IPokemon } from "../../Context/contexct";
import { useNavigate } from "react-router-dom";

function MainData() {
  const { filteredPokemons, setDetaliedPokemon } = useSimulationContext();
  const navigate = useNavigate();

  function GoToDetailsPokemons(poke: IPokemon) {
    setDetaliedPokemon(poke);
    const serializedDetalied = JSON.stringify(poke);
    localStorage.setItem('detalied', serializedDetalied);
    navigate("/Detailed", { replace: true });
  }

  return (
    <Main>
      <div>
        <CardList>
          {filteredPokemons.map((pokemon, index) => (
            <Card onClick={() => GoToDetailsPokemons(pokemon)} key={index}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <ul>
                {pokemon.types.map((types, typeIndex) => (
                  <div key={typeIndex}>
                    {types.type.name === "grass" ? (
                      <img src={grass} alt={types.type.name} />
                    ) : types.type.name === "fire" ? (
                      <img src={fire} alt={types.type.name} />
                    ) : types.type.name === "poison" ? (
                      <img src={poison} alt={types.type.name} />
                    ) : types.type.name === "flying" ? (
                      <img src={flying} alt={types.type.name} />
                    ) : types.type.name === "normal" ? (
                      <img src={normal} alt={types.type.name} />
                    ) : types.type.name === "water" ? (
                      <img src={water} alt={types.type.name} />
                    ) : types.type.name === "bug" ? (
                      <img src={bug} alt={types.type.name} />
                    ) : types.type.name === "dark" ? (
                      <img src={dark} alt={types.type.name} />
                    ) : types.type.name === "ice" ? (
                      <img src={ice} alt={types.type.name} />
                    ) : types.type.name === "fighting" ? (
                      <img src={fighting} alt={types.type.name} />
                    ) : types.type.name === "dragon" ? (
                      <img src={dragon} alt={types.type.name} />
                    ) : types.type.name === "electric" ? (
                      <img src={electric} alt={types.type.name} />
                    ) : types.type.name === "rock" ? (
                      <img src={rock} alt={types.type.name} />
                    ) : types.type.name === "steel" ? (
                      <Steel src={metal} alt={types.type.name} />
                    ) : types.type.name === "ground" ? (
                      <img src={ground} alt={types.type.name} />
                    ) : types.type.name === "ghost" ? (
                      <img src={ghost} alt={types.type.name} />
                    ) : types.type.name === "fairy" ? (
                      <img src={fairy} alt={types.type.name} />
                    ) : types.type.name === "psychic" ? (
                      <img src={psychic} alt={types.type.name} />
                    ) : (
                      <h3>{types.type.name}</h3>
                    )}
                  </div>
                ))}
              </ul>
            </Card>
          ))}
        </CardList>
      </div>
    </Main>
  );
}

export default MainData;