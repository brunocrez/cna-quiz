import styles from '../styles/Display.module.css';

interface DisplayProps {
  value: string | number;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

export default function Display(props: DisplayProps) {
  return (
    <div className={styles.display}>
      <div className={styles.value} style={{
        backgroundColor: props.backgroundColor ?? '#FDD60F',
        color: props.fontColor ?? '#333'}
      }>
        {props.value}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  );
}