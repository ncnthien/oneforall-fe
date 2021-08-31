import { Header } from 'components';

interface IProps {
  children: React.ElementType;
}

const BlankLayout: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default BlankLayout;
