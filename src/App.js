import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3"><span>Login</span><span>Cadastro</span></h6>
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
                        <div className="form-group mt-2">
                          <input type="password" name="logpass" className="form-style" placeholder="Sua Senha" id="logpass" autoComplete="off" />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className="btn mt-4">Enviar</a>
                        <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Esqueceu sua senha?</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Cadastrar</h4>

                        <div className="form-group">
                          <input type="text" name="logname" className="form-style" placeholder="Nome Completo" id="logname" autoComplete="off" />
                          <i className="input-icon uil uil-user"></i>
                        </div>

                        <div className="form-group mt-2">
                          <input type="email" name="logemail" className="form-style" placeholder="Seu E-mail" id="logemail" autoComplete="off" />
                          <i className="input-icon uil uil-at"></i>
                        </div>

                        <div className="form-group mt-2">
                          <input type="password" name="logpass" className="form-style" placeholder="Sua senha" id="logpass" autoComplete="off" />
                          <i className="input-icon uil uil-lock-alt"></i>
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
