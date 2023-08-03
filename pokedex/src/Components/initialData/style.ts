import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.4), 0 0 60px rgba(255, 0, 0, 0.2), 0 0 80px rgba(255, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.6), 0 0 60px rgba(255, 0, 0, 0.4), 0 0 80px rgba(255, 0, 0, 0.2);
  }
`;

export const Main = styled.main`
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px);
  background-size: 20px 20px;
 
  animation: ${fadeInAnimation} 0.5s ease-in-out;

  /* Estilos para dispositivos menores (até 767px) */
  @media (max-width: 767px) {
    padding: 10px;
    gap: 10px;
  }
`;

export const Card = styled.li`
position: relative;
  width: 20%;
  padding: 20px;
  box-sizing: border-box;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  /* Estilos para dispositivos menores (até 767px) */
  @media (max-width: 767px) {
    width: 45%;
    padding: 10px;
  }
  h2 {
    margin-top: 10px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-transform: capitalize;
    font-family: "Press Start 2P", cursive;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    animation: ${fadeInAnimation} 0.5s ease-in-out;
  }

  img {
    display: block;
    width: 100%;
    height: 60%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    filter: contrast(1.2) brightness(0.8) sepia(0.3) saturate(2);

    padding: 10px;
    margin: -10px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
    margin-bottom: 15px;
    background-image: linear-gradient(
    rgba(0, 0, 0, 0.5) 1px,
    transparent 1px
   
  ),
  linear-gradient(90deg, rgb(34, 34, 34) 1px, transparent 1px);
  background-size: 5px 5px;
  }

  div {
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
    color: #fff;
    text-transform: capitalize;
    animation: ${fadeInAnimation} 0.5s ease-in-out;

    /* Estilos para dispositivos menores (até 767px) */
    @media (max-width: 767px) {
      font-size: 16px;
    }

    img {
      display: block;
    width: 50px;;
    height: 50px; // Definindo altura fixa para a imagem
    object-fit: cover; // Faz a imagem se ajustar ao tamanho definido mantendo a proporção
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   
   
    padding: 10px;
    margin: -10px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
    margin-bottom: 15px;
  }
  }

  ul {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    animation: ${pulseAnimation} 0.5s infinite;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 10px;
      pointer-events: none;
    }
  }
`;

export const Steel = styled.img`
 width:100px;
 height:50px;
`;
