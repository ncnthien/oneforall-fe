import { Header } from 'components';

interface IProps {
  children: React.ElementType;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
