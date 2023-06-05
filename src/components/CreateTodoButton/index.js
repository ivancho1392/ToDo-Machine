import styles from './CreateTodoButton.module.css';

function CreateTodoButton (props) {
    return (
        <button 
        className={styles.CreateTodoButton}
        onClick={props.onCreate}
        >+</button>
    );
}

export {CreateTodoButton};