import { utils } from '@module-versioning-poc/utils';
import { Route, Routes, Link } from 'react-router-dom';
import { lazy, useState } from 'react';

const About = lazy(() => import('@module-versioning-poc/about'));
const IntroductionV040 = lazy(
  () =>
    import(
      'https://rcosta-daon.github.io/module-versioning-poc/introduction/0.4.0/index.js'
    )
);

export function App() {
  const [url, setUrl] = useState('');

  const Dynamic = lazy(() => import(url));

  return (
    <>
      <h1>Welcome to Client!</h1>

      <p>{utils()}</p>

      <label htmlFor="url">Dynamic URL:</label>
      <input
        type="text"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <nav role="navigation">
        <ul>
          <li>
            <Link to="/module-versioning-poc/">Home</Link>
          </li>
          <li>
            <Link to="/module-versioning-poc/about">About</Link>
          </li>
          <li>
            <Link to="/module-versioning-poc/introduction">
              Introduction v0.4.0
            </Link>
          </li>
          <li>
            <Link to="/module-versioning-poc/dynamic">Dynamic</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/module-versioning-poc/" element={<p>Home</p>} />
        <Route path="/module-versioning-poc/about" element={<About />} />
        <Route
          path="/module-versioning-poc/introduction"
          element={<IntroductionV040 />}
        />
        <Route path="/module-versioning-poc/dynamic" element={<Dynamic />} />
      </Routes>
    </>
  );
}

export default App;
