import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Cadastro.style';
import { useState } from 'react';

const Logo = require('assets/img/logo colorido.png');


function Cadastro() {
  
   const [nome, setNome] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [senha, setSenha] = useState<string>("");
   const [confirmarSenha, setConfirmarSenha] = useState<string>("");
   const [unidade, setUnidade] = useState<string>("");

  return (

   <div className='background'>
      <div className='formCadastro'>
         <img className='logo' src={Logo} alt="Logo" />
         <h2 className='cadastro'>CADASTRO</h2>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="nome" value={nome} onChange={(event) => { setNome(event.target.value)}}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="email" placeholder="email" value={email} onChange={(event) => { setEmail(event.target.value)}}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="password" placeholder="senha" value={senha} onChange={(event) => { setSenha(event.target.value)}} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="password" placeholder="confirmar senha" value={confirmarSenha} onChange={(event) => { setConfirmarSenha(event.target.value)}} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="unidade/apartamento" value={unidade} onChange={(event) => { setUnidade(event.target.value)}}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="link da foto" />
         </Form.Group>
         </Form>
         <Button className='botaoEntrar' onClick={() => { console.log({name: nome, email: email, senha: senha, unidade: unidade})}}> entrar </Button>  
      </div>
   </div>
  );
}
      
export default Cadastro;
  
  