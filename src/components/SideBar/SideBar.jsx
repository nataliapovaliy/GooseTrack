import { Container, H2, H3, Button } from './SideBar.styled';

export const SideBar = () => {
  return (
    <Container>
      <div>
        <H2>GooseTrack</H2>
        <H3>User Panel</H3>
        <ul>
          <li>My account</li>
          <li>Calendar</li>
        </ul>
      </div>

      <Button>Log out</Button>
    </Container>
  );
};
