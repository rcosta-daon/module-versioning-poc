import { pageUtils } from '@module-versioning-poc/page-utils';
import styles from './introduction.module.css';

export function Introduction() {
  return (
    <div className={styles['container']}>
      <h2>Introduction</h2>
      <p>{pageUtils()}</p>
    </div>
  );
}

export default Introduction;
