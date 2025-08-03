import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../template/MainTemplate";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks } from "../../utils/sortTasks";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { useEffect } from "react";

export function History() {
  const { state, dispatch } = useTaskContext();
  const sortedTasks = sortTasks({ tasks: state.tasks });
  const hasTasks = state.tasks.length > 0;
    useEffect(() => {
      document.title = "Histórico - Chronos Pomodoro";
    }, []);

  function handleResetHistory() {
    if (!confirm("Tem certeza que deseja apagar o histórico?")) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            {hasTasks && (
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Apagar todo o histórico"
                title="Apagar histórico"
                onClick={handleResetHistory}
              />
            )}
          </span>
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasks.map((tasks) => {
                  const taskTypeDictionary = {
                    workTime: "Foco",
                    shortBreakTime: "Descanso curto",
                    longBreakTime: "Descanso longo",
                  };

                  return (
                    <tr key={tasks.id}>
                      <td>{tasks.name}</td>
                      <td>{tasks.duration}</td>
                      <td>{formatDate(tasks.startDate)}</td>
                      <td>{getTaskStatus(tasks, state.activeTask)}</td>
                      <td>{taskTypeDictionary[tasks.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Ainda não existem tarefas criadas!
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}
