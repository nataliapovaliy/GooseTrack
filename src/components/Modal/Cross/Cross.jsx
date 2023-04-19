import { ModalCloseWraper, CloseLeft, CloseRight } from './cross.styled';

export const Cross = ({ height, func, bcgCr }) => {
  return (
    <ModalCloseWraper onClick={func}>
      <CloseLeft height={height} bcgCr={bcgCr}></CloseLeft>
      <CloseRight height={height} bcgCr={bcgCr}></CloseRight>
    </ModalCloseWraper>
  );
};
