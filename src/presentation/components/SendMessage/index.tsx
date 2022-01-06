import React from "react";

// COMPONENTS
import { BtnSendMessage } from "../Buttons";

// STYLES
import { ContainerSendMessage } from "./style";

export default function SendMessage() {
  return (
    <ContainerSendMessage>
      <article className="message__header">
        <h1 className="message__title">Envie-nos uma mensagem</h1>
        <span className="message__line"></span>
        <p className="message__description">
          Escreva-nos e entratemos em contato o mais brevemente possível
        </p>
      </article>
      <form className="message__form">
        <input type="text" className="input__text" placeholder="Nome:" />
        <input type="text" className="input__text" placeholder="E-mail:" />
        <textarea
          className="input__text__area"
          placeholder="Mensagem: "
        ></textarea>
        <BtnSendMessage title="VER MAIS" />
      </form>
    </ContainerSendMessage>
  );
}
