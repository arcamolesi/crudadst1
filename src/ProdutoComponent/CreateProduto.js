import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


function CreateProduto(props) {  
  const [produto, setProduto] = useState({id:0, descricao: '', quantidade: 0, valor: 0});  
  const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = "https://localhost:7127/api/Produtos";  
  const navigate = useNavigate();

  const InsertProduto = (e) => {  
    e.preventDefault();  

    debugger;  
    const data = { id: 0, descricao: produto.descricao, quantidade: produto.quantidade, valor: produto.valor };  
    const response =  axios.post(apiUrl, data);
    console.log('Produto criado com sucesso.');
    // Redirecionar para a rota ListProduto
    navigate('/ListProduto');
   
  };  

  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setProduto({...produto, [e.target.name]: e.target.value});  
  }  
  
  return (  
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-left">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={InsertProduto}>  
       
                  <InputGroup className="mb-3">  
                    <Input type="text" name="descricao" id="descricao" placeholder="descricao" value={produto.descricao} onChange={ onChange }  />  
                  </InputGroup>  

                   <InputGroup className="mb-3">  
                    <Input type="text" placeholder="quantidade" name="quantidade" id="quantidade" value={produto.quantidade} onChange={ onChange }/>  
                  </InputGroup>  

                  <InputGroup className="mb-3">  
                    <Input type="text" placeholder="valor" name="valor" id="valor"  value={produto.valor} onChange={ onChange }  />  
                  </InputGroup>  
                <CardFooter className="p-4">  
                <Row>  
                  <Col xs="12" sm="6">  
                    <Button type="submit" className="btn btn-info mb-1" block><span>Gravar</span></Button>  
                  </Col>  
                  <Col xs="12" sm="6">  
                    <Button className="btn btn-info mb-1" block><span>Cancelar</span></Button>  
                  </Col>  
                </Row>  
              </CardFooter>  
                </Form>  
              </CardBody>  
            </Card>  
          </Col>  
        </Row>  
      </Container>  
    </div>  
  )  
}  
export default CreateProduto  