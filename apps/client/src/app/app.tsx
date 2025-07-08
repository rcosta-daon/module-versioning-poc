import { ModuleVersioningPocIntroduction } from '@module-versioning-poc/introduction';
import { utils } from '@module-versioning-poc/utils';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <h1>Welcome to Client!</h1>
      <p>{utils()}</p>
      <div>
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/page-2" element={<ModuleVersioningPocIntroduction />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
