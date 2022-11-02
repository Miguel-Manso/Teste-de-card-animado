import styled from "styled-components";
import banner from "../../Assets/banner_home.svg";

export const LeiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Container = styled.div`
  display: block;
  overflow: auto;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #414141;
  height: 100vh;
  width: 100vw;
`;

const Seção = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 88%;
  max-height: fit-content;
  background-image: url(${banner});
  background-size: cover;
  box-shadow: 0px 4px 4px 2px rgba(0,0,0,0.1);
  word-wrap: break-word;
`;

const Titulos = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  text-align: center;
  margin-right: 3%;
  margin-left: auto;

  & span {
    margin: 3%;
    font-size: 23px;
    color: white;
  }
`;


const Titulo = styled.p`
  font-size: 45px;        
  color: white;
  justify-content: center;
  position: relative;
`;

const Cartão = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: white;
  flex-direction: column;
`;

const TituloCartão = styled.h1`
width: 50%;
font-size: 3rem;
font-weight: lighter;
`;

const TextoCartão = styled.p`
  width: 50%;
  margin: 3rem;
  color: black;
  text-align: center;
  font-size: 1.2rem;
  font-weight: lighter;
`;

const Separador = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const ImagemCartão = styled.img`
  height: 8rem;
`;

export { Container, Seção, Titulo, Titulos, Cartão, TextoCartão, TituloCartão, Separador, ImagemCartão} 