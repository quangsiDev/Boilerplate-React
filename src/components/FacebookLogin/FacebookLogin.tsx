import React from 'react';
import FacebookLogin from 'react-facebook-login';
import environmentVariable from '../../environments';

class FacebookLoginPage extends React.Component<any, any> {
  responseFacebook = (res) => {
    this.props.handleLoginFacebook(res);
  };

  render() {
    return (
      <FacebookLogin
        appId={environmentVariable.faceBookAppId}
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="FormButton__Wrapper"
      />
    );
  }
}
export default FacebookLoginPage;
