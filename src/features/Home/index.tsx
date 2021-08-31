import { MainLayout } from 'Layouts';
import { Switch, useRouteMatch } from 'react-router-dom';
import PublicRoute from 'routes/PublicRoute';
import { Main } from './pages';

const Home = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <PublicRoute
        path={match.url}
        exact={true}
        component={Main}
        layout={MainLayout}
      />
    </Switch>
  );
};

export default Home;
