import React from 'react';
import Botao from "../Botao/index";
import style from "./Formulario.module.scss";
export default class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00:00",
  }

  adicionaTarefa(evento:React.FormEvent<HTMLFormElement>){
      evento.preventDefault();
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionaTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adcione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value })}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao texto="Adicionar" />
      </form>
    );
  }
}
