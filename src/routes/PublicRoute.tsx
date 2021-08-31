import { Route } from 'react-router-dom';

interface IProps {
  path: string;
  exact: boolean;
  component: React.ElementType;
  layout: React.ElementType;
}

const PublicRoute: React.FC<IProps> = ({
  path,
  exact,
  component: Component,
  layout: Layout,
}) => {
  return (
    <Route path={path} exact={exact}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default PublicRoute;
