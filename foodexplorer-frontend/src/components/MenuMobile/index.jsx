import { Input } from "../Input";
import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai'

export function MenuMobile({menuIsVisible, setMenuIsVisible}){
    return(
        <Container> 
            <AiOutlineClose size={20}/>
            <Input/>
            <button>
                Novo Prato
            </button>
            <button>
                Sair
            </button>
        </Container>
    )
}