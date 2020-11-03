import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Page from '../../components/page';
import ReactGA from 'react-ga';
import { Redirect, Link } from 'react-router-dom';
import { Environment } from '../../../configurations/environment';

import { resetLessionsBySubjectAndLessionId, getLessionsBySubjectAndLession } from '../../../modules/actioncreators/concepts.actioncreator';
import { resetLexiconByLexiconId, getLexiconByLexiconId } from '../../../modules/actioncreators/lexicon.actioncreator';
import { resetQuestionsByCriticalThinkingId, getQuestionsByCriticalThinkingId } from '../../../modules/actioncreators/critical-thinking.actioncreator';
import CommonTopBar from '../../components/common/common.topbar';
import MindMap from './../../components/mindmap/index';

const frontload = async props => {
    props.resetLessionsBySubjectAndLessionId();
    try {
        var dynamicRequestList = [];
        var subject = '';
        if(props.match.params.subject.includes('-')){
          subject =  props.match.params.subject.replace('-', ' ');
        }else{
          subject =  props.match.params.subject;
        }
        dynamicRequestList.push(props.getLessionsBySubjectAndLession(parseInt(props.match.params.id), subject, parseInt(props.match.params.lession)));
        document.getElementById('div-preloader').style.display = 'block';
        return Promise.all(dynamicRequestList).then(function (values) {
            document.getElementById('div-preloader').style.display = 'none';
            console.log(values)
            if (values[0].status.code == 200 && values[0].lessonList.length > 0) {
                dynamicRequestList = [];
                dynamicRequestList.push(props.getLexiconByLexiconId(values[0].lessonList[0].lexiconId));
                dynamicRequestList.push(props.getQuestionsByCriticalThinkingId(values[0].lessonList[0].criticalThinkingId));

                document.getElementById('div-preloader').style.display = 'block';
                Promise.all(dynamicRequestList).then(function (values) {
                    document.getElementById('div-preloader').style.display = 'none';
                }, (error) => {
                    document.getElementById('div-preloader').style.display = 'none';
                });
            }else{
                props.history.push(`/subject/`+props.match.params.id+'/'+props.match.params.subject)
            }
        }, (error) => {
            document.getElementById('div-preloader').style.display = 'none';
        });
    }
    catch (error) {
        document.getElementById('div-preloader').style.display = 'none';
        console.log('error', error);
    }
}

class Concepts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            dynamicUrl: '',
            subject: props.match.params.subject,
            backurl: '/subject/' + props.match.params.id + '/' + props.match.params.subject,
            questions: [],
            lexicon_image: '',
            model: "none",
            hasUIError: false
        }
        this.showDiv = this.showDiv.bind(this);
        this.gotoWhiteBoardPage = this.gotoWhiteBoardPage.bind(this);
    }
    componentDidCatch(error, info) {
        console.log('error in rent');
        this.setState({ hasUIError: true });
    }
    componentDidMount() {
        if (!!this.props && !!this.props.location) {
            ReactGA.pageview(this.props.location['pathname']);
        }
    }
    showDiv = (id) => {
        var video = document.getElementById("area-video");
        var divs = document.querySelectorAll(".playarea");
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
        }
        var divToShow = document.getElementById(id);
        divToShow.style.display = "block";

        switch (id) {
            case 'areadiv2':
                document.getElementById('div-top-labelbtn').innerHTML = "Video";
                video.play();
                this.setState({ pdfurl: '' })
                break;
            case 'areadiv3':
                document.getElementById('div-top-labelbtn').innerHTML = "Mind map";
                video.pause();
                !!Environment.MINDMAP_PDF_URL && !!this.props.lession && !!this.props.lession.lessonList && this.props.lession.lessonList.length >0 && this.setState({ pdfurl: Environment.MINDMAP_PDF_URL + this.props.lession.lessonList[0].mindmapPdf })
                break;
            case 'areadiv4':
                document.getElementById('div-top-labelbtn').innerHTML = "Lexicon";
                video.pause();
                !!Environment.LEXICON_PDF_URL && !!this.props.lession && !!this.props.lession.lessonList && this.props.lession.lessonList.length >0 && this.setState({ pdfurl: Environment.LEXICON_PDF_URL + this.props.lession.lessonList[0].lexiconPdf })
                break;
            case 'areadiv5':
                document.getElementById('div-top-labelbtn').innerHTML = "Activity";
                video.pause();
                this.setState({ pdfurl: '' })
                break;
            case 'areadiv6':
                document.getElementById('div-top-labelbtn').innerHTML = "Critical Thinking";
                video.pause();
                this.setState({ pdfurl: '' })
                break;
            default:
                document.getElementById('div-top-labelbtn').innerHTML = "Introduction";
                video.pause();
                this.setState({ pdfurl: '' })

        }
    };
    gotoWhiteBoardPage = () => {
        this.setState({ whiteBoardUrl: true });
    }
    modelImage = (image) => {
        this.setState({ model: "block", lexicon_image: Environment.LEXICON_IMG_URL + image.replace(/ /g, '%20') })
    }
    closeModel = () => {
        this.setState({ model: "none", lession_image: '' });
    }
    render() {
        const lession = !!this.props.lession && !!this.props.lession.lessonList && this.props.lession.lessonList[0] || {};
        const lexiconData = !!this.props.lexicon && !!this.props.lexicon.lexiconList && this.props.lexicon.lexiconList || {};
        const questionsData = !!this.props.questions && !!this.props.questions.questionsList && this.props.questions.questionsList || {};
        if (this.state.hasUIError) {
            return <Redirect to='/logout' />
        }
        return (
            <Page
                id="selected subject"
                title=""
                description={`This is user profile number `}
                image="image"
            >
                <CommonTopBar params={this.props.match.params} lessionName={!!lession && lession.lessonName}></CommonTopBar>
                <div style={{ height: "100vh" }}>

                    <div className="d-flex d-xl-flex align-items-center align-items-xl-center topbar" id="div-top"
                        style={{ height: "7%", paddingTop: "0.25%", backgroundColor: "#0f0f55" }}>
                        <div style={{ height: "100%", width: "5%", backgroundColor: "#0f0f55" }}>
                            <Link to={!!this.state.backurl && this.state.backurl}>
                                <button className="btn d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center" id="div-top-btn-back" type="button"
                                    style={{
                                        width: "100%", height: "100%", backgroundColor: "rgba(0,123,255,0)", backgroundImage: "url(../../../images/UI_Icon_ArrowLeft.png)", backgroundPosition: "center",
                                        backgroundSize: "contain", backgroundRepeat: "no-repeat", padding: "0px"
                                    }} >
                                </button>
                            </Link>
                        </div>
                        <div className="d-flex d-xl-flex align-items-center align-items-xl-center" style={{ height: "100%", width: "75%", paddingLeft: "1%", backgroundColor: "#ffffff" }}>
                            <label className="d-flex d-xl-flex align-items-center justify-content-xl-start align-items-xl-center" id="div-top-labelpath"
                                style={{
                                    width: "100%", height: "80%",
                                    color: "rgb(15,15,85)", fontSize: "1.5vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "600", margin: "0px"
                                }}>Class {!!lession && lession.classNo} - {!!lession && lession.subject} - {!!lession && lession.lessonLeadZero}.{!!lession && lession.lessonName}
                            </label>

                            <div style={{ padding: "3px" }}>
                                <a href="https://whiteboard.aimxcel.in" target="_blank">
                                    <button className="btn" type="button" style={{ width: "100%", height: "100%", fontSize: "1vw", backgroundColor: "#0f0f55", color: "white", fontFamily: "Rajdhani", fontWeight: "bold" }} value="White Board">WhiteBoard</button>
                                </a>
                            </div>
                            {!!this.state.pdfurl && <a target="_blank" href={!!this.state.pdfurl && this.state.pdfurl} style={{ color: "#0F0F55", marginRight: "1%" }}><i className="fa fa-print" style={{ fontSize: "24px" }} /></a>}
                        </div>
                        <div style={{ height: "100%", width: "20%", backgroundColor: "#0f0f55" }}>
                            <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center" id="div-top-labelbtn"
                                style={{ height: "100%", color: "rgb(255,255,255)", fontSize: "1.5vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold", width: "100%", margin: "0px" }}>Introduction
             </label>
                        </div>
                    </div>
                    <div style={{ height: "93%", padding: "0", border: "0.3vw solid rgb(15,15,85)" }}>
                        <div className="d-flex d-xl-flex align-items-center align-items-xl-center mainbody" id="div-body"
                            style={{ height: "100%", width: "100%", backgroundColor: "#ffffff", backgroundImage: "url(../../../images/bg2.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }}>
                            <div className="playarea" id="areadiv1" style={{ width: "95%", height: "100%", padding: "1%", position: "absolute", marginLeft: "2%", display: "block" }}>

                                {!!Environment.INTRO_URL && <div id="div-introimg" style={{
                                    width: "100%", height: "100%", backgroundImage: "url(" + Environment.INTRO_URL + lession.backgroundImage + ")",
                                    backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"
                                }}>
                                </div>}
                            </div>
                            <div className="playarea" id="areadiv2" style={{ width: "95%", height: "100%", padding: "1%", position: "absolute", marginLeft: "2%", display: "none" }}>
                                <div id="div-show-video" style={{ width: "100%", height: "100%" }}>

                                    <video controls id="area-video" width="560" height="315"
                                        style={{ width: "100%", height: "100%" }}
                                        src={!!Environment.VIDEO_URL && !!lession.videoUrl ? Environment.VIDEO_URL + lession.videoUrl : ''}>
                                    </video>
                                </div>
                            </div>
                            <div className="playarea" id="areadiv3" style={{ width: "95%", padding: "1%", position: "absolute", marginLeft: "2%", display: "none" }}>
                                <div className="embed-responsive" id="area-mindmap">
                                    {
                                        lession.mindmapUrl != '' && !!lession.mindmapUrl && <MindMap dataSource={!!lession.mindmapUrl && lession.mindmapUrl}></MindMap>
                                    }
                                </div>
                            </div>
                            <div className="playarea" id="areadiv4" style={{ width: "95%", height: "100%", padding: "1%", position: "absolute", marginLeft: "2%", display: "none" }}>
                                <div className="embed-responsive embed-responsive-1by1" id="area-lexicon" style={{ width: "100%", height: "100%" }}>
                                    <div className="table-responsive text-center embed-responsive-item">
                                        <table className="table table-bordered table-condensed table-striped" style={{ border: "2px solid #0f0f55", fontSize: "1.4vw", fontFamily: "Rajdhani", fontWeight: "600" }}>
                                            <thead>
                                                <tr style={{ textAlign: "center" }}>
                                                    <th>Word</th>
                                                    <th>Image</th>
                                                    <th>Meaning</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ textAlign: "left" }}>
                                                {
                                                    !!lexiconData && lexiconData.length > 0 && lexiconData.map((row, index) => {
                                                        return (<tr key={index}>
                                                            <td className="d-flex flex-row" style={{}}>{row.keyword}
                                                            </td>
                                                            <td>
                                                                {
                                                                    this.state.subject != 'mathematics' && !!row.imageName &&
                                                                    <button className="btn" id="btnimg"
                                                                        style={{
                                                                            marginLeft: "5%",
                                                                            backgroundImage: "url(../../../images/imgicon.png)",
                                                                            backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat",
                                                                            display: "block"
                                                                        }} type="button" onClick={() => this.modelImage(row.imageName)}>
                                                                    </button>
                                                                }
                                                            </td>
                                                            <td style={{}}>{row.description}</td>
                                                            {/* <td style={{ width: "193px" }}><button className="btn btn-primary" type="button" onClick={() => this.modelImage(lexicon.image_name)}>{lexicon.keyword+'.jpg'}</button></td>  */}

                                                        </tr>)
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            <div className="playarea" id="areadiv5" style={{ width: "95%", height: "100%", padding: "1%", position: "absolute", marginLeft: "2%", display: "none" }}>
                                <div className="embed-responsive embed-responsive-1by1 container" id="area-activity" style={{ width: "100%", height: "100%" }}>


                                    <iframe className="embed-responsive-item" style={{ width: "100%", height: "100%" }} src={!!Environment.ACTIVITY_URL && !!lession.activityUrl ? Environment.ACTIVITY_URL + lession.activityUrl : ''} allowFullScreen="true"></iframe>
                                </div>
                                <button className="fas fa-expand expandframe" type="button" style={{ border: "none", backgroundColor: "transparent", width: "3%", height: "6%", opacity: "1", position: "relative", float: "right", marginRight: "-3%", bottom: "6%", fontSize: "1.5vw" }} onClick={() => this.fullscreen()}></button>
                            </div>
                            <div className="playarea" id="areadiv6" style={{ width: "95%", height: "100%", padding: "1%", position: "absolute", marginLeft: "2%", display: "none" }}>
                                <div className="d-flex d-xl-flex flex-column justify-content-center align-items-center justify-content-xl-center align-items-xl-center" id="area-ct"
                                    style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto" }}>
                                    {
                                        !!questionsData && questionsData.length > 0 && Object.entries(questionsData[0]).map(([keyName, value]) => {
                                            return (<label key={keyName}
                                                className="d-flex d-xl-flex justify-content-start align-items-center justify-content-xl-start align-items-xl-center"
                                                id="ct-question-1"
                                                style={{ width: "80%", height: "8%", margin: "0px", fontSize: "1.5vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold", marginLeft: "2%" }}>
                                                {(keyName.replace('question', '')) + '. ' + value}
                                            </label>)
                                        })
                                    }
                                </div>
                            </div>
                            <div className="d-flex d-xl-flex flex-column justify-content-center align-items-center justify-content-xl-center align-items-xl-center" id="div-body-left"
                                style={{ width: "10%", height: "100%" }}>
                                <button className="btn btn-primary d-flex d-xl-flex align-items-center align-items-xl-center btnslider" id="div-btn-video" type="button"
                                    style={{ width: "100%", height: "5%", padding: "0px", marginBottom: "3%", marginLeft: "-165%", backgroundColor: "rgb(15,15,85)", transition: "0.5s ease" }} onClick={() => this.showDiv('areadiv2')}>
                                    <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
                                        style={{ width: "80%", height: "100%", margin: "0px", fontSize: "1vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold" }}>Video
                 </label>
                                    <img style={{
                                        width: "20%", height: "100%", backgroundImage: "url(../../../images/UI_Icon_FilmPlay.png)", backgroundPosition: "center", backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat"
                                    }} />
                                </button>
                                <button className="btn btn-primary d-flex d-xl-flex align-items-center align-items-xl-center btnslider" id="div-btn-mindmap" type="button"
                                    style={{ width: "100%", height: "5%", padding: "0px", marginBottom: "3%", marginLeft: "-165%", backgroundColor: "rgb(15,15,85)", transition: "0.5s ease" }} onClick={() => this.showDiv('areadiv3')}>
                                    <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
                                        style={{ width: "80%", height: "100%", margin: "0px", fontSize: "1vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold" }}>Mindmap
                 </label>
                                    <img style={{
                                        width: "20%", height: "100%", backgroundImage: "url(../../../images/UI_Icon_Globe.png)", backgroundPosition: "center", backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat"
                                    }} />
                                </button>
                                <button className="btn btn-primary d-flex d-xl-flex align-items-center align-items-xl-center btnslider" name="lexiconbtn" id="div-btn-lexicon" type="button"
                                    style={{ width: "100%", height: "5%", padding: "0px", marginBottom: "3%", marginLeft: "-165%", backgroundColor: "rgb(15,15,85)", transition: "0.5s ease" }} onClick={() => this.showDiv('areadiv4')}>
                                    <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
                                        style={{ width: "80%", height: "100%", margin: "0px", fontSize: "1vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold" }}>Lexicon
                 </label>
                                    <img style={{
                                        width: "20%", height: "100%", backgroundImage: "url(../../../images/UI_Icon_Text.png)", backgroundPosition: "center", backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat"
                                    }} />
                                </button>
                                <button className="btn btn-primary d-flex d-xl-flex align-items-center align-items-xl-center btnslider" id="div-btn-activity" type="button"
                                    style={{ width: "100%", height: "5%", padding: "0px", marginBottom: "3%", marginLeft: "-165%", backgroundColor: "rgb(15,15,85)", transition: "0.5s ease" }} onClick={() => this.showDiv('areadiv5')}>
                                    <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
                                        style={{ width: "80%", height: "100%", margin: "0px", fontSize: "1vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold" }}>Activity
                 </label>
                                    <img style={{
                                        width: "20%", height: "100%", backgroundImage: "url(../../../images/UI_Icon_InputKeyboard.png)", backgroundPosition: "center",
                                        backgroundSize: "contain", backgroundRepeat: "no-repeat"
                                    }} />
                                </button>
                                <button className="btn btn-primary d-flex d-xl-flex align-items-center align-items-xl-center btnslider" id="div-btn-ct" type="button"
                                    style={{ width: "100%", height: "5%", padding: "0px", marginBottom: "3%", marginLeft: "-165%", backgroundColor: "rgb(15,15,85)", transition: "0.5s ease" }} onClick={() => this.showDiv('areadiv6')}>
                                    <label className="d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
                                        style={{ width: "80%", height: "100%", margin: "0px", fontSize: "1vw", fontFamily: "Rajdhani, sans-serif", fontWeight: "bold" }}>Critical Thinking
                 </label>
                                    <img style={{
                                        width: "20%", height: "100%", backgroundImage: "url(../../../images/UI_Icon_Book.png)", backgroundPosition: "center", backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat"
                                    }} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* The Modal */}
                    <div id="myModal" className="modal" style={{ display: this.state.model }}>
                        <div className="modal-content justify-content-start align-items-center" style={{ width: "60%", height: "80%", border: "none", boxShadow: "none", backgroundColor: "transparent" }}>
                            <div className="modal-header" style={{ width: "84%", height: "7%", position: "absolute", border: "none", zIndex: "+999", padding: "0px", backgroundColor: "transparent" }}>
                                <span style={{ fontSize: "2vw" }} className="close" onClick={() => this.closeModel()}>&times;</span>
                            </div>
                            <div className="modal-body" style={{ backgroundImage: "url(" + this.state.lexicon_image + ")", width: "100%", height: "100%", backgroundPosition: "top", backgroundSize: "contain", position: "absolute", padding: "0px", backgroundRepeat: "no-repeat" }}>

                            </div>
                        </div>
                    </div>
                </div >
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    // currentProfile: state.profile.currentProfile,
    lession: state.lessionsBySubjectndLessionId.lession,
    questions: state.questionsByCriticalThinkingId.questions,
    lexicon: state.lexiconById.lexicon
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        resetLessionsBySubjectAndLessionId, getLessionsBySubjectAndLession,
        resetLexiconByLexiconId, getLexiconByLexiconId,
        resetQuestionsByCriticalThinkingId, getQuestionsByCriticalThinkingId
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onMount: true,
        onUpdate: false
    })(Concepts)
);
