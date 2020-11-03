import React, { Component } from 'react';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { bindActionCreators } from 'redux';
import { Redirect} from 'react-router-dom';
import Page from '../../components/page';
import { loginUser } from '../../../modules/auth';

const frontload = async props =>{
    document.getElementById('div-preloader').style.display = 'none';
}

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {},
      errors: {},
      isRedirectActivated: false,
      hasUIError: false,
      id:0
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);  
  } 
  
  handleFormChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

    delete this.state.errors[e.target.name];

  }
  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {    
       document.getElementById('div-preloader').style.display = 'block';
       var promise = this.props.loginUser(this.state.fields.Email, this.state.fields.Password);
    promise.then((success)=>{
      if(success.status.code  == 200){
        document.getElementById('div-preloader').style.display = 'none';
        this.setState({isRedirectActivated: true, id:success.user.classNo});
      }
    });
    }
  }
  validateForm() {
   
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    
    if (!fields["Email"]) {
      formIsValid = false;
      errors["Email"] = "Please enter your Email Id.";
    }
    if (!fields["Password"]) {
      formIsValid = false;
      errors["Password"] = "Please enter your password.";
    }

    if(Object.keys(errors).length > 0){
      document.getElementById(Object.keys(errors)[0]).focus();   
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {

    if (this.state.isRedirectActivated) {
      this.setState({isRedirectActivated: false});
      return <Redirect to={`/profile/${this.state.id}`} />
    }
    
    return(
  <Page id="login" title="Login" description="We need to log in to stuff.">
    <div className="divStyle">
      <div style={{ position: "absolute", width: "100%", height: "100%", backgroundImage: "url(../../images/BG.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
      <form onSubmit= {this.submitLoginForm}>
        <div style={{ height: "100%", position: "absolute", width: "100%" }}>
          <div style={{ width: "50%", height: "100%", marginLeft: "15%" }}>
            <div style={{ height: "35%" }}></div>
            <div className="d-flex d-xl-flex flex-column justify-content-center align-items-end justify-content-xl-center align-items-xl-end"
              style={{ width: "30%", height: "25%" }}>
              
              <label className="d-xl-flex align-items-xl-center"
                style={{ width: "100%", height: "25%", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold", fontSize: "0.9vw", margin: "0p" }}>Username / Mobile No.</label>
              <input className={'border rounded border-secondary shadow mb-3' +(!!this.state.errors.Email && 'input-error')} title={this.state.errors.Email} type="email"
                name="Email"
                id="Email"
                size="lg"
                placeholder="you@youremail.com"
                value={this.state.fields.Email} onChange={this.handleFormChange}
                style={{backgroundColor: "rgb(237,237,237)",width: "100%",height: "25%",fontSize:"0.9vw"}} />
              <div style={{ height: "20%", width: "100%" }}></div>
              <label className="d-xl-flex align-items-xl-center"
                style={{ width: "100%", height: "25%", fontFamily: "Rajdhani,sans-serif", fontWeight: "700", fontSize: "0.9vw", margin: "0px", color: "rgb(48,52,57)" }}>Password</label>
              <input className={'border rounded border-secondary shadow mb-3" type="password'+(!!this.state.errors.Password && 'input-error')} title={this.state.errors.Password}
                name="Password"
                id="Password"
                size="lg"
                type="password"
                placeholder="Enter your Password"
                value={this.state.fields.Password} onChange={this.handleFormChange}
                style={{ backgroundColor: "rgb(237,237,237)", width: "100%", height: "25%", fontSize: "0.9vw" }} />
            </div>

            <div className="d-flex d-xl-flex justify-content-center justify-content-xl-center"
              style={{ width: "30%", height: "4%", marginTop: "2%" }}>
              <button className="btn" id="login-submit" type="submit"
                style={{ backgroundColor: "rgba(0,123,255,0)", backgroundImage: "url(../../images/Login_Button.jpg)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "60%", height: "100%" }}>
              </button>

            </div>
          </div>
        </div> </form>
      <footer className="d-flex flex-row" style={{ position: "absolute", bottom: "0", right: "0", textAlign: "right", marginRight: "3%" }}>

        <span id="s2b_siteseal" rel="comodo"><a target="_blank" href="https://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=CL1&v_search=http://aimxcel.in/&x=6&y=5"><img src="../../images/sectigo_trust_seal_md.png" style={{ width: "30%", height: "auto" }} /></a>

        </span>
      </footer>
      <button id="fullscreenicon" className="fas fa-expand expandframe fullScreenSL" type="button" onClick={() => this.toggleFullscreen()}></button>
    </div>

  </Page>
);
}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(LoginPage)
);
