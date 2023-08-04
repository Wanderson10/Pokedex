import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  .elementIcons {
    width: 40px;
  }

  div {
    margin-top: 15px;
  }
`;


export const LogoImage = styled.img`
  width: 250px;
  height: 50px;


  @media (max-width: 767px) {
    width: 150px;
    height: 30px;
  }

 
  @media (min-width: 768px) {
    width: 250px;
    height: 50px;
  }
`;