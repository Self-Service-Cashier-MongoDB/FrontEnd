import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import { Formik, Form} from 'formik';
import { TextInput } from '../../components/input/text';
import { createOrder } from '../../functions/cart';
import { createForm } from '../../functions/form';

export default class FormUser extends React.Component {
  render() {
    return (
      <Container>
                <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <style dangerouslySetInnerHTML={{__html: "\ndiv {\n  background-image: url('bg.jpg');\n}\n" }} />

          {/*

        */}
          <div className="tm-container">        
            <div>
              <div className="tm-row pt-4">
                <div className="tm-col-left">
                  <div className="tm-site-header media">
                    <i className="fas fa-umbrella-beach fa-3x mt-1 tm-logo" />
                    <div className="media-body">
                      <h1 className="tm-sitename text-uppercase">KANTINKU</h1>
                      <p className="tm-slogon">Aplikasi SelfService pada kantin</p>
                    </div>        
                  </div>
                </div>                
                      
                <div className="tm-col-right">
                  <nav className="navbar navbar-expand-lg" id="tm-main-nav">
                    <button className="navbar-toggler toggler-example mr-0 ml-auto" type="button" data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                      <span><i className="fas fa-bars" /></span>
                    </button>
                    <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
                      <ul className="navbar-nav text-uppercase">
                        <li className="nav-item active">
                          <a className="nav-link tm-nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link tm-nav-link" href="about.html">Admin</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link tm-nav-link" href="services.html">Product</a>
                        </li>                            
                        <li className="nav-item">
                          <a className="nav-link tm-nav-link" href="contact.html"></a>
                        </li>
                      </ul>                            
                    </div>                        
                  </nav>
                </div>
              </div>
              <div className="tm-row">
                
                          
                          <Formik
                            initialValues={{
                              name: "",
                              phone_number:"",
                              email: "",
                            }}
                            onSubmit={(values) => {
                              console.log(values);
                              createForm(values);
                              
                              this.props.history.push("/product");
                            }}
                          >
                            <Form>
                              <TextInput
                                name="name"
                                label="Nama Lengkap"
                                type="text"
                              />
                              <TextInput
                                name="phone_number"
                                label="Nomor HP"
                                type="text"
                              />
                              <TextInput
                                name="email"
                                label="Email"
                                type="email"
                              />
                      
                              <Button 
                                variant="primary" 
                                type="submit"
                              >
                                Next
                              </Button>
                            </Form>
                          </Formik>

                
                <div className="tm-col-left" />
                <main className="tm-col-right">
                  <section className="tm-content">
                    <h2 className="mb-5 tm-content-title">Selamat datang di aplikasi SelfService kantin kejujuran </h2>
                    <p className="mb-5">untuk  mengakses produck silakan isi form yang ada dan pastikan nama dan email benar agar memudahkan pengolahan data</p>
                    <hr className="mb-5" />
                    <p className="mb-5"></p>                        
                    
                  </section>
                </main>
              </div>
            </div>        
            <div className="tm-row">         
              <div className="tm-col-right tm-col-footer">
                <footer className="tm-site-footer text-right">
                  <p className="mb-0">Copyright 2020 SelfService. 
                    | Design: <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-text-link">kelompok Sahi</a></p>
                </footer>
              </div>  
            </div>
            {/* Diagonal background design */}
            <div className="tm-bg">
              <div className="tm-bg-left" />
              <div className="tm-bg-right" />
            </div>
          </div>
        </div>

       <style dangerouslySetInnerHTML={{__html: "\n        /*\n\nTemplateMo 550 Diagoona\n\nhttps://templatemo.com/tm-550-diagoona\n\n*/\n\nbody {\n    font-family: 'Open Sans', Arial, sans-serif;\n    font-size: 17px;\n    font-weight: 300;\n    overflow-x: hidden;\n    color: white;\n    background-color: #2C353C;\n}\n\na { \n    transition: all 0.3s ease; \n    text-decoration: none;\n}\n\nul { padding: 0; }\na:hover { text-decoration: none; }\nbutton:focus { outline: none; }\np { line-height: 1.9; }\n.tm-logo { margin-right: 20px; }\n.tm-slogan { font-size: 0.8rem; }\n\n/* Navigation */\n.navbar-toggler {\n    padding: 8px 15px;\n    border: 0;\n    border-radius: 0;\n    transform: skewX(-15deg);\n    background-color: rgba(0,0,0,0.5);\n    color: white;    \n}\n\n.navbar-toggler i { transform: skewX(15deg); }\n\n.navbar-expand-lg {\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.navbar-expand-lg .navbar-nav .nav-link { padding: 0; }\n\n.navbar-expand-lg .navbar-nav .tm-nav-link {\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: white;    \n    padding-bottom: 30px;    \n}\n\n.nav-item { margin-right: 60px; }\n\n.nav-item:last-child { margin-right: 0; }\n\n.nav-item.active .tm-nav-link,\n.nav-item:hover .tm-nav-link {\n    color: #9CC;\n}\n\n/* Page Background */\n.tm-bg {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    z-index: -1000;\n}\n\n.tm-bg-left,\n.tm-bg-right {\n    position: relative;\n    width: 50%;\n    height: 100%;\n}\n\n.tm-bg-right { background-color: rgba(0,0,0,0.5); }\n\n.tm-bg-left {\n    border-right: 230px solid rgba(0,0,0,0.5);\n    border-top: 100vh solid transparent;\n}\n\n.tm-bg-controls-wrapper {\n    display: inline-block;\n    margin-left: -150px;\n}\n\n.tm-bg-control {\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    background-color: rgba(255,255,255,0.5);\n    margin: 6px;\n    cursor: pointer;\n}\n\n.tm-bg-control.active,\n.tm-bg-control:hover {\n    background-color: white;\n}\n\n.tm-container {\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;  \n}\n\n.tm-row { display: flex; }\n\n.tm-col-left {\n    width: 50%;\n    height: 100%;\n    padding-left: 40px;  \n    padding-right: 40px;\n}\n\n.tm-col-right {\n    width: 50%;\n    height: 100%;\n    padding-left: 70px;\n    padding-right: 70px;\n}\n\n.tm-content {\n    max-width: 660px;\n    margin-top: 50px;\n    padding-right: 20px;\n}\n\n.tm-about { max-width: 525px; }\n\n::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 10px;\n}\n  \n::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background-color: rgba(255,255,255,.8);\n    box-shadow: 0 0 1px rgba(255,255,255,.8);\n}\n\n.tm-content-title { font-size: 1.5rem; }\nhr { border-top: 1px solid white; }\n\n.btn {\n    padding: 10px 25px;\n    border-radius: 0;\n}\n\n.btn-big {\n    padding: 9px 40px;\n    font-size: 1.2rem;;\n}\n\n.btn-primary {\n    background-color: white;\n    color: black;\n    border: 0;\n}\n\n.btn-primary:hover {\n    background-color: #9CC;\n    color: black;\n}\n\n.tm-site-footer {\n    padding: 40px 0 20px;\n    max-width: 660px;\n    font-size: 0.95rem;\n}\n\n.tm-col-footer { padding-left: 0; }\n.tm-text-link { color: white; }\n\n.tm-text-link:hover,\n.tm-text-link:focus {\n    color: #9CC;\n}\n\n/* Service */ \n.tm-service-text { max-width: 365px; }\n.tm-service-img { margin-right: 25px; }\n.tm-service-img-r { margin-left: 25px; }\n\n/* Contact */\n.form-control,\ntextarea {    \n    color: white;\n    background-color: transparent;\n    background-clip: padding-box;\n    border: none;\n    border-bottom: 1px solid #999A9B;\n    border-radius: 0;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    padding: 10px 0;\n    font-family: 'Open Sans', Arial, sans-serif;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n}\n\n.form-control:focus {\n    color: white;\n    background-color: transparent;    \n    box-shadow: none;\n    border-color: #9CC;\n    outline: none;\n}\n\n.mb-85 { margin-bottom: 85px; }\n.tm-contact-main { max-width: 690px; }\n\n.tm-contact {\n    max-width: 420px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.form-control::-webkit-input-placeholder { color: white; } /* Edge */  \n.form-control:-ms-input-placeholder { color: white; } /* Internet Explorer 10-11 */  \n.form-control::placeholder { color: white; }\n\n@media (max-width: 1200px) {\n    .nav-item { margin-right: 30px; }\n\n    .tm-page-right {\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n}\n\n@media (max-width: 992px) {    \n    .tm-nav {\n        position: absolute;\n        background: rgba(0, 0, 0, 0.8);\n        color: white;\n        top: 44px;\n        right: 4px;\n    }\n\n    .navbar-expand-lg .navbar-nav .tm-nav-link {\n        color: white;\n        font-size: 1.1rem;\n        padding: 13px 20px;\n    }\n\n    .nav-item { margin-right: 0; }\n\n    .nav-item.active .tm-nav-link,\n    .nav-item:hover .tm-nav-link {\n        color: #9CC;\n    }\n\n    .tm-content { margin-top: 20px; }\n    .tm-site-footer { padding-top: 40px; }\n    .tm-col-left { width: 40%; }\n\n    .tm-col-right {\n        width: 60%;\n        padding-left: 100px;\n        padding-right: 30px;\n    }\n    \n    .tm-col-footer { padding-left: 0; }\n}\n\n@media (max-width: 768px) {\n    .tm-row { flex-direction: column; }\n\n    .tm-col-left,\n    .tm-col-right,\n    .tm-bg-left,\n    .tm-bg-right {\n        width: 100%;\n    }\n\n    #tm-main-nav {\n        position: fixed;\n        top: 50px;\n        right: 40px;\n        padding-bottom: 0;\n    }  \n    \n    .tm-bg { flex-direction: column; }\n\n    .tm-bg-left {\n        height: 200px;        \n        border-bottom: 50px solid rgba(0,0,0,0.5);\n        border-right: 0;\n        border-top: 0;\n    }\n\n    .tm-bg-right { height: calc(100% - 200px); }\n\n    .tm-bg-controls-wrapper {\n        margin-left: 0;\n        margin-top: 50px;\n    }\n\n    .tm-content {\n        max-height: none;\n        margin-top: 40px;\n    }\n\n    .tm-col-right {\n        padding-top: 40px;\n        padding-left: 30px;\n    }\n\n    .tm-col-footer {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n}\n\n@media (max-width: 460px) {\n    .tm-logo { margin-right: 15px; }\n    .tm-sitename { font-size: 1.8rem; }\n    .tm-slogon { font-size: 0.8rem; }\n}\n\n@media (max-width: 450px), (min-width: 768px) and (max-width: 830px), (min-width: 992px) and (max-width: 1040px) {\n    .tm-service-media { flex-direction: column; }\n    .tm-service-media-img-l { flex-direction: column-reverse; }\n    .tm-service-text { margin-top: 20px; }\n    .tm-service-img { margin-right: 0; }\n    .tm-service-img-r { margin-left: 0; }\n}\n\n        " }} />
       
      </Container>
    )
  }
}





