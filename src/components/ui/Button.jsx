import styles from './Button.module.css';
export function Button({ children, onClick, dataId }) {
  return (
    <button className="btn" onClick={onClick} dataId={dataId}>
      {children}
    </button>
  );
}
