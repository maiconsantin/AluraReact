import style from "./Botao.module.scss";

function Botao({texto}: {texto: string}) {
    return <button className={style.botao}>{texto}</button>;
}
export default Botao;
