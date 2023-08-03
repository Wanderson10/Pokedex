import { styled, keyframes } from "styled-components";

const retroButtonAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

export const DivSearch = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  margin-bottom:15px;
`;

export const Input = styled.input`
  height: 20px;
  border: 2px solid #777;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  border:none;
  margin-right: 10px;
  transition: box-shadow 0.3s ease;


`;

export const RetroButton = styled.button`
  height: 30px;
  padding: 0 15px;
  background-color: red;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  font-family: 'Orbitron', sans-serif;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.3s ease;
  border:none;
  &:hover {
    animation: ${retroButtonAnimation} 1s infinite;
   
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;