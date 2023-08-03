import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import PageDetaledPokemon from "../pages/DetaledPokemon";
function ContainerRoutes(){

    return (
     < Routes>
       <Route path ="DashBoard" element={<DashBoard />}/>
       <Route path ="Detailed" element={<PageDetaledPokemon />}/>
       <Route path="*" element={<Navigate replace to={"DashBoard"} />} />
     </Routes>
    )
  }
  
  export default ContainerRoutes