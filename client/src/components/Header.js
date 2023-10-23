import React from 'react';
import '../styles/Header.css'; // 스타일 파일 임포트

function Header() {
  return (
    <header className="header" style={{ background: 'black', color: 'white' }}>
      <div className="logo">
        <img src="/louisLogo.png" alt="로고" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/">메뉴1</a>
          </li>
          <li>
            <a href="/">메뉴2</a>
          </li>
          <li>
            <a href="/">메뉴3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// 부트스트랩 헤더
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
