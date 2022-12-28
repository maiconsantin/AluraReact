import style from "./Botao.module.scss";

export default function Botao({texto}: {texto: string}) {
    return <button className={style.botao}>{texto}</button>;
}