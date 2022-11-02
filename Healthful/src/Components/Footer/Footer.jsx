import { FooterDiv, FooterP, FooterSpan, ImagemFooter } from "./style.jsx";
import Logo from "../../Assets/logo_small.svg"

export function Footer(){
  return(
    
      <FooterDiv>
        <FooterP>
        <ImagemFooter src={Logo}> 
        </ImagemFooter>

        
          <FooterSpan></FooterSpan>
         
        </FooterP>

      </FooterDiv>

  )
}