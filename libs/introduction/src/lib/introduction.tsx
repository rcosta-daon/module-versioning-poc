import { utils } from '@module-versioning-poc/utils';
import styles from './introduction.module.css';

export function ModuleVersioningPocIntroduction() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModuleVersioningPocIntroduction! v2</h1>
      <p>{utils()}</p>
    </div>
  );
}

export default ModuleVersioningPocIntroduction;
