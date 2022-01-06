import React from "react";

// ASSETS
import Images from "utils/images";
import Icons from "utils/icons";

// COMPONENTS

// STYLES
import { ContainerFooter } from "./style";

export default function Footer() {
  return (
    <ContainerFooter>
      <article className="container__footer_infos">
        <div className="footer__infos">
          <article className="footer__infos__image">
            <img src={Images.LogoWhite.src} alt={Images.LogoWhite.alt} />
          </article>
          <article className="footer__infos__contacts">
            <h3 className="footer__infos__title">Contatos</h3>
            <ul className="footer__infos__datas">
              <li>
                <a href="#">{Icons.phone} (92) 99345-4816</a>
              </li>
              <li>
                <a href="#">{Icons.email} nomeemail@gmail.com</a>
              </li>
              <li>
                <a href="#">
                  {Icons.localization} AM - Itacoatiara, Av. Mario Andreazza, nº
                  789
                </a>
              </li>
            </ul>
          </article>
          <article className="footer__infos__social_networks">
            <h3 className="footer__infos__title">Siga-nos em:</h3>
            <ul className="footer__infos__datas__social">
              <li>
                <a href="">{Icons.facebook}</a>
              </li>
              <li>
                <a href="">{Icons.instagram}</a>
              </li>
              <li>
                <a href="">{Icons.youtube}</a>
              </li>
            </ul>
          </article>
        </div>
      </article>

      <article className="container__footer__copyright">
        <div className="footer__copyright">
          <span className="footer__text__copyright">
            © Copyright 2022. Todos os direitos reservados.
          </span>
        </div>
      </article>
    </ContainerFooter>
  );
}
