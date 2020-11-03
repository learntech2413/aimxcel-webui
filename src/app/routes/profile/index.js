import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { frontloadConnect } from 'react-frontload';
import Page from '../../components/page';
import ReactGA from 'react-ga';
import CommonTopBar from '../../components/common/common.topbar';
import {
  getCurrentProfile,
  removeCurrentProfile
} from '../../../modules/profile';

const frontload = async props =>{
  await props.getCurrentProfile(+props.match.params.id);
  document.getElementById('div-preloader').style.display = 'none';
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      subjectDynamicUrl: '',
      hasUIError: false
    }
    this.selectedSubject= this.selectedSubject.bind(this);
  }
  componentWillUnmount() {
    this.props.removeCurrentProfile();
  }
  componentDidCatch(error, info) {
    console.log('error in rent');
    this.setState({ hasUIError: true });
  }
  componentDidMount(){
    if(!!this.props && !!this.props.location){
      ReactGA.pageview(this.props.location['pathname']);
    }
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentProfile(+nextProps.match.params.id);
    }
    return true;
  }
  selectedSubject = (subject) => {
    let sub = subject.replace(' ','-')
    this.setState({ redirect: true, subjectDynamicUrl: '/subject/'+this.props.match.params.id+'/' + sub.toLowerCase() + '' });
  };

  render() {
  
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={this.state.subjectDynamicUrl} />;
    }
    if(this.state.hasUIError)
    {
      return <Redirect to='/logout' />
    }
    return (
      <Page
        id="profile"
        title=""
        description={`This is user profile number`}
        image=""
      >
        <CommonTopBar params={this.props.match.params}></CommonTopBar>
        <div id="main-div" style={{ width: "100%", height: "93.95%", position: "absolute" }}>
          <div id="img-bg" style={{ width: "100%", height: "100%", position: "absolute", backgroundImage: "url(../../images/newbg.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
          <div id="physics" style={{ width: "100%", height: "9%" }}></div>
          <div className="d-flex" id="physics-1" style={{ width: "100%", height: "11%" }}>
            <div className="d-flex align-items-start align-items-xl-start" id="physics-button-div-1" style={{ width: "50%", height: "100%" }}>
              <div id="empty-div-2" style={{ width: "72%", height: "100%" }}></div><button className="btn" id="Phy-btn-1" type="button" style={{ width: "21%", height: "43%", backgroundImage: "url(../../images/Physics_Button.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", position: "sticky", backgroundColor: "rgba(255,255,255,0)" }} onClick={() => this.selectedSubject('Physics')}></button></div>
          </div>
          <div className="d-flex" id="Bioandchem-div" style={{ width: "100%", height: "14%" }}>
            <div className="d-flex align-items-center align-items-xl-center" id="Chem-button-div-1" style={{ width: "50%", height: "100%" }}>
              <div id="empty-div-3" style={{ width: "13%", height: "100%" }}></div><button className="btn" id="Chem-btn-1" type="button" style={{ width: "21%", height: "34%", backgroundImage: "url(../../images/Chemistry_Button.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", position: "sticky", backgroundColor: "rgba(255,255,255,0)" }} onClick={() => this.selectedSubject('Chemistry')}></button></div>
            <div
              className="d-flex align-items-center align-items-xl-center" id="Bio-button-div-3" style={{ width: "50%", height: "100%" }}>
              <div id="empty-div-4" style={{ width: "40%", height: "100%" }}></div><button className="btn" id="Bio-btn-2" type="button" style={{ width: "21%", height: "34%", backgroundImage: "url(../../images/Biology_Button.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", position: "sticky", backgroundColor: "rgba(255,255,255,0)" }} onClick={() => this.selectedSubject('Biology')}></button></div>
          </div>
          <div className="d-inline-flex" id="Maths-div" style={{ width: "100%", height: "14%" }}>
            <div className="d-flex align-items-center align-items-xl-center" id="Maths-button-div-4" style={{ width: "50%", height: "100%" }}>
              <div id="empty-div-5" style={{ width: "63%", height: "100%" }}></div><button className="btn" id="Maths-btn-3" type="button" style={{ width: "21%", height: "34%", backgroundImage: "url(../../images/Maths_Button.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", position: "sticky", backgroundColor: "rgba(255,255,255,0)" }} onClick={() => this.selectedSubject('Mathematics')}></button></div>
            <div className="d-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center" id="Maths-button-div-1" style={{ width: "50%", height: "100%" }}><button className="btn" id="Maths-btn-1" type="button" style={{ width: "21%", height: "34%", backgroundImage: "url(../../../../images/Library.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", position: "sticky", backgroundColor: "rgba(255,255,255,0)" }} onClick={() => this.selectedSubject('Library')}></button>
              <div id="empty-div-6" style={{ width: "47%", height: "100%" }}></div>
            </div>
          </div>
          <div className="d-flex" id="Social-4" style={{ width: "100%", height: "14%" }}>
            <div className="d-flex align-items-center align-items-xl-center" id="Empty-button-div-5" style={{ width: "44%", height: "100%" }}></div>
            <div className="d-flex align-items-center align-items-xl-center" id="Social-button-div-6" style={{ width: "56%", height: "100%" }}><button className="btn" id="Social-btn-5" type="button" style={{ width: "19%", height: "34%", backgroundImage: "url(../../images/Social_Button.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", position: "sticky", backgroundColor: "rgba(255,255,255,0)" }} onClick={() => this.selectedSubject('Social Studies')}></button>
              <div
                id="empty-div-7" style={{ width: "63%", height: "100%" }}></div>
            </div>
          </div>
          <div id="Empty-5" style={{ width: "100%", height: "36%" }}></div>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  currentProfile: state.profile.currentProfile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCurrentProfile, removeCurrentProfile }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Profile)
);
