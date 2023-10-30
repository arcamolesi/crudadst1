import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import ListProduto from './ProdutoComponent/ListProduto'; 
import CreateProduto from './ProdutoComponent/CreateProduto';
import EditProduto from './ProdutoComponent/EditProduto';

function App() {
  return (

    <div className="App">
      <h1>FEMA</h1>

      <BrowserRouter>
      
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/CreateProduto'} className="nav-link">
                    Adicionar Produto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ListProduto'} className="nav-link">
                    Listar Produtos
                  </Link>
                </li>
              </ul>
            </div>
      
          </nav> <br />

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
