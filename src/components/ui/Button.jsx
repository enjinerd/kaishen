export function Button({ children, onClick, data_id, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick} data_id={data_id}>
      {children}
    </button>
  );
}
