import { Routes } from 'react-router';
import { Route } from 'react-router';

import router, { Router, SubRoutes } from './router';

function App() {
  return (
    <>
      <Routes>
        {router.map((route: Router, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          >
            {route.subRoutes &&
              route.subRoutes.map((sub: SubRoutes, indexSub: number) => (
                <Route
                  key={indexSub}
                  path={sub.path}
                  index={sub.index}
                  element={sub.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
