import styles from './Button.module.css';
export function Button({ children, onClick, dataId, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick} dataId={dataId}>
      {children}
    </button>
  );
}
