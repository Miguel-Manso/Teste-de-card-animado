import { Card, CardContainer, CardImage, CardTitulo, Descricao, Seta, SubContainer, SubTitulo } from "./style.jsx";


export const CardComp = () => {
    return (
        <CardContainer>
        <Card>
            <CardImage> <CardTitulo><span>Jogandofoddaci</span></CardTitulo></CardImage>
          

            <SubContainer>
            <SubTitulo><span>Leite</span></SubTitulo>
            <Descricao><p>Esse é o melhor canal do mundo, sem caô</p></Descricao>
            </SubContainer>
            <Seta > <span>&#8673;</span> </Seta>
            

        </Card>
        </CardContainer>
    );
  };
  