import React from "react";
import { ContainetAside } from "./style";
import { BtnPrimary } from "presentation/components/Buttons";
import Icons from "utils/icons";
interface propSideMenu {
  open: boolean;
}
export default function SideMenu({ open }: propSideMenu) {
  return (
    <ContainetAside open={open}>
      <ul className="l-aside__item">
        <li>
          <BtnPrimary title="Quero Ajudar" onClick={() => alert("roasivan")} />
        </li>
        <li>
          <a href="">
            {Icons.news}
            Notícias
          </a>
        </li>
        <li>
          <a href="">
            {Icons.partners}
            Parceiros
          </a>
        </li>
        <li>
          <a href="">
            {Icons.projects}
            Projetos
          </a>
        </li>
        <li>
          <a href="">
            {Icons.who_we_are}
            Quem Somos
          </a>
        </li>
        <li>
          <a href="">
            {Icons.transparency}
            Transparência
          </a>
        </li>
      </ul>
    </ContainetAside>
  );
}
