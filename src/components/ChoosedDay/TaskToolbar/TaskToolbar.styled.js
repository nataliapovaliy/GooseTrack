import styled from "styled-components";

export const TaskToolbarStyled = styled.div`
    display: flex;
    flex-direction: row;
   margin: 0 px 0px 0px 0px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
`;

export const TaskToolbarBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: 0px 20px 0px 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
`;
