import { useDispatch } from 'react-redux';
import { closeSideBar } from 'redux/modal/globalSlice';
import { H3, Item, Link, Svg } from './UserNav.styled';
import icon from '../../images/icons.svg';
import { routes } from 'Routes/Routes';

export const UserNav = () => {
  const dispatch = useDispatch();

  const closeMobileMenu = () => dispatch(closeSideBar());
  return (
    <>
      <H3>User Panel</H3>
      <ul>
        <Item onClick={closeMobileMenu}>
          <Link to={routes.account}>
            <Svg>
              <use href={icon + '#icon-user-account'}></use>
            </Svg>
            My account
          </Link>
        </Item>
        <Item onClick={closeMobileMenu}>
          <Link to={routes.calendar + '/' + routes.month}>
            <Svg>
              <use href={icon + '#icon-calendar'}></use>
            </Svg>
            Calendar
          </Link>
        </Item>
      </ul>
    </>
  );
};
