import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import ListProduto from './ProdutoComponent/ListProduto'; 
import CreateProduto from './ProdutoComponent/CreateProduto';
import EditProduto from './ProdutoComponent/EditProduto';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (

    <div className="App">
      <h1>FEMA</h1>

      <BrowserRouter>
        <div className="container">

   
        <Navbar expand="lg" className="btn btn-warning">
      <Container>
        <Navbar.Brand href="http://www.fema.edu.br">FEMA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/ListProduto'>Listar</Nav.Link>
            <Nav.Link href='/CreateProduto'>Novo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

          <Routes>
            <Route path="/ListProduto" element={<ListProduto />}/>
            <Route path="/CreateProduto" element={<CreateProduto />}/>
            <Route path="/EditProduto" element={<EditProduto />}/>
            {/* Outras rotas */}
         </Routes>



{/*}
          <Routes>
            <Route exact path="/CreateProduto" component={CreateProduto} />
            <Route path="/edit/:id" component={EditProduto}/>
            <Route path="/ListProduto" component={ListProduto}/>
          </Routes>
  */}
       </div>
      

      </BrowserRouter>
    </div>

  );
}
export default App;
