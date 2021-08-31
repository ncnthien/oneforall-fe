import { Logo } from 'assets/images/svgs';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='container'>
          <div className='d-flex align-items-center'>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
