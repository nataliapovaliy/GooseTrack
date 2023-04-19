import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { Container, H2, H3, Button, Item, Link, Image, InnerWrapper, Svg, SvgLogOut} from './SideBar.styled';
import goose from './goose_sidebar.png';
import icon from '../../images/icons.svg';

export const SideBar = () => {
const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <InnerWrapper> <Image src={goose} alt="Goose"></Image> <H2>GooseTrack</H2> </InnerWrapper>
        <H3>User Panel</H3>
        <ul>
          <Item> <Link to="/account"> <Svg> <use href={icon + '#icon-user-account'}></use> </Svg> My account </Link> </Item>
          <Item> <Link to="/calendar"> <Svg> <use href={icon + '#icon-calendar'}></use> </Svg> Calendar</Link> </Item>
        </ul>
      </div>
      <Button type="button" onClick={() => dispatch(logout())}> Log out <SvgLogOut> <use href={icon + '#icon-log-out'}></use> </SvgLogOut></Button>
    </Container>
  );
};
