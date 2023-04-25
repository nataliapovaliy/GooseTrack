import styled from 'styled-components';

export const FormPositionWrapper = styled.div`
position: absolute;
z-index: 100;
background-color:rgba(0, 0, 0, 0.35);
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;

@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1440px) {

}
`

export const FormWrapper = styled.div`

width: 280px;
background-color: var(--main-background-color);
color: var(--task-field-text-color);


@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1440px) {

}
`