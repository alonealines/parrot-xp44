import '../src/Loginstyle.css'
import React from 'react';

const Logo = require('../src/assets/logo.svg');

function Login() {
  return (
  <div className="container" >
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form" >
          <img className="logo-imagem" src={Logo} alt='' />
            <span className="login-form-title"> LOGIN </span>
          <div className="input" >
            <input type="email" className="email" placeholder="email"/>
          </div>
          <div className="input">
            <input type="password" className="password" placeholder="senha"/>
          </div>
          
          <div className="container-login-form-btn">
            <button className="login-form-btn"> entrar </button>
          </div>

          <div className="sign-up">
            <span className="sign-up-name">cadastre-se</span>
          </div>
          <img className="background" alt="" />
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;
