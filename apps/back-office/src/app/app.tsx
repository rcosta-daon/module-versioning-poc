// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { utils } from '@module-versioning-poc/utils';

export function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>{utils()}</p>
    </div>
  );
}

export default App;
