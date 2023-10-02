import { Container, Logo, Receipt } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { PiReceiptBold } from "react-icons/pi";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile";

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(true)

  return (
    <Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        />
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
