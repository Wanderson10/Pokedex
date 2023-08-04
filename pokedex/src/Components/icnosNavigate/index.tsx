
import { useState } from "react"
import { Navigate, RetroButton } from "./style"
import { useSimulationContext } from "../../Context/contexct"
import grass from "../header/img/iconsElements/grass_type_symbol_galar_by_jormxdos_dffvl0s-fullview.png"
import fire from "../header/img/iconsElements/fire_type_symbol_galar_by_jormxdos_dffvl1m-pre.png"
import poison from "../header/img/iconsElements/poison_type_symbol_galar_by_jormxdos_dffvl5p-fullview.png"
import flying from "../header/img/iconsElements/flying_type_symbol_galar_by_jormxdos_dffvl6n-pre.png"
import normal from "../header/img/iconsElements/normal_type_symbol_galar_by_jormxdos_dffvl62-fullview.png"
import water from "../header/img/iconsElements/water_type_symbol_galar_by_jormxdos_dffvl12-fullview.png"
import bug from "../header/img/iconsElements/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png"
import dark from "../header/img/iconsElements/dark_type_symbol_galar_by_jormxdos_dffvl4c-fullview.png"
import ice from "../header/img/iconsElements/ice_type_symbol_galar_by_jormxdos_dffvl40-pre.png"
import fight from "../header/img/iconsElements/fighting_type_symbol_galar_by_jormxdos_dffvl1w-pre.png"
import dragon from "../header/img/iconsElements/dragon_type_symbol_galar_by_jormxdos_dffvl4n-pre.png"
import eletric from "../header/img/iconsElements/electric_type_symbol_galar_by_jormxdos_dffvl6b-fullview.png"
import rock from "../header/img/iconsElements/rock_type_symbol_galar_by_jormxdos_dffvl3a-pre.png"
import metal from "../header/img/iconsElements/metal_type_symbol_tcg_by_jormxdos_dfgddcz-fullview.png"
import ground from "../header/img/iconsElements/ground_type_symbol_galar_by_jormxdos_dffvl6w-fullview.png"
import ghost from "../header/img/iconsElements/ghost_type_symbol_galar_by_jormxdos_dffvl2d-fullview.png"
import fairy from "../header/img/iconsElements/fairy_type_symbol_galar_by_jormxdos_dffvl2x-pre.png"
import psychic from "../header/img/iconsElements/psychic_type_symbol_tcg_by_jormxdos_dfgddbk-fullview.png"
import back from "../header/img/iconsElements/arrow_10124537.png"



function NavigateComponent() {
  const [showMore, setShowMore] = useState(false);
  const { elementPokemon, setFilteredPokemons } = useSimulationContext();

  function filterByElement(e: string) {
    const result = [];

    for (let i = 0; i < elementPokemon.length; i++) {
      const pokemon = elementPokemon[i];
      const types = pokemon.types;

      if (types.length > 0 && pokemon.types[0].type.name === e) {
        result.push(pokemon);
      }

      if (types.length > 1 && types[1].type.name === e) {
        result.push(pokemon);
      }
    }
    setFilteredPokemons(result);
  }

  function ShowMoreIcons() {
    setShowMore((prevShowmore) => !prevShowmore);
  }

  return (
    <Navigate>
      <div>
        <img className="elementIcons" onClick={() => filterByElement('grass')} src={grass} alt="grass" />
        <img className="elementIcons" onClick={() => filterByElement('fire')} src={fire} alt="fire" />
        <img className="elementIcons" onClick={() => filterByElement('water')} src={water} alt="water" />
        <img className="elementIcons" onClick={() => filterByElement('normal')} src={normal} alt="normal" />
        <img className="elementIcons" onClick={() => filterByElement('ice')} src={ice} alt="ice" />

        {showMore && (
          <>
            <img className="elementIcons" onClick={() => filterByElement('electric')} src={eletric} alt="electric" />
            <img className="elementIcons" onClick={() => filterByElement('poison')} src={poison} alt="poison" />
            <img className="elementIcons" onClick={() => filterByElement('flying')} src={flying} alt="flying" />
            <img className="elementIcons" onClick={() => filterByElement('bug')} src={bug} alt="bug" />
            <img className="elementIcons" onClick={() => filterByElement('steel')} src={metal} alt="steel" />
            <img className="elementIcons" onClick={() => filterByElement('dark')} src={dark} alt="dark" />
            <img className="elementIcons" onClick={() => filterByElement('rock')} src={rock} alt="rock" />
            <img className="elementIcons" onClick={() => filterByElement('ground')} src={ground} alt="ground" />
            <img className="elementIcons" onClick={() => filterByElement('ghost')} src={ghost} alt="ghost" />
            <img className="elementIcons" onClick={() => filterByElement('fighting')} src={fight} alt="fighting" />
            <img className="elementIcons" onClick={() => filterByElement('dragon')} src={dragon} alt="dragon" />
            <img className="elementIcons" onClick={() => filterByElement('fairy')} src={fairy} alt="fairy" />
            <img className="elementIcons" onClick={() => filterByElement('psychic')} src={psychic} alt="psychic" />
            <img className="elementIcons" onClick={() => setFilteredPokemons(elementPokemon)} src={back} alt="psychic" />
          </>
        )}
      </div>

      <RetroButton onClick={ShowMoreIcons}>
        {showMore ? "Less" : "More"}
      </RetroButton>
    </Navigate>
  );
}

export default NavigateComponent;