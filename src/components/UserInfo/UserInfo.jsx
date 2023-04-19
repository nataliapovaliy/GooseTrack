import { useSelector } from 'react-redux';
import { Name, Avatar, AvatarLetter, AvatarImg } from './UserInfo.styled';
// import { selectUser } from 'redux/auth/auth-selectors';

export const UserInfo = () => {
  // TODO:
  // const avatar = useSelector(getUserAvatar);
  const avatar = 'https://img.icons8.com/officel/32/null/avatar.png'; // временно для теста

  // TODO:
  // const userName = useSelector(selectUser);
  const userName = 'Tom'; // временно для теста
  const firstLetter = userName.slice(0, 1).toUpperCase();

  return (
    <>
          <Name>{userName}</Name>
          <Avatar>{avatar === null ? (<AvatarLetter>{firstLetter}</AvatarLetter>) : (<AvatarImg src={avatar} alt="Avatar" />)}</Avatar>
    </>
  );
};
