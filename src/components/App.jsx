import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
