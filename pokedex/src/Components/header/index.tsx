import { Header ,LogoImage} from "./style"

import logo from "./img/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67.png"

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