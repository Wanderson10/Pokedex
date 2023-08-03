import styled, { keyframes } from 'styled-components';

const expandAndShrink = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

// Estilos gerais
export const Main = styled.main`
  background-color: #000;
  padding: 20px;
  border: 10px solid #ffffff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  position: relative;

  
`;

export const DivGrafics = styled.div`
  /* Estilos para dispositivos móveis (até 767px) */
  background-color: black;
  border: 5px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  margin-top: 15px;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5) 1px,
    transparent 1px
  ),
  linear-gradient(90deg, rgb(34, 34, 34) 1px, transparent 1px);
  background-size: 5px 5px;

  /* Estilos para dispositivos maiores (a partir de 768px) */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
`;

export const PokemonDetails = styled.div`
  /* Estilos gerais */
  background-color: #333;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-family: "Press Start 2P", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5) 1px,
    transparent 1px
  ),
  linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px);
  background-size: 5px 5px;
  
`;

export const PokemonTitle = styled.h1`
  /* Estilos gerais */
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
  padding-bottom: 15px;
  font-family: 'Orbitron', sans-serif;

`;

export const PokemonImage = styled.img`
  /* Estilos gerais */
  display: block;
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
  border-radius: 5px;
  background-color: black;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5) 1px,
    transparent 1px
  ),
  linear-gradient(90deg, rgb(34, 34, 34) 1px, transparent 1px);
  background-size: 5px 5px;
`;

export const PokemonAttribute = styled.h2`
  /* Estilos gerais */
  font-family: 'Orbitron', sans-serif;

  font-size: 20px;
  text-align: center;
  margin-bottom:10px;
`;

export const EvolutionList = styled.ul`
  /* Estilos gerais */
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  list-style: none;
  background-color: black;
  border: 4px solid #ffffff;
  width:40%;
  min-width:240px;
  padding:20px 20px;
  overflow-x: auto; 
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5) 1px,
    transparent 1px
  ),
  linear-gradient(90deg, rgb(34, 34, 34) 1px, transparent 1px);
  background-size: 5px 5px;
`;

export const EvolutionItem = styled.li`
  
  font-size: 18px;
  margin-right:5px;
  font-family: 'Orbitron', sans-serif;


  
  img {
    &:hover {
      animation: ${expandAndShrink} 2s ease-in-out infinite;
      cursor: pointer;
    }
  }
  /* Estilos para dispositivos maiores (a partir de 768px) */
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease;
      cursor: pointer;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      border: 1px solid white;
    }
  }

  @media (max-width: 400px) {
    margin-left:10px;

    h3{
      font-size:16px;
    }
    p{
      font-size:15px;
    }
  }
`;

export const EvolutionLink = styled.a`
  /* Estilos gerais */
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const RetroButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 2px 8px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }

`;