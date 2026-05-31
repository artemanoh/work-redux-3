import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { selectCount, selectTodos } from "redux/todos/todosSelectors";

export const TaskCounter = () => {
  const { acttive, completed } = useSelector(selectCount);
  return (
    <div>
      <p className={css.text}>Active: {acttive}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};