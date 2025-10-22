import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import { routes } from './routes';
import { Layout } from './component/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        {routes.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
}
