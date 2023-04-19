import { Button } from '../Button/Button';
import { LeftButton, RightButton } from './AddButtons.styled';

export const AddButtons = () => {
  return (
    <>
      <LeftButton>
        <Button cross={true} bcg={'#3E85F3'} color={'#FFFFFF'} text={'Add'} />
      </LeftButton>
      <RightButton>
        <Button bcg={'#EFEFEF'} color={'#111111'} text={'Cancel'} />
      </RightButton>
    </>
  );
};
