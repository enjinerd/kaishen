import styles from './Button.module.css';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  data_id?: string;
};

const Button = ({ children, onClick, className, data_id, type }: Props) => (
  <button
    className={`${styles.btn} ${className}`}
    onClick={onClick}
    data-id={data_id}
    type={type}>
    {children}
  </button>
);

export default Button;
