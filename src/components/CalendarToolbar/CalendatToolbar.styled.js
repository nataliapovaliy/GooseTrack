import styled from 'styled-components';

export const ToolbarContainer = styled.div`
display: flex;
justify-content: space-between;

border-radius: 8px;
/* background-color: var(--main-background-color); */
margin-bottom: 14px;
/* padding: 14px; */
`

export const ToolbarWrapper = styled.div`
display: flex;
justify-content: space-between;

border-radius: 8px;
/* background-color: var(--main-background-color); */
margin-bottom: 14px;
/* padding: 14px; */
`

export const ToolbarWrap = styled.div`
display: flex;
width: 170px;
gap: 8px;
align-items: center;
justify-content: center;
padding: 12px 8px;
margin-right: 8px;
border-radius: 8px;
background-color: var(--accent-background-color);
`

export const ToolbarSpan = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 1,12;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;

`

export const ToolbarButton = styled.button`
padding: 10px 8px;

border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px;
background-color: var(--main-background-color);

`

export const ToolbarButtonMonth = styled.button`
padding: 8px 16px;
gap: 149px;

width: 82px;
height: 34px;
border: none;
background: #CAE8FF;
border-right: 1px solid rgba(62, 133, 243, 0.2);
border-radius: 8px 0px 0px 8px;
`


export const ToolbarButtonDay = styled.button`
padding: 8px 16px;
gap: 149px;

width: 82px;
height: 34px;
border: none;
background: #E3F3FF;
border-radius: 0px 8px 8px 0px;
`