import React from 'react';
import { Badge, Card, CardBody, CardHeader,  Col,  Pagination,   PaginationItem,
    PaginationLink,   Row,  Table } from 'reactstrap';
import axios from 'axios';
import { useState, useEffect} from 'react'

function ListProduto(props) {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
      // Fazer uma solicitação à API quando o componente for montado
      axios.get("https://localhost:7127/api/Produtos")
        .then(response => {
          setProdutos(response.data);
        })
        .catch(error => {
          console.error("Erro ao obter dados da API:", error);
        });
    }, []); // O segundo argumento vazio garante que isso só seja executado uma vez
  
    return (
      <div>
        <h1>Lista de Produtos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.descricao}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default ListProduto; 




/*import React from 'react';
import { Badge, Card, CardBody, CardHeader,  Col,  Pagination,   PaginationItem,
         PaginationLink,   Row,  Table } from 'reactstrap';

    function ListProduto(){

        return (
            <h1>Listar Produto</h1>
        )
    
    }
    
    export default ListProduto; 
*/
