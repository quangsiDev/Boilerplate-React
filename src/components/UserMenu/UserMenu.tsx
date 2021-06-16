import React from 'react';
import account from '../../assets/icon/account.svg';
import sign_out from '../../assets/icon/sign out.svg';

import localStorageServ from '../../services/locaStorage.service';

function UserMenu() {
  const Logout = () => {
    localStorageServ.clearLocalStorage();
  };

  return (
    <div>
      <a href="/#/profile" style={{ textDecoration: 'none' }}>
        <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
          <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
            <img src={account} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
            <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Account</p>
          </div>
        </div>
      </a>
      <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
      <a href="/#/login" style={{ textDecoration: 'none' }} onClick={() => Logout()}>
        <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
          <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
            <img src={sign_out} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
            <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Sign Out</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default UserMenu;
