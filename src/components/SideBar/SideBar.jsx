import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { Container, H2, H3, Button, Item, Link, Image, InnerWrapper,} from './SideBar.styled';
import goose from './goose_sidebar.png';

export const SideBar = () => {
const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <InnerWrapper> <Image src={goose} alt="Goose"></Image> <H2>GooseTrack</H2> </InnerWrapper>
        <H3>User Panel</H3>
        <ul>
          <Item> <Link to="/account"> My account </Link> </Item>
          <Item> <Link to="/calendar"> Calendar</Link> </Item>
        </ul>
      </div>
      <Button type="button" onClick={() => dispatch(logout())}> Log out </Button>
    </Container>
  );
};
