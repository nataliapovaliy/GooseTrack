import styled from 'styled-components';

export const SectionNull = styled.section`
    padding-top: 187px;
    height: 770px;
    margin-bottom: 64px;
    background-color: var(--accent-background-color);
`

export const Img = styled.img`
    width: 150px;
    height: 149px;
    margin: auto;

  /* @media (min-width: 1440px) {

  } */
`;

export const Title = styled.h1`
    text-align: center;
    font-family: 'Coolvetica';
    font-weight: 400;
    font-size: 120px;
    line-height: 1.25;
    color: #FFFFFF;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Div = styled.div`
    width: 196px;
    margin: auto;
    display: flex;
    gap: 24px;
    align-items: center;
`;

export const LinkSign = styled.a`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    text-decoration-line: underline;
    color: var(--btn-text-color);
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    cursor: pointer;
`;

export const Button = styled.button`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--accent-color);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 121px;
    height: 49px;
    padding: 14px;

    background: var(--main-background-color);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
        border-radius: 16px;
    border: none;
    cursor: pointer;
`;

export const SvgLogIn = styled.svg`
    width: 18px;
    height: 18px;
    margin-left: 6px;
    stroke: var(--accent-color);
    fill: none;
    /* @media screen and (min-width: 768px) {

    }
    @media screen and (min-width: 1440px) {

    } */
`;

export const SectionFirst = styled.section`
    width: 1107px;
    height: 700px;
    margin-left: 205px;
    margin-right: 128px;
    margin-bottom: 64px;

    display: flex;
    gap: 228px;
`;

export const SectionSecond = styled.section`
width: 1107px;
    height: 700px;
    margin-left: 128px;
    margin-right: 205px;
    margin-bottom: 64px;

    display: flex;
    gap: 228px;
`;

export const DivSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const H2 = styled.h2`
    margin-bottom: 20px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 104px;
    line-height: 1.04;
    letter-spacing: -4px;
    color: var(--accent);
`;

export const H3 = styled.button`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 40px;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--accent);

    width: 264px;
    padding: 6px 18px;
    display: flex;
    background: #DCEBF7;
    border-radius: 44px;
    border: none;
`;

export const H3One = styled.button`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 40px;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--accent);

    width: 169px;
    padding: 6px 18px;
    display: flex;
    background: #DCEBF7;
    border-radius: 44px;
    border: none;
`;

export const H4 = styled.h2`
    margin-bottom: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.1;
    text-transform: uppercase;
    color: #171820;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Paragraf = styled.h2`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: rgba(17, 17, 17, 0.9);
`;

export const ImgSection = styled.img`
    width: 604px;
    height: 700px;
`;

export const SectionReviews = styled.section`
    width: 1184px;
    height: 374px;
    margin-left: 128px;
    margin-right: 128px;
`;

export const H3Reviews = styled.h3`
    text-align: center;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 40px;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--accent);
`;

export const DivSectionReviews = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 24px;
`;

export const DivReviews = styled.div`
    width: 580px;
    height: 187px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    border-radius: 8px;
    display: flex;
    gap: 18px;
`;

export const ImgReview = styled.img`
    width: 50px;
    height: 50px;
`;

export const DivOneReview = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleReview = styled.p`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 18px;
    line-height: 1.0;
    color: var(--calendar-date-color);
`;

export const ImgStars = styled.img`
width: 110px;
height: 14px;
margin-top: 13px;
margin-bottom: 24px;
`;

export const ParagrafReview = styled.p`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: rgba(17, 17, 17, 0.7);
`;

export const DivArrows = styled.div`
margin-top: 32px;
width: 147px;
margin: auto;
height: 61px;
display: flex;
gap: 25px;
`;

export const SvgArrows = styled.svg`
    width: 61px;
    height: 61px;
    /* margin-left: 6px; */
    stroke: #000000;
    fill: none;

    :hover {
        transform: scale(1.2);
    }
`;