import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleCheck1 = () => {
    setChecked1(!checked1);
  };

  const handleCheck2 = () => {
    setChecked2(!checked2);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Login</span>
                <span>Cadastro</span>
              </h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Logar</h4>
                        <div className="form-group">
                          <input type="email" name="logemail" className="form-style" placeholder="Seu E-mail" id="logemail" autoComplete="off" />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2" >
                          <input type="password" name="logpass" className="form-style" placeholder="Sua Senha" id="logpass" autoComplete="off" />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div className="d-flex align-items-center"> 
                          <div className="form-check form-check-inline" style={{ marginTop: '20px' }}>
                            <input className="form-check-input" type="checkbox" id="adminCheckbox" name="admin" />
                            <label className="form-check-label mr-2" htmlFor="adminCheckbox">Admin</label>
                          </div>
                          <div className="form-check form-check-inline" style={{ marginTop: '20px', marginLeft: '150px' }}>
                            <input className="form-check-input" type="checkbox" id="visitanteCheckbox" name="visitante" />
                            <label className="form-check-label" htmlFor="visitanteCheckbox">Visitante</label>
                          </div>
                        </div>
                        <div>
                          <a href="#" className="btn mt-4">Enviar</a>
                        </div>
                        <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Esqueceu sua senha?</a></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-back">
                  <div className="card-3d-wrapper">
                    
                  </div>
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Cadastrar</h4>
                        <div className="form-group" style={{ marginTop: '20px' }}>
  <input type="text" name="name" className="form-style" placeholder="Nome" id="name" autoComplete="off" />
  <i className="input-icon uil uil-user"></i>
</div>

<div className="form-group" style={{ marginTop: '20px' }}>
  <input type="text" name="email" className="form-style" placeholder="E-mail" id="email" autoComplete="off" />
  <i className="input-icon uil uil-envelope"></i>
</div>

<div className="form-group" style={{ marginTop: '20px' }}>
  <input type="password" name="password" className="form-style" placeholder="Senha" id="password" autoComplete="off" />
  <i className="input-icon uil uil-lock-alt"></i>
</div>

<div className="form-group" style={{ marginTop: '20px' }}>
  <input type="password" name="confirmPassword" className="form-style" placeholder="Confirmar Senha" id="confirmPassword" autoComplete="off" />
  <i className="input-icon uil uil-lock-alt"></i>
</div>

<div className="form-group" style={{ marginTop: '20px' }}>
  <input type="date" name="birthdate" className="form-style" id="birthdate" autoComplete="off" />
  <i className="input-icon uil uil-calendar-alt"></i>
</div>

<div className="d-flex align-items-center"> 
                          <div className="form-check form-check-inline" style={{ marginTop: '20px' }}>
                            <input className="form-check-input" type="checkbox" id="adminCheckbox" name="admin" />
                            <label className="form-check-label mr-2" htmlFor="adminCheckbox">Professor</label>
                          </div>
                          <div className="form-check form-check-inline" style={{ marginTop: '20px', marginLeft: '150px' }}>
                            <input className="form-check-input" type="checkbox" id="visitanteCheckbox" name="visitante" />
                            <label className="form-check-label" htmlFor="visitanteCheckbox">Aluno</label>
                          </div>
                        </div>


                        <a href="#" className="btn mt-4">Enviar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
