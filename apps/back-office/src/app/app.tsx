// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { utils } from '@module-versioning-poc/utils';

export function App() {
  return (
    <>
      <h1>Welcome to Back office!</h1>
      <p>{utils()}</p>
    </>
  );
}

export default App;
