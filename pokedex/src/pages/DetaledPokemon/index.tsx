import {
  Main,
  PokemonDetails,
  PokemonTitle,
  PokemonImage,
  PokemonAttribute,
  EvolutionList,
  EvolutionItem,
  DivGrafics,
  RetroButton,
} from './style';
import axios from 'axios';
import { useState, useEffect } from "react"
import { IPokemon } from '../../Context/contexct';
import { useSimulationContext } from '../../Context/contexct';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import HeaderComponent from '../../Components/header';
import NavigateComponent from '../../Components/icnosNavigate';

   

function PageDetailedPokemon() {
  const [evolutions, setEvolutions] = useState<string[]>([]);
  const [pokemonData, setPokemonData] = useState<IPokemon[]>([])
  const { detailedPokemon } = useSimulationContext();
  const { pokemons,setDetaliedPokemon } = useSimulationContext()
  const navigate = useNavigate()
  function GoToDetailsPokemons (poke :IPokemon){
    setDetaliedPokemon(poke)
    console.log(poke)
    navigate('/Detailed',{ replace:true })
  } 
 
  function GoMain (){

   
    navigate('/Dashboard',{ replace:true })
  } 

  const fetchEvolutions = async () => {
    try {
      if (!detailedPokemon || !detailedPokemon.species || !detailedPokemon.species.url) {
        return;
      }
  
      const response = await axios.get(detailedPokemon.species.url);
      const evolutionChainURL = response.data.evolution_chain.url;
  
      const evolutionResponse = await axios.get(evolutionChainURL);
      const evolutionsData = evolutionResponse.data.chain;
      const evolutionsNames: string[] = [];
  
      const extractEvolutionNames = (evolution: any) => {
        evolutionsNames.push(evolution.species.name);
        if (evolution.evolves_to.length > 0) {
          evolution.evolves_to.forEach(extractEvolutionNames);
        }
      };
  
      extractEvolutionNames(evolutionsData);
      setEvolutions(evolutionsNames);
  
      
      const pokemonEvolutionsResponse = await Promise.all(
        evolutionsNames.map(async (name) => {
          const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
          return pokemonResponse.data;
        })
      );
      setPokemonData(pokemonEvolutionsResponse);
    } catch (error) {
      console.error("Error fetching evolutions:", error);
    }
  };

   useEffect(() => {
    fetchEvolutions();
   }, []);
   console.log(pokemonData)
  const data = [
    { name: "Damage", value1: detailedPokemon?.stats[1].base_stat},
    { name: "Defense", value2: detailedPokemon?.stats[2].base_stat },
    { name: "life", value3: detailedPokemon?.stats[0].base_stat },
    { name: "experience", value4: detailedPokemon?.base_experience },
  ]

  const data2 = [
    { name: "heigth", value5: detailedPokemon?.height },
    { name: "weigth", value6: detailedPokemon?.weight }
  ];

 

  const isMobile = useMediaQuery({ maxWidth: 767 });


  const chartWidth = isMobile ? 250 : 400;
  const chartHeight = isMobile ? 150 : 200;
  return (
    <>
    <HeaderComponent/>
    <NavigateComponent/>
    <Main>
      <RetroButton onClick={()=>GoMain()}>Back</RetroButton>
      <PokemonDetails>


        <PokemonTitle>{detailedPokemon?.name}</PokemonTitle>
        <PokemonImage
          src={detailedPokemon?.sprites?.front_default} alt={detailedPokemon?.name} />
       
        


        <DivGrafics>
          <BarChart width={chartWidth} height={chartHeight} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value1" fill="yellow" name="Damage" />
            <Bar dataKey="value2" fill="blue" name="Defense" />
            <Bar dataKey="value3" fill="green" name="experiencie" />
            <Bar dataKey="value4" fill="red" name="life" />
          </BarChart>

          <BarChart width={chartHeight} height={chartHeight} data={data2}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value5" fill="pink" name="heigth" />
            <Bar dataKey="value6" fill="orange" name="weigth" />
          </BarChart>
        </DivGrafics>
        <PokemonAttribute>Evolutions:</PokemonAttribute>
       
          <EvolutionList>
           
          
            {pokemonData.map((pokemon) => (
              <EvolutionItem onClick={()=>GoToDetailsPokemons(pokemon)} key={pokemon.name}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <h3>{pokemon.name}</h3>
                {pokemon.types.map((type) => (
                  <p key={type.type.name}>{type.type.name}</p>
                ))}
              </EvolutionItem>
            ))}
          </EvolutionList>
        
      </PokemonDetails>
    </Main>
    </>
  );
}

export default PageDetailedPokemon;