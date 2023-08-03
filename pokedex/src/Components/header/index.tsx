import { Header ,LogoImage} from "./style"

import logo from "./img/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67.png"
import grass from "../header/img/iconsElements/grass_type_symbol_galar_by_jormxdos_dffvl0s-fullview.png"
import fire from "../header/img/iconsElements/fire_type_symbol_galar_by_jormxdos_dffvl1m-pre.png"
import poison from "../header/img/iconsElements/poison_type_symbol_galar_by_jormxdos_dffvl5p-fullview.png"
import flying from "../header/img/iconsElements/flying_type_symbol_galar_by_jormxdos_dffvl6n-pre.png"
import normal from "../header/img/iconsElements/normal_type_symbol_galar_by_jormxdos_dffvl62-fullview.png"
import water from "../header/img/iconsElements/water_type_symbol_galar_by_jormxdos_dffvl12-fullview.png"
import bug from "../header/img/iconsElements/bug_type_symbol_galar_by_jormxdos_dffvl73-pre.png"
function HeaderComponent(){
 

    return (
        <Header>
          <figure>
            <LogoImage src={logo}alt="logo pokedex"/>
          </figure>
        </Header>
    )


}

export default HeaderComponent