import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import api from "../services";


interface listProviderProps {
    children: ReactNode
}

interface IPokemonStats {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface Species {
  name: string;
  url: string;
}
export interface IPokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
          name: string;
        };
      }[];

      damage: number;
      defense: number;
  evolutions: string[];
  base_experience :number;
  height:number;
  weight:number;
  species: Species
  stats: IPokemonStats[]

}

interface IPokemonStat {
    stat: {
      name: string;
    };
    base_stat: number;
  }
  
  interface IPokemonDetails {
    species: {
      url: string;
    };
    stats: IPokemonStat[];
   
  }
export interface IPokedexContexct {
    pokemons: IPokemon[]
    detailedPokemon: IPokemon | null;
    setDetaliedPokemon: any,
    filteredPokemons:IPokemon[]
    setFilteredPokemons:React.Dispatch<React.SetStateAction<IPokemon[]>>;
    input:string,
    setInput: React.Dispatch<React.SetStateAction<string>>;
    elementPokemon: IPokemon[]
    setElementPokemon:React.Dispatch<React.SetStateAction<IPokemon[]>>;



}
export const ContexctPages = createContext({} as IPokedexContexct);

export const ProviderPages = ({ children }: listProviderProps) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [detailedPokemon, setDetaliedPokemon]=useState<IPokemon | null>(null)
    const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);
    const [input, setInput] =useState<string>('')
    const[elementPokemon,setElementPokemon] = useState<IPokemon[]>([]) 
   

    useEffect(() => {
        async function fechPokemonsData() {
            try {
              const response = await api.get("/pokemon", {
                params: {
                  limit: 200, 
                },
              })
                const results = response.data.results
                const pokemonsDataPromisses = results.map(async (pokemon: { name: string; url: string }) => {
                    const detailsResponse = await api.get<IPokemonDetails>(pokemon.url);
                    const detailsData = detailsResponse.data
                   
               return {
                 ...detailsData,
          };

                })
                const pokemonsData = await Promise.all(pokemonsDataPromisses)
                setPokemons(pokemonsData);
                setFilteredPokemons(pokemonsData);
                setElementPokemon(pokemonsData)
            }
            catch (error) {
                console.error("Error fetching pokémon data:", error)
            }
        
        }
        fechPokemonsData()
    }, [])

  

    return (
        <ContexctPages.Provider
            value={{
                pokemons,
                detailedPokemon,
                setDetaliedPokemon,
                filteredPokemons,
                setFilteredPokemons,
                input,
                setInput,
                elementPokemon,
                setElementPokemon,
               

            }}
        >{children}
        </ContexctPages.Provider>
    );
}

export function useSimulationContext(): IPokedexContexct {
    const contexct = useContext(ContexctPages)
    return contexct
  }