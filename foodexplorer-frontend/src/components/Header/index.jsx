import { Container, Logo } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { MdFoodBank } from "react-icons/md";
import { PiReceiptBold } from "react-icons/pi"

export function Header() {
  return (
    <Container>
      <AiOutlineMenu />
      <Logo>
        <p>Food Explorer</p>
      </Logo>
      <PiReceiptBold/>
    </Container>
  );
}
