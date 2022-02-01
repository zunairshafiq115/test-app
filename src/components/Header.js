import React from 'react';
import { Nav } from 'react-bootstrap';

function Header() {
  return <div>
      <>
      
      <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Link</Nav.Link>
    </Nav.Item>
  
  </Nav></>
  </div>;
}

export default Header;
