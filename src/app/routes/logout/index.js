import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../../../modules/auth';
import ReactGA from 'react-ga';
class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser();
    this.props.history.push('/');
  }
  componentDidMount(){
    if(!!this.props && !!this.props.location){
      ReactGA.pageview(this.props.location['pathname']);
    }
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logoutUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Logout);
