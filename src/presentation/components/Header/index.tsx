import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./style";
import Images from "utils/images";
import { BtnPrimary } from "presentation/components/Buttons";
import SideMenu from "./SideMenu";
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);
  return (
    <HeaderContainer open={open}>
      <div className="l-background" onClick={() => setOpen(false)}></div>
      <SideMenu open={open} />
      <div className="l-header">
        <div
          onClick={() => setOpen(!open)}
          className={open ? "l-header__menu l-header__open" : "l-header__menu"}
        >
          <div className="l-header__menu_burger"></div>
        </div>
        <img src={Images.Logo.src} alt={Images.Logo.alt} />
        <ul className="l-header__item_header">
          <li>
            <a href="">Notícias</a>
          </li>
          <li>
            <a href="">Parceiros</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Quem Somos</a>
          </li>
          <li>
            <a href="">Transparência</a>
          </li>
          <li>
            <BtnPrimary title="Quero Ajudar" onClick={() => alert("opa")} />
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
