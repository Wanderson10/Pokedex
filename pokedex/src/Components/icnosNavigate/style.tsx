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

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const growAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

export const Navigate = styled.nav`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #151515;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);



 
  .elementIcons {
    
    width: 40px;
    margin-left:6px;
  animation: ${fadeInAnimation} 0.5s ease-in-out, ${growAnimation} 1s ;

  &:hover {
    cursor:pointer;
    animation: ${bounceAnimation} 0.5s ease-in-out, ${growAnimation} 1s infinite;
  }
  @media (max-width: 300px) {
    
     
      
    

  }
  }
  

  div {
    margin-top: 15px;

    @media (max-width: 500px) {
     width:100%;
    

  }

 
   
  }
  


  @media (max-width: 767px) {
    height: 50px;
    padding: 15px;

    .elementIcons {
      width: 30px;
    }
  }

 
  @media (min-width: 768px) {
    height: 70px;
    padding: 10px;

    .elementIcons {
      width: 40px;
    }
  }

  @media (max-width: 500px) {
   padding:100px;
    

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
  font-family: "Press Start 2P", cursive;
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

  @media (max-width: 767px) {
    font-size: 10px;
    padding: 1px 5px;
    max-width: 100%;
  }


 
  
`;

