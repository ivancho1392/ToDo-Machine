import styles from './TodoItem.module.css';
import { CgRadioCheck, CgRadioChecked, CgTrashEmpty } from 'react-icons/cg';

function TodoItem(props) {
  return (
    <li className={styles.TodoItem}>
      <span 
      className={styles.IconCheck}
      onClick={props.onComplete}
      >
        {props.completed ? <CgRadioChecked className={styles.CheckIconChecked} /> : <CgRadioCheck className={styles.CheckIcon}/>}
        
      </span>
      <p className={`${styles.TodoItemP} ${props.completed && styles.TodoItemPComplete}`}>
        {props.text}
      </p>
      <span 
      className={styles.IconDelete}
      onClick={props.onDelete}
      >
        <CgTrashEmpty className={styles.TrashEmpty} />
      </span>
    </li>
  );
}

export { TodoItem };