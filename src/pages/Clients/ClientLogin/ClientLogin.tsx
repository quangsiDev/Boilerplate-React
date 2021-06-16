import React, { useState } from 'react';
import FacebookLoginPage from '../../../components/FacebookLogin/FacebookLogin';
import AxiosServ from '../../../services/axios.service';
import httpServ from '../../../services/http.service';
import localStorageServ from '../../../services/locaStorage.service';

import teamwork from '../../../assets/icon/teamwork.svg';

import './style.css';

interface Props {}

const ClientLogin = (props: Props) => {
  const [credentials, setCredentials] = useState({
    email: '', //chithanhdang1311bb@gmail.com
    facebookID: '100005157523400', //100005157523400
    facebookEmail: '',
  });

  const handleLoginFacebook = (value) => {
    // console.log(value);

    const credentials = {
      facebookID: value.id,
      facebookEmail: value.email ? value.email : '',
      email: '',
    };

    setCredentials({ ...credentials });

    handleLogin();
  };

  const handleLogin = () => {
    console.log('handleLogin');

    httpServ
      .loginUser(credentials)
      .then((res: any) => {
        if (res.data?.authKey && res.data.isFirstTimeLogin) {
          localStorageServ.accessToken.set(res.data.authKey);
          delete res.data.authKey;
          localStorageServ.userInfor.set(res.data);
          AxiosServ.getAxiosConfig(res.data.authKey);
        } else if (res.data?.authKey) {
          localStorageServ.accessToken.set(res.data.authKey);
          delete res.data.authKey;
          localStorageServ.userInfor.set(res.data);
          AxiosServ.getAxiosConfig(res.data.authKey);

          window.location.assign('/');
        }
      })
      .catch((err) => {
        if (err && err.status && err.status === 400) {
          // handleNotification();
        }
      });
  };
  return (
    <div id="login_design">
      <div
        className="Modal__ModalBackground"
        style={{
          background: 'linear-gradient(189.16deg, rgb(144, 118, 231) 13.57%, rgb(67, 22, 219) 98.38%)',
        }}
      >
        <div className="SignUpModal__Wrapper">
          <div className="SignUpModal__ModalCover">
            <img src={teamwork} alt="Teamwork illustration" className="SignUpModal__Illustration" />
          </div>
          <div className="SignUpModal__FormWrapper">
            <h1 className="SignUpModal__Title">Login</h1>
            <p className="SignUpModal__Subtitle">
              Access resources with over 1500+ questions for automated practice of logical thinking, interview practice
              and more
            </p>
            {/* <div>
              <FacebookLoginPage handleLoginFacebook={handleLoginFacebook} />
            </div> */}
            <button type="button" className="FormButton__Wrapper" onClick={handleLogin}>
              <div className="FormButton__TextWrapper">
                <p className="TextStyles__MediumText">Login Facebook *</p>
              </div>
            </button>
            <div className="SignUpModal__AuthOptions">
              <div className="SignUpModal__Separator" />
              <p className="text-left text-base my-4 md:w-80 text-white opacity-70 flex">
                <span className="font-semibold text-center mr-1">Note: </span>
                Your facebook account must be the one with an email that matches the email you registered for the course
                of the center!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
