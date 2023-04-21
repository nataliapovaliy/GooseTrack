import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { Name, Avatar, AvatarLetter, AvatarImg } from './UserInfo.styled';

export const UserInfo = () => {
  const selector = useSelector(selectUser);
  const name = selector.user?.name || 'Name';
  const avatar = selector.user?.avatarURL;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();

  return (
    <>
          <Name>{name}</Name>
          <Avatar>{avatar === null ? (<AvatarLetter>{firstLetter}</AvatarLetter>) : (<AvatarImg src={avatar} alt="Avatar" />)}</Avatar>
    </>
  );
};
