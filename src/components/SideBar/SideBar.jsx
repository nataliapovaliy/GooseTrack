import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { logout } from 'redux/auth/auth-operations';
import { Container, H2, Button, Image, InnerWrapper, SvgLogOut, SvgClose,} from './SideBar.styled';
import { Modal } from 'components/Modal/Modal';
import { closeModalLogOut, closeSideBar, openModalLogOut,} from '../../redux/modal/globalSlice';
import { selectModalLogout } from '../../redux/modal/globalSelectors';
import goose from './goose_sidebar.png';
import icon from '../../images/icons.svg';
import { UserNav } from 'components/UserNav/UserNav';

export const SideBar = () => {
  const dispatch = useDispatch();

  const modalLogoutState = useSelector(selectModalLogout);
  const isTabletOrMobile = useMedia('(max-width: 1439px)');

  const closeLogoutModal = () => dispatch(closeModalLogOut());
  const closeMobileMenu = () => dispatch(closeSideBar());
  const openLogoutModal = () => dispatch(openModalLogOut());
  const logoutFu = () => { closeLogoutModal(); dispatch(logout()); };

  return (
      <Container>
        <div>
          <InnerWrapper>
            <Image src={goose} alt="Goose"></Image> <H2>GooseTrack</H2>
            {isTabletOrMobile && (
              <SvgClose onClick={closeMobileMenu}>
                <use href={icon + '#icon-x-close'}></use>
              </SvgClose>
            )}
          </InnerWrapper>
          <UserNav />
        </div>
        <Button type="button" onClick={openLogoutModal}>
          Log out
          <SvgLogOut>
            <use href={icon + '#icon-log-out'}></use>
          </SvgLogOut>
        </Button>
        {modalLogoutState && (
          <Modal
            closeModal={closeLogoutModal}
            typeOfModal={'logout'}
            actionFu={logoutFu}
          />
        )}
      </Container>
  );
};