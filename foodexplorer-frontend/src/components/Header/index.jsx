import { Container, Logo, Receipt } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { PiReceiptBold } from "react-icons/pi";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <AiOutlineMenu />
      <Logo>
        <p>Food Explorer</p>
      </Logo>
      <Receipt>
        <PiReceiptBold />
        <button>
           0 
        </button>
      </Receipt>
    </Container>
  );
}
