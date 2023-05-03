import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a>Shopping cart</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;