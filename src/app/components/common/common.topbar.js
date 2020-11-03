import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { removeCurrentProfile } from '../../../modules/profile';

class CommonTopBar extends Component{
  constructor(props)
  {
    super(props);   
    this.state={
      logout: false,
      logoClick:false,
    }    
  }
  componentDidMount(){

  }
  onLogout = (e) => {
    e.preventDefault();
    removeCurrentProfile();
    this.setState({logout:true})
  };
  onLogoClick = (e) => {
    e.preventDefault();
    this.setState({logoClick:true})
  };
render(){
  console.log(Object.getOwnPropertyNames(this.props.params).length)
  let header = '';
  if(Object.getOwnPropertyNames(this.props.params).length == 1){
    header = 'Class-'+this.props.params.id;
  }else if(Object.getOwnPropertyNames(this.props.params).length ==2){
    let subject;  
    if(this.props.params.subject.includes('-')){
      let sub = this.props.params.subject.split('-');
      subject = sub[0].charAt(0).toUpperCase()+sub[0].slice(1)+' '+sub[1].charAt(0).toUpperCase()+sub[1].slice(1);
    }
    else{
      subject = this.props.params.subject;
      subject = subject.charAt(0).toUpperCase()+subject.slice(1);
    }
    header = 'Class-'+this.props.params.id + ' - '+subject;
  }else if(Object.getOwnPropertyNames(this.props.params).length == 3){
    let subject;  
    if(this.props.params.subject.includes('-')){
      let sub = this.props.params.subject.split('-');
      subject = sub[0].charAt(0).toUpperCase()+sub[0].slice(1)+' '+sub[1].charAt(0).toUpperCase()+sub[1].slice(1);
    }
    else{
      subject = this.props.params.subject;
      subject = subject.charAt(0).toUpperCase()+subject.slice(1);
    }
    header = 'Class-'+this.props.params.id + ' - '+subject+' - '+this.props.params.lession+'.'+this.props.lessionName;
  }
  let hide = 'block';
  if(header == ''){
    hide = 'none';
  }
  const { logout, logoClick } = this.state;
    if (logout) {
      return <Redirect to='/logout' />;
    }
    if (logoClick) {
      return <Redirect to={`/profile/`+this.props.params.id} />;
    }
    return(
      <section id="topbar" className="d-lg-block" style={{'display':hide}}>    
     <div className="d-flex" id="top-bar" style={{ width: "100%", height: "8%", backgroundColor: "#ffffff" }}>
          <div className="d-flex d-xl-flex align-items-center align-items-xl-center justify-content-between" id="logo-top" style={{ width: "50%", height: "100%" }}>
            <div id="logo-abc" style={{ width: "30%", height: "39px",cursor:"pointer", backgroundImage: "url(../../images/ABCLogo.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} onClick={this.onLogoClick}></div>
            <label id="headerclass" style={{ fontSize: "1.6vw", fontFamily: "Rajdhani", fontWeight: "bold", margin: "0px", color: "#290658" }}>{header} </label>
          </div>
          <div className="d-flex d-xl-flex justify-content-end align-items-center justify-content-xl-end align-items-xl-center" id="Id-top-right" style={{ width: "50%", height: "100%" }}>
            <div className="d-flex d-xl-flex align-items-center align-items-xl-center" id="man-icon" style={{ width: "35%", height: "100%" }}>
              <div id="man-icon-image" style={{ width: "20%", height: "25px", backgroundImage: "url(../../images/avatar.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
              <div className="dropdown" style={{ backgroundColor: "rgba(255,255,255,0)", width: "50%", height: "60%" }}>
                <button className="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button" style={{ backgroundColor: "rgba(255,255,255,0)", width: "100%", height: "100%", color: "rgb(35,5,85)", fontSize: "1.3vw", fontWeight: "bold", fontFamily: "Rajdhani" }}>My Profile</button>
                <div
                  className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" to="./login" style={{ fontWeight: "bold", fontSize: "1.5vw", fontFamily: "Rajdhani", color: "rgb(34,5,85)" }} onClick={this.onLogout}>Logout</a></div>
              </div>
            </div>
          </div>
        </div>
  </section>
    )
}
}

export default CommonTopBar;