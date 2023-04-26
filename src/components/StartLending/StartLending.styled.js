import styled from 'styled-components';

export const SectionNull = styled.section`
    padding-top: 232px;
    padding-bottom: 88px;
    height: 812px;
    margin-bottom: 64px;
    background-color: var(--accent-background-color);
    @media screen and (min-width: 768px) {
        padding-top: 321px;
        padding-bottom: 0;
        height: 1024px;
        margin-bottom: 64px;
    }
    @media screen and (min-width: 1440px) {
        padding-top: 187px;
        height: 770px;
        margin-bottom: 64px;
    }
`

export const Img = styled.img`
    width: 142px;
    height: 142px;
    margin: auto;    
    @media screen and (min-width: 768px) {
        width: 150px;
        height: 149px;
    }    
`;

export const Title = styled.h1`
    margin-bottom: 32px;
    text-align: center;
    font-family: 'Coolvetica';
    font-weight: 400;
    font-size: 44px;
    line-height: 1.09;
    color: #FFFFFF;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    @media screen and (min-width: 768px) {
        margin-bottom: 40px;
        font-size: 120px;
        line-height: 1.25;
        text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 40px;
        font-size: 120px;
        line-height: 1.25;
        text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    }
`;

export const Div = styled.div`
    width: 131px;
    height: 268px;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 768px) {
        width: 196px;
        height: auto;
        display: flex;
        flex-direction: row;
        gap: 24px;
        align-items: center;
    }
    @media screen and (min-width: 1440px) {
        width: 196px;
        display: flex;
        flex-direction: row;
        gap: 24px;
        align-items: center;
    }
`;

export const LinkSign = styled.a`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 1.17;
    text-decoration-line: underline;
    color: var(--btn-text-color);
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    cursor: pointer;
    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.29;
    }
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
    width: 131px;
    height: 46px;
    padding: 14px 32px;

    background: var(--main-background-color);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 16px;
    border: none;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        width: 121px;
        height: 49px;
        padding: 14px;
    }
`;

export const SvgLogIn = styled.svg`
    width: 18px;
    height: 18px;
    margin-left: 6px;
    stroke: var(--accent-color);
    fill: none;
`;

export const SectionFirst = styled.section`
    width: 375px;
    margin: auto;
    margin-bottom: 64px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media screen and (min-width: 768px) {
        width: 768px;
        margin: auto;
        margin-bottom: 64px;
        padding: 0 32px;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
    @media screen and (min-width: 1440px) {
        width: 1440px;
        margin: auto;
        margin-bottom: 64px;
        display: flex;
        gap: 228px;
        flex-direction: row;
        width: 1107px;
        height: 700px;
        margin-left: 205px;
        margin-right: 128px;
        margin-bottom: 64px;
    }
`;

export const SectionSecond = styled.section`
    width: 375px;
    margin: auto;
    margin-bottom: 64px;
    padding: 0 32px;
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    @media screen and (min-width: 768px) {
        width: 768px;
        padding: 0 32px;
        display: flex;
        flex-direction: column-reverse;
        gap: 48px;
    }
    @media screen and (min-width: 1440px) {
        width: 1107px;
        height: 700px;
        margin-left: 128px;
        margin-right: 205px;
        margin-bottom: 64px;
        display: flex;
        flex-direction: row;
        gap: 228px;
    }
`;

export const DivSection = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {

    }
    @media screen and (min-width: 1440px) {
        padding-left: 0;
    }
`;

export const DivSectionSecond = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        padding-left: 429px;
    }
    @media screen and (min-width: 1440px) {
        padding-left: 0;
    }
`;

export const H2 = styled.h2`
    margin-bottom: 14px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 80px;
    line-height: 1.04;
    letter-spacing: -4px;
    color: var(--accent);
    @media screen and (min-width: 768px) {
        font-size: 104px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 20px;
    }
`;

export const H3 = styled.button`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 32px;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--accent);

    width: 214px;
    padding: 8px 18px;
    margin-bottom: 8px;
    display: flex;
    background: #DCEBF7;
    border-radius: 44px;
    border: none;
    @media screen and (min-width: 768px) {
        font-size: 40px;
        padding: 6px 18px;
        width: 264px;
    }
`;

export const H3One = styled.button`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 32px;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--accent);

    width: 139px;
    padding: 6px 18px;
    margin-bottom: 8px;
    display: flex;
    background: #DCEBF7;
    border-radius: 44px;
    border: none;
    @media screen and (min-width: 768px) {
        font-size: 40px;
        padding: 6px 18px;
        width: 169px;
    }
`;

export const H4 = styled.h2`
    margin-bottom: 14px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.25;
    text-transform: uppercase;
    color: #171820;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 1.1;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 24px;
        font-size: 40px;
        line-height: 1.1;
    }
`;

export const Paragraf = styled.p`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: rgba(17, 17, 17, 0.9);
`;

export const ImgSection = styled.img`
    width: 335px;
    height: 457px;
    @media screen and (min-width: 768px) {
        width: 704px;
        height: 700px;
    }
    @media screen and (min-width: 1440px) {
        width: 604px;
        height: 700px;
    }
`;

export const SectionReviews = styled.section`
    width: 375px;
    margin: auto;
    padding: 0 20px;
    @media screen and (min-width: 768px) {
        width: 768px;
        padding: 0 32px;
        margin: auto;
    }
    @media screen and (min-width: 1440px) {
        width: 1184px;
        height: 374px;
        margin-left: 128px;
        margin-right: 128px;
    }
`;

export const H3Reviews = styled.h3`
    text-align: center;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 28px;
    line-height: 1.14;
    text-transform: uppercase;
    color: var(--accent);
    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 1.1;
    }
    @media screen and (min-width: 1440px) {

    }
`;

export const DivSectionReviews = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media screen and (min-width: 768px) {
        margin-top: 50px;
    }
    @media screen and (min-width: 1440px) {
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        gap: 24px;
    }
`;

export const DivReviews = styled.div`
    width: 335px;
    margin: auto;
    padding: 24px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    border-radius: 8px;
    display: flex;
    gap: 18px;
    @media screen and (min-width: 768px) {
        width: 580px;
    }
    @media screen and (min-width: 1440px) {
        width: 580px;
        height: 187px;
        padding-top: 32px;
        padding-left: 32px;
        padding-right: 32px;
        border: 1px solid rgba(17, 17, 17, 0.1);
        border-radius: 8px;
        display: flex;
        gap: 18px;
    }
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
    stroke: #000000;
    fill: none;

    :hover {
        transform: scale(1.2);
    }
`;