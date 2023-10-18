import { Container, Logout, Receipt } from "./styles";
import Logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";
import { LuLogOut } from "react-icons/lu";
import { PiReceiptBold } from "react-icons/pi";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo da Food Explorer" />
      <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
      <Receipt>
        
        <PiReceiptBold size={32}/>
        <p>Pedidos (0)</p>
      </Receipt>
      <Logout>
        <LuLogOut/>
      </Logout>
    </Container>
  );
}
