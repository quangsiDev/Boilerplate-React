import React, { useState } from 'react';
import AxiosServ from '../../../services/axios.service';
import httpServ from '../../../services/http.service';
import localStorageServ from '../../../services/locaStorage.service';

import teamwork from '../../../assets/icon/teamwork.svg';
import envelope_blue from '../../../assets/icon/envelope-blue.svg';
import lock_blue from '../../../assets/icon/lock-blue.svg';
import './style.css';

function AdminLogin() {
  const [userAdmin, setUserAdmin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setUserAdmin({ ...userAdmin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    httpServ.loginAdmin(userAdmin).then((res: any) => {
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
        window.location.assign('/#admin');
      }
    });
  };

  return (
    <div id="login_design" className="max-h-3/4">
      <div
        className="Modal__ModalBackground "
        style={{ background: 'linear-gradient(189.16deg, rgb(144, 118, 231) 13.57%, rgb(67, 22, 219) 98.38%)' }}
      >
        <div className="SignUpModal__Wrapper_Admin">
          <div className="SignUpModal__ModalCover_Admin">
            <img src={teamwork} alt="Teamwork illustration" className="SignUpModal__Illustration" />
          </div>
          <div className="SignUpModal__FormWrapper_Admin">
            <h1 className="SignUpModal__Title">Login</h1>
            <p className="SignUpModal__Subtitle">
              Access resources with over 1500+ questions for automated practice of logical thinking, interview practice
              and more
            </p>
            <form
              className="SignUpModal__Form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="SearchInput__Wrapper">
                <label htmlFor="email">
                  <div className="FormInput__IconWrapper">
                    <img src={envelope_blue} alt="email icon" className="FormInput__Icon" />
                  </div>
                  <input
                    name="username"
                    type="text"
                    placeholder="Email address"
                    autoComplete="on"
                    required
                    className="SearchInput__Input"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
              </div>
              <div className="SearchInput__Wrapper">
                <label htmlFor="password">
                  <div className="FormInput__IconWrapper">
                    <img src={lock_blue} alt="password icon" className="FormInput__Icon" />
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="on"
                    required
                    className="SearchInput__Input"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
              </div>
              <button type="submit" className="FormButton__Wrapper">
                <div className="FormButton__TextWrapper">
                  <p className="TextStyles__MediumText">Login</p>
                </div>
              </button>
            </form>
            <div className="SignUpModal__AuthOptions">
              <div className="SignUpModal__Separator" />
              <p className="text-left text-base my-4 w-80 text-white opacity-70 flex">
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
}

export default AdminLogin;
