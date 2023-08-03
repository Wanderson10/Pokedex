import HeaderComponent from "../../Components/header"
import NavigateComponent from "../../Components/icnosNavigate"
import MainData from "../../Components/initialData"
import SearchBar from "../../Components/searchComponent"
import { Body } from "./style"
function DashBoard(){
    const handleSearch = (searchTerm: string) => {};
    return (
    <Body>
     <HeaderComponent/>
     <NavigateComponent/>
     <SearchBar  onSearch={handleSearch}/>
     <MainData/>
     </Body>

    )
}

export default DashBoard