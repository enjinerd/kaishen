import styles from './Button.module.css';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  data_id?: string;
};

const Button = ({ children, onClick, className, data_id }: Props) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    data-id={data_id}
  >
    {children}
  </button>
);

export default Button;
