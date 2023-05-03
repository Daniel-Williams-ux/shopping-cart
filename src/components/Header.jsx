import { FaShoppingCart } from "react-icons/fa";
import { Container, Navbar, FormControl, Nav, Dropdown, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search" />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright="true">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>10</Badge>
            </Dropdown.Toggle>

             <Dropdown.Menu style={{ minWidth: 370 }}>
               <span style={{padding: 10}}>cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;