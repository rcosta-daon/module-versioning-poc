// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <h1>Welcome</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/page-2" element={<p>Page 2 </p>} />
      </Routes>
    </>
  );
}

export default App;
