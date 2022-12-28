import React from "react";

function Lista() {
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
    }
  ];
  return (
    <aside>
      <h2>
        <ul>
          {tarefas.map((item, index) => (
            <li key={index}>
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          ))}
        </ul>
      </h2>
    </aside>
  );
}

export default Lista;
