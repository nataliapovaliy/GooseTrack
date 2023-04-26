import {
    SectionNull, Img, Title, Div, LinkSign, Button, SvgLogIn,
    SectionFirst, DivSection, DivSectionSecond, H2, H3, H3One, H4, Paragraf, ImgSection,
    SectionSecond,
    SectionReviews, H3Reviews, DivSectionReviews, DivReviews, ImgReview, DivOneReview, TitleReview, ImgStars, ParagrafReview,
    DivArrows, SvgArrows
} from "components/StartLending/StartLending.styled";
import { Link } from 'react-router-dom';
import goose from 'images/goose-2.png';
import icon from 'images/icons.svg';
import imageCalendar from 'images/image-calendar.png';
import imageSidebar from 'images/image-sidebar.png';
import imageOne from 'images/image-one.png';
import imgFotoFirst from 'images/foto-1.png';
import imgFotoSecond from 'images/foto-2.png'
import imgStars from 'images/stars.png';
import { useMedia } from "react-use";

export const StartLending = () => {
    const isTabletOrMobile = useMedia('(max-width: 1439px)');

    return (
        <>
            <SectionNull>
                <Img src={goose} alt="goose"></Img>
                <Title>Goose Track</Title>
                <Div>
                    <Link to="/register">
                        <LinkSign>Sign up</LinkSign>
                    </Link>
                    <Link to="/login">
                        <Button>Log in
                            <SvgLogIn>
                                <use href={icon + '#icon-log-out'}></use>
                            </SvgLogIn>
                        </Button>
                    </Link>
                    
                </Div>
            </SectionNull>

            <SectionFirst>
                <DivSection data-aos="fade-right">
                    <H2>1.</H2>
                    <H3>Calendar</H3>
                    <H4>View</H4>
                    <Paragraf>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
                    </Paragraf>
                </DivSection>
                <ImgSection src={imageCalendar} alt="image-calendar"></ImgSection>
            </SectionFirst>

            <SectionSecond>
                <ImgSection src={imageSidebar} alt="image-sidebar"></ImgSection>
                <DivSectionSecond data-aos="fade-left">
                    <H2>2.</H2>
                    <H4>Sidebar</H4>
                    <Paragraf>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
                    </Paragraf>
                </DivSectionSecond>
            </SectionSecond>

            <SectionFirst>
                <DivSection data-aos="fade-right">
                    <H2>3.</H2>
                    <H3One>All in</H3One>
                    <H4>One</H4>
                    <Paragraf>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
                    </Paragraf>
                </DivSection>
                <ImgSection src={imageOne} alt="image-calendar"></ImgSection>
            </SectionFirst>
            
            <SectionReviews>
                <H3Reviews>Reviews</H3Reviews>

                <DivSectionReviews>
                    {isTabletOrMobile ? (
                        <DivReviews>
                            <ImgReview src={imgFotoFirst} alt="Olena"></ImgReview>
                            <DivOneReview>
                                <TitleReview>Olena Doe</TitleReview>
                                <ImgStars src={imgStars} alt="stars"></ImgStars>
                                <ParagrafReview>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.
                                </ParagrafReview>
                            </DivOneReview>
                        </DivReviews>
                    ) : (
                            <>
                            <DivReviews>
                                <ImgReview src={imgFotoFirst} alt="Olena"></ImgReview>
                                <DivOneReview>
                                    <TitleReview>Olena Doe</TitleReview>
                                    <ImgStars src={imgStars} alt="stars"></ImgStars>
                                    <ParagrafReview>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.
                                    </ParagrafReview>
                                </DivOneReview>
                            </DivReviews>
                            
                            <DivReviews>
                                <ImgReview src={imgFotoSecond} alt="Alexsnder"></ImgReview>
                                <DivOneReview>
                                    <TitleReview>Alexander Hubbard</TitleReview>
                                    <ImgStars src={imgStars} alt="stars"></ImgStars>
                                    <ParagrafReview>GooseTrack is incredibly helpful, the sidebar with account management, calendar, and filter options make navigation seamless. Great for staying organized.
                                    </ParagrafReview>
                                </DivOneReview>
                            </DivReviews>
                            </>
                    )}
                    
                </DivSectionReviews>
                    <DivArrows>
                        <SvgArrows><use href={icon + '#icon-arrow-left'}></use></SvgArrows>
                        <SvgArrows><use href={icon + '#icon-arrow-right'}></use></SvgArrows>
                    </DivArrows>
                
            </SectionReviews>
        </>
    )
}