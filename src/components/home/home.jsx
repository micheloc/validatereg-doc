import React, { Component, useState } from 'react';
import { Col, Card, CardHeader,  CardBody, CardFooter, Row, Label,  ButtonGroup,  Button, UncontrolledCollapse} from 'reactstrap'; 
import { toast } from 'react-toastify'; 
import { Btn, InpuT, InputContato, InpuNumberComp, list_comparacao, msgInputComp ,InputRegistro} from 'validatereg'; 


// Import Examples Code. 
import CodeInpuT from '../ExampleInput/exampleInput'
import CodeInstall from '../ExampleInstall/exampleInstal'



import "../home.scss"; 

function message(){
  console.log(msgInputComp)
  if (msgInputComp === true ) toast.error("O SOMÁTORIO DA ÁREA IRRIGADA E ÁREA PLANTADA NÃO PODE SER MAIOR QUE A ÁREA TOTAL", {position: toast.POSITION.TOP_RIGHT})
}

class componentName extends Component {
  constructor(props){
    super(props); 
    this.state={
      cadastro1:{
        nome: "", 
        sobrenome: ""
      },
      cadastro2:{
        cpf:"", 
        cnpj:""
      }
    }
    this.input_req = this.input_req.bind(this); 
    this.validate_input = this.validate_input.bind(this); 
    this.formValidate = this.formValidate.bind(this); 

  } 

  input_req = (name, value) => {
      this.setState({cadastro: {...this.state.cadastro, [name]: value}})
  }

      //Requisitos do validateReg
    //Utilizado para validar os campos obrigatórios.. 
    validate_input = () => {
      this.setState({formValidate: true})
  }

  //Requisito do validateReg 
  //Utilizado para função do <form> do HTML. Tendo as opções de Registrar e atualizar. 
  formValidate = () => {
      // if (this.state.objID) {
      //     Update(this.state.propriedade, this.props);
      // } else {
      //     Register(this.state.propriedade, this.props);
      // }
  }

  render() {
    return (
      <div>
      {/* <Col xl="12" className="header_item">
        <div className="jumbotron header_item" >
          <center>
            <h1 className="color_example">ValidateReg</h1>
          </center>
        </div>
      </Col> */}

        <Row >
            <Col xl="12">
              <Card>
                <CardBody>
                    <h3>Instalação via NPM</h3>
                </CardBody>
                <CardFooter>
                    <CodeInstall /> 
                </CardFooter>
              </Card>
            </Col>
        </Row>



        <Row >
          <Col xl="12">
            <Card>
              <CardBody>
                <h3 className="color_example">Example InpuT</h3>     
                <h4>Teste com um campo obrigatório e outro não obrigatório.</h4>
                <Card>
                  <CardBody>
                    <Col lg="12">
                        <Label>Nome</Label>
                        <InpuT name="nome" req={ true } value={ this.state.cadastro1.nome } updateValue={this.input_req}/>
                        <Label>Sobrenome</Label>
                        <InpuT name="sobrenome" req={ false } value={ this.state.cadastro1.sobrenome } updateValue={this.input_req}/>
                    </Col>

                    <ButtonGroup className="float-right form-actions">
                      <Btn validate={this.validate_input} form={() => {this.formValidate()}} value="Salvar"/>
                    </ButtonGroup>
                  </CardBody>
                </Card>
                </CardBody>
                <CardFooter>
                  <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Visualizar o Código </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <CodeInpuT />
                  </UncontrolledCollapse>
                </CardFooter>
              </Card>
          </Col>
        </Row>



        <Row >
          <Col xl="12">
            <Card>
              <CardBody>
                <h3 className="color_example">Example InputRegistro</h3>     
                <h4>Testando Validação de CPF e CNPJ </h4>
                <Card>
                  <CardBody>
                    <Col lg="12">
                        <Label>CPF</Label>
                        <InputRegistro name="cpf" registro={"CPF"} req={ false } value={this.state.cadastro2.cpf} updateValue={this.input_req}/>
                        <Label>CPF</Label>
                        <InputRegistro name="cnpj" registro={"CNPJ"} req={ false } value={this.state.cadastro2.cnpj} updateValue={this.input_req}/>
                    </Col>

                    <ButtonGroup className="float-right form-actions">
                      <Btn validate={this.validate_input} form={() => {this.formValidate()}} value="Salvar"/>
                    </ButtonGroup>
                  </CardBody>
                </Card>
                </CardBody>
                <CardFooter>
                  <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Visualizar o Código </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <h1 className="color_example">Manutenção</h1>
                  </UncontrolledCollapse>
                </CardFooter>
              </Card>
          </Col>
        </Row>




      </div>
    );
  }
}

export default componentName;