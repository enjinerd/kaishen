import styles from './Button.module.css';
export function Button({ children, onClick, data_id, className }) {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick} data_id={data_id}>
      {children}
    </button>
  );
}
