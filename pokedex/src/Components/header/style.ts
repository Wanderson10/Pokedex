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

const retroLogoFilter = `
  contrast(1.5) brightness(1.2) sepia(0.5) saturate(2);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 5px;
  margin: -5px;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) inset;
`;

export const LogoImage = styled.img`
  width: 250px;
  height: 50px;
  filter: ${retroLogoFilter};

  @media (max-width: 767px) {
    width: 150px;
    height: 30px;
  }

 
  @media (min-width: 768px) {
    width: 250px;
    height: 50px;
  }
`;