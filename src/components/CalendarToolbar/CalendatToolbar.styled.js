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

export const ToolbarWrap = styled.button`
display: flex;
width: 170px;
gap: 8px;
align-items: center;
justify-content: center;
padding: 8px 12px;
margin-right: 8px;
border: none;
border-radius: 8px;
background-color: var(--accent-background-color);
cursor: pointer;
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

export const ToolbarButtonLeft = styled.button`
padding: 8px 10px;

border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px 0px 0px 8px;
background-color: var(--main-background-color);
cursor: pointer;

`

export const ToolbarButtonRight = styled.button`
padding: 8px 10px;

border: 1px solid rgba(220, 227, 229, 0.8);

border-radius: 0px 8px 8px 0px;
background-color: var(--main-background-color);
cursor: pointer;
`

export const ToolbarButtonMonth = styled.button`
padding: 8px 16px;
gap: 149px;

width: 82px;
height: 34px;
border: none;
background-color: #CAE8FF;
border-right: 1px solid rgba(62, 133, 243, 0.2);
border-radius: 8px 0px 0px 8px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */
color: #3E85F3;
text-align: center;
cursor: pointer;

:hover {
  background-color: rgb(189 222 247);
  }
`


export const ToolbarButtonDay = styled.button`
padding: 8px 16px;
gap: 149px;

width: 82px;
height: 34px;
border: none;
background: #E3F3FF;
border-radius: 0px 8px 8px 0px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */
color: #3E85F3;
text-align: center;
cursor: pointer;

:hover {
  background-color: rgb(189 222 247);
  }
`

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #DCE3E5;
  stroke: #DCE3E5;
  :active {
  fill: #616161;
  }
  :hover {
  fill: #616161;
  stroke: #616161;

  
  }
  :focus {
  fill: #616161;
  }
`;