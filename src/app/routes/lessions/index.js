import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Page from '../../components/page';
import ReactGA from 'react-ga';
import { Redirect, Link } from 'react-router-dom';
import { getLessionsBySubject, resetLessionsBySubject } from '../../../modules/actioncreators/lessions.actioncreator';
import CommonTopBar from '../../components/common/common.topbar';

const frontload = async props =>{
    props.resetLessionsBySubject();
    try{
        var dynamicRequestList = [];
        var subject = '';
        if(props.match.params.subject.includes('-')){
          subject =  props.match.params.subject.replace('-', ' ');
        }else{
          subject =  props.match.params.subject;
        }
        dynamicRequestList.push(props.getLessionsBySubject(parseFloat(props.match.params.id),subject));
        document.getElementById('div-preloader').style.display = 'block';
        return Promise.all(dynamicRequestList).then(function(values) {
          document.getElementById('div-preloader').style.display = 'none';
        },(error)=>{
          document.getElementById('div-preloader').style.display = 'none';
        });
    }
    catch(error)
    {
      document.getElementById('div-preloader').style.display = 'none';
      console.log('error',error);
    }
}

class Lessions extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      dynamicUrl: '',
      hasUIError: false
    }
    this.selectedLesson = this.selectedLesson.bind(this);
  }
  
  componentDidMount(){
    if(!!this.props && !!this.props.location){
      ReactGA.pageview(this.props.location['pathname']);
    }
  }
  componentDidCatch(error, info) {
    console.log('error in rent');
    this.setState({ hasUIError: true });
  }
  selectedLesson = (lesson_name, lessonid, status) => { 
    if (status === "No") {
      this.setState({ status: true });
      setTimeout(() => {
        this.setState({ status: false });
      }, 3000);
      return false;
    }
    else {
      var paths = this.props.location.pathname.split('/')[2];
     if (paths.toLowerCase() !== 'library') {
        this.setState({ redirect: true, dynamicUrl: '/concept/' + this.props.match.params.id + '/' + this.props.match.params.subject +'/'+lessonid });
      } else {
        this.setState({ redirect: true, dynamicUrl: '/selectedLibraryLesson/' + paths + '-' + lesson_name.toLowerCase().replace(' ', '-') });
      } 
    }
  };
  render() {
    const {lessions} = this.props;
    const lessionsList = lessions.lessonList || {};  
    let subject;  
    if(this.props.match.params.subject.includes('-')){
      let sub = this.props.match.params.subject.split('-');
      subject = sub[0].charAt(0).toUpperCase()+sub[0].slice(1)+' '+sub[1].charAt(0).toUpperCase()+sub[1].slice(1);
    }
    else{
      subject = this.props.match.params.subject;
      subject = subject.charAt(0).toUpperCase()+subject.slice(1);
    }
    
    
    var bgurl = "../../images/" + this.props.match.params.id + subject.replace(' ','').trim() + ".jpg";
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={this.state.dynamicUrl} />;
    }
    if(this.state.hasUIError)
    {
      return <Redirect to='/logout' />
    }
let backurl = '/profile/'+this.props.match.params.id;
    return (
      <Page
        id="selected subject"
        title=""
        description={`This is user profile number `}
        image="image"
      >
        <CommonTopBar params={this.props.match.params}></CommonTopBar>
          <div id="forbg" style={{ width: "100%", height: "100%", backgroundImage: "url(" + bgurl + ")", position: "absolute", backgroundPosition: "center", backgroundSize: "cover" }}></div>
        <div style={{ height: "20%", paddingTop: "0.5%", paddingLeft: "0.5%" }}>
          <Link to={backurl}>
            <button className="btn" type="button" style={{
              position: "absolute", backgroundColor: "rgb(0,123,255,0)", backgroundRepeat: "no-repeat", backgroundImage: "url(../../images/UI_Icon_ArrowLeft.png)",
              backgroundPosition: "center", backgroundSize: "contain", width: "3%", height: "5%"
            }} >
            </button>
          </Link>
        <Link to="/">
          <button type="button" className="fas fa-power-off" style={{ color:"#fff",border: "none", backgroundColor: "transparent",height:"5%", width: "3%", opacity: "1", position: "absolute",float:"right", right:"0" ,top: "0", fontSize: "1.5vw" }}></button>
        </Link>
        </div>
        <div style={{ width: "35%", height: "50%", marginRight: "auto", marginLeft: "11%", marginTop: "4%" }}>
          <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
            style={{ position: "relative", width: "100%", height: "10%", color: "rgb(255,255,255)", fontSize: "1.5vw", fontFamily: "Rajdhani, sansSerif", fontWeight: "600" }}>
          </label>
          <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center" style={{
            width: "100%", height: "8%", margin: "0px",
            backgroundColor: "transparent", position: "relative", color: "#D040BC", fontSize: "1.25vw", fontFamily: "Rajdhani, sansserif", fontWeight:
              "600"
          }}>The lesson number matches the textbook lesson number
		</label>
          <div className="dropdown d-inline-block" style={{ width: "100%", height: "10%" }}>
            <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button" style={{
              width: "100%", height: "100%",
              backgroundColor: " rgb(255,255,255)", color: " rgb(11,11,11)", fontSize: "1.5vw", fontFamily: "Rajdhani, sansserif", fontWeight: "600", padding: "0px"
            }}>Select your topic from the list
			</button>
            <div className="dropdown-menu scrollable-menu" role="menu" style={{ width: "100%", height: "auto" }}>

              {!!lessionsList && lessionsList.length > 0 && lessionsList.map((element, index) => {
                if (element.status !== "No") {
                  return (<a key={index} className="dropdown-item lessonmenu" role="presentation" style={{ fontWeight: "bold" }} onClick={() => this.selectedLesson(element.lessonName, element.lessonNo, element.status)}>{element.lessonLeadZero + '. ' + element.lessonName}</a>)
                }
                else {
                  return (<a key={index} className="dropdown-item lessonmenu" role="presentation" style={{ fontWeight: "bold", color: "grey" }} onClick={() => this.selectedLesson(element.lessonName, element.lessonNo, element.status)}>{element.lessonLeadZero + '. ' + element.lessonName}</a>)
                }
              })
              }
            </div>

          </div>
        </div>
        <div className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center" style={{ height: "10%" }}>
          {this.state.status === true &&
            <div className="d-flex justify-content-center align-items-center" style={{
              position: "absolute",
              width: "50%",
              height: "30%",
              backgroundColor: "#d040a8",
              left: "25%",
              top: "25%"
            }}>
              <label style={{
                color: "white",
                fontSize: "2vw",
                fontWeight: "bold",
                fontFamily: "Rajdhani"
              }}>This is a demo instance. Only sample lessons are enabled</label></div>
          }
        </div>
       
      </Page>
    );
  }
}

const mapStateToProps = state => ({
 // currentProfile: state.profile.currentProfile,
 lessions:state.lessionsBySubject.lessions
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getLessionsBySubject, resetLessionsBySubject }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Lessions)
);
