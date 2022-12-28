import Item from "./Item";
import style from "./Lista.module.scss";

export default function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "03:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>
        <ul>
          {tarefas.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </ul>
      </h2>
    </aside>
  );
}
