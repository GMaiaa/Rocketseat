import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import {PiCaretLeft} from 'react-icons/pi'

export function Details(){
  return(
    <Container>
       <Header/>
        <ButtonText title="voltar" icon={PiCaretLeft}/>
    </Container>
   
  )
}