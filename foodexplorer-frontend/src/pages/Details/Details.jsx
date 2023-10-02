import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Details(){
  return(
    <Container>
       <Header/>
       <Button title="Entrar"/>
    </Container>
   
  )
}