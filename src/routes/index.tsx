import { Home } from 'features';
import { MainLayout } from 'Layouts';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path='/' exact component={Home} layout={MainLayout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
