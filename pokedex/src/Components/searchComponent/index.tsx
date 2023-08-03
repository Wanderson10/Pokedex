
import React from "react";
import { useSimulationContext } from "../../Context/contexct";
import { DivSearch, Input, RetroButton } from "./style";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const { input, setInput, pokemons, setFilteredPokemons } = useSimulationContext();

  const handleSearchClick = () => {
    const searchTerm = input.toLowerCase().trim();
    if (searchTerm === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm)
      );
      setFilteredPokemons(filteredPokemons);
    }
    onSearch(input);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <DivSearch>
      <Input
        value={input}
        type="text"
        onChange={handleInputChange}
        placeholder="search pokemon by name"
      />
      <RetroButton onClick={handleSearchClick}>Search</RetroButton>
    </DivSearch>
  );
}

export default SearchBar;