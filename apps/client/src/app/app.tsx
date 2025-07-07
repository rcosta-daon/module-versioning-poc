// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Introduction } from '@module-versioning-poc/introduction';
import { utils } from '@module-versioning-poc/utils';

export function App() {
  return (
    <>
      <h1>Welcome</h1>

      <p>{utils()}</p>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/introduction">Introduction</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </>
  );
}

export default App;
