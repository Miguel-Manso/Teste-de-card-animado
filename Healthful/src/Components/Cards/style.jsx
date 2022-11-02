import styled from "styled-components";
import leite from "../../Assets/vaca.jpg"

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #444;
   
`

export const Card = styled.div`
   border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(#333, #333);
    transition: all .5s;

    :hover {
    background-image: linear-gradient(#672abf, #380e74)
    
    ;
  
}
`

export const CardImage = styled.div`
    background-image: url(${leite});
   background-position: center;
   background-size: cover;
   width: 360px;
   height: 200px;
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: .8;
   transition: all .5s;
   z-index: 2;
   position: relative;

    :hover{
      width: 430px;


    }

`
export const CardTitulo = styled.span`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 100;
    font-style: italic;
    transition: all .5s;
    position:relative;

    :hover{
      font-size: 28px;
    }
`

export const SubContainer = styled.div`
   padding: 0px 20px;
    height: 0%;
    opacity: 0;
    transition: all .5s;
    position: relative; 
    overflow: hidden;
    transform: translateY(30px);

    :hover{
   max-height: 260px;
    padding: 20px;
    transform: translateY(0);
    opacity: 1;
    }


`
export const SubTitulo = styled.span`
   font-size: 20px;
    font-weight: bold;
    margin: 0;

`

export const Descricao = styled.p`
   
    font-size: 14px;
    font-weight: 100;
    opacity: .7;


`
export const Seta = styled.div`
    padding: 15px;
    transform: rotate(-180deg);
    transition: all .5s;
    font-size: 24px;


    :hover {
      transform: rotate(0);
       }
`