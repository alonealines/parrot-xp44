import "./Box.css";
import Button from "../components/Button";
import Input from "./Input";

const Logo = require('../src/assets/logocolorido.svg');

function Box() {
  return (
    <div className="bg-img">
      <div className="box-container">
        <div className="container-itens">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <h1>Cadastro</h1>
          <form className="box-form" action="">
            <Input name="nome" label="" type="text" placeholder="nome" />
            <Input name="email" label="" type="email" placeholder="email" />
            <Input name="senha" label="" type="password" placeholder="senha" />
            <Input
              name="senha"
              label=""
              type="password"
              placeholder="confirmar senha"
            />
            <Input
              name="ap"
              label=""
              type="number"
              placeholder="unidade/apartamento"
            />
            <Input
              name="link"
              label=""
              type="text"
              placeholder="link da foto"
            />

            <Button text="entrar" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Box;
