import styles from '../styles/Result.module.css';

import { useRouter } from 'next/router';

// components
import Display from '../components/Display';
import Button from '../components/Button';

export default function Result() {
  const router = useRouter();

  const total = Number(router.query.total);
  const rightAnswers = Number(router.query.rightAnswers);
  const percent = Math.round((rightAnswers / total) * 100);

  return (
    <div className={styles.result}>
      <h1>Resultado Final</h1>
      <div className={styles.displays}>
        <Display text="Perguntas" value={total} />
        <Display text="Corretas" value={rightAnswers} backgroundColor="#DE6A33" />
        <Display text="Percentual" value={`${percent}%`} backgroundColor="#9CD2A4" />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  );
}