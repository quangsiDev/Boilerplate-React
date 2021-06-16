import React from 'react';
import { Footer } from '../../components/Footer/Footer';

import setting from '../../assets/icon/setting.svg';
import billing from '../../assets/icon/billing.svg';
import discounts from '../../assets/icon/discounts.svg';
import sign_out from '../../assets/icon/sign out.svg';
import account2 from '../../assets/icon/account2.svg';
import twitter from '../../assets/icon/twitter.svg';
import link from '../../assets/icon/link.svg';
import lines from '../../assets/icon/lines.svg';
import email from '../../assets/icon/email.svg';
import lock_grey from '../../assets/icon/lock-blue.svg';

import './style.css';

interface Props {}

export const Profile = (props: Props) => {
  return (
    <div className="AccountLayout__Wrapper-vbcn7n-0 dPZDIf">
      <div className="AccountLayout__AccountCard-vbcn7n-1 eZykVU">
        <div className="AccountNavigation__Wrapper-sc-8ezig8-0 kGRKmP">
          <div>
            <a aria-current="page" className="" href="#" style={{ textDecoration: 'none' }}>
              <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                  <img src={setting} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                  <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Settings</p>
                </div>
              </div>
            </a>
            <div className="AccountNavigation__Separator-sc-8ezig8-1 coYxmU separator" />
          </div>
          <div>
            <a href="#" style={{ textDecoration: 'none' }}>
              <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                  <img src={billing} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                  <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Billing</p>
                </div>
              </div>
            </a>
            <div className="AccountNavigation__Separator-sc-8ezig8-1 coYxmU separator" />
          </div>
          <div>
            <a href="#" style={{ textDecoration: 'none' }}>
              <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                  <img src={discounts} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                  <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Discounts</p>
                </div>
              </div>
            </a>
            <div className="AccountNavigation__Separator-sc-8ezig8-1 coYxmU separator" />
          </div>
          <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
            <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
              <img src={sign_out} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
              <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Sign Out</p>
            </div>
          </div>
        </div>
        <div className="AccountDropdown__Wrapper-sc-7wm7cf-0 VFAqf">
          <a aria-current="page" className="" href="/account/settings" style={{ textDecoration: 'none' }}>
            <button className="NavigatorButton__Wrapper-sc-1if8xue-0 fNaEyC">
              <img src={setting} alt=" icon" className="NavigatorButton__Icon-sc-1if8xue-1 eoEZoK" />
              <p className="TextStyles__Caption-h7d1e3-10 NavigatorButton__Title-sc-1if8xue-2 hEJekL" />
            </button>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <button className="NavigatorButton__Wrapper-sc-1if8xue-0 fNaEyC">
              <img src={billing} alt=" icon" className="NavigatorButton__Icon-sc-1if8xue-1 eoEZoK" />
              <p className="TextStyles__Caption-h7d1e3-10 NavigatorButton__Title-sc-1if8xue-2 hEJekL" />
            </button>
          </a>
          <a href="/account/discounts" style={{ textDecoration: 'none' }}>
            <button className="NavigatorButton__Wrapper-sc-1if8xue-0 fNaEyC">
              <img src={discounts} alt=" icon" className="NavigatorButton__Icon-sc-1if8xue-1 eoEZoK" />
              <p className="TextStyles__Caption-h7d1e3-10 NavigatorButton__Title-sc-1if8xue-2 hEJekL" />
            </button>
          </a>
          <a href="#/login" style={{ textDecoration: 'none' }}>
            <button className="NavigatorButton__Wrapper-sc-1if8xue-0 fNaEyC">
              <img src={sign_out} alt=" icon" className="NavigatorButton__Icon-sc-1if8xue-1 eoEZoK" />
              <p className="TextStyles__Caption-h7d1e3-10 NavigatorButton__Title-sc-1if8xue-2 hEJekL" />
            </button>
          </a>
          {/* <button className="NavigatorButton__Wrapper-sc-1if8xue-0 fNaEyC">
            <img src={sign_out} alt="undefined icon" className="NavigatorButton__Icon-sc-1if8xue-1 eoEZoK" />
            <p className="TextStyles__Caption-h7d1e3-10 NavigatorButton__Title-sc-1if8xue-2 hEJekL" />
          </button> */}
        </div>
        <div style={{ display: 'none' }} />
        <div className="AccountSettings__Wrapper-rdikzl-0 gvpnrC">
          <div className="AccountSettings__TextWrapper-rdikzl-1 hNJuKm">
            <p className="TextStyles__Caption2-h7d1e3-11 AccountSettings__Title-rdikzl-2 klYGeb">Edit Profile</p>
            <p className="TextStyles__SmallText-h7d1e3-12 AccountSettings__Subtitle-rdikzl-3 hyhfyK">
              Manage your Code profile and account
            </p>
          </div>
          <div className="AccountSettings__AvatarWrapper-rdikzl-4 bWobWL">
            <img src={account2} className="AccountSettings__Avatar-rdikzl-5 ieiJOx" />
            <div className="AccountSettings__ChangeAvatarWrapper-rdikzl-6 evgonT">
              <div className="AccountSettings__AvatarButton-rdikzl-7 eWHMud">
                <p className="TextStyles__SmallText2-h7d1e3-13 AccountSettings__Text-rdikzl-10 dDCcnB">CHANGE AVATAR</p>
              </div>
            </div>
          </div>
          <div className="AccountSettings__InputWrapper-rdikzl-12 kqcNfX">
            <form className="AccountSettings__ProfileWrapper-rdikzl-13 jRQaZD">
              <p className="TextStyles__SmallText2-h7d1e3-13 AccountSettings__Caption-rdikzl-11 hfQgJr">
                profile settings
              </p>
              <div className="SearchInput__Wrapper-sc-1c89ay2-0 cNmBBU">
                <label>
                  <div className="FormInput__IconWrapper-sc-1kk7gnv-0 kudvWz">
                    <img src={account2} alt="undefined icon" className="FormInput__Icon-sc-1kk7gnv-1 kydkXN" />
                  </div>
                  <input
                    placeholder="Your Name"
                    alt="account icon"
                    className="SearchInput__Input-sc-1c89ay2-3 FormInput__Input-sc-1kk7gnv-2 edfwnH"
                  />
                </label>
              </div>
              <div className="SearchInput__Wrapper-sc-1c89ay2-0 cNmBBU">
                <label>
                  <div className="FormInput__IconWrapper-sc-1kk7gnv-0 kudvWz">
                    <img src={twitter} alt="undefined icon" className="FormInput__Icon-sc-1kk7gnv-1 kydkXN" />
                  </div>
                  <input
                    placeholder="Your Twitter handle"
                    alt="account icon"
                    className="SearchInput__Input-sc-1c89ay2-3 FormInput__Input-sc-1kk7gnv-2 edfwnH"
                  />
                </label>
              </div>
              <div className="SearchInput__Wrapper-sc-1c89ay2-0 cNmBBU">
                <label>
                  <div className="FormInput__IconWrapper-sc-1kk7gnv-0 kudvWz">
                    <img src={link} alt="undefined icon" className="FormInput__Icon-sc-1kk7gnv-1 kydkXN" />
                  </div>
                  <input
                    placeholder="Your website"
                    alt="account icon"
                    className="SearchInput__Input-sc-1c89ay2-3 FormInput__Input-sc-1kk7gnv-2 edfwnH"
                  />
                </label>
              </div>
              <div className="TextInput__Wrapper-sc-11zvhdm-0 EahlX">
                <textarea
                  placeholder="Your description"
                  maxLength={50}
                  className="TextInput__TextArea-sc-11zvhdm-2 jtNsDI"
                  defaultValue={''}
                />
                <img src={lines} alt="Text area icon" className="TextInput__Icon-sc-11zvhdm-1 fUVCLG" />
              </div>
              <div className="AccountSettings__ButtonWrapper-rdikzl-15 fAjHjE">
                <button className="FormButton__Wrapper-shwrfq-0 ejUnNt">
                  <div className="FormButton__TextWrapper-shwrfq-1 ffqHvF">
                    <p className="TextStyles__MediumText-h7d1e3-9 FormButton__Title-shwrfq-2 kkctQM">Save settings</p>
                  </div>
                </button>
              </div>
            </form>
            <div className="AccountSettings__AccountWrapper-rdikzl-14 bVWGba">
              <p className="TextStyles__SmallText2-h7d1e3-13 AccountSettings__Caption-rdikzl-11 hfQgJr">
                account settings
              </p>
              <div className="SearchInput__Wrapper-sc-1c89ay2-0 cNmBBU">
                <label>
                  <div className="FormInput__IconWrapper-sc-1kk7gnv-0 kudvWz">
                    <img src={email} alt="undefined icon" className="FormInput__Icon-sc-1kk7gnv-1 kydkXN" />
                  </div>
                  <input
                    disabled
                    placeholder="chithanh.tist@gmail.com"
                    alt="email icon"
                    className="SearchInput__Input-sc-1c89ay2-3 FormInput__Input-sc-1kk7gnv-2 edfwnH"
                  />
                </label>
              </div>
              <div className="SearchInput__Wrapper-sc-1c89ay2-0 cNmBBU">
                <label>
                  <div className="FormInput__IconWrapper-sc-1kk7gnv-0 kudvWz">
                    <img src={lock_grey} alt="undefined icon" className="FormInput__Icon-sc-1kk7gnv-1 kydkXN" />
                  </div>
                  <input
                    disabled
                    placeholder="******"
                    alt="lock icon"
                    className="SearchInput__Input-sc-1c89ay2-3 FormInput__Input-sc-1kk7gnv-2 edfwnH"
                  />
                </label>
              </div>
              <div className="AccountSettings__ButtonWrapper-rdikzl-15 fAjHjE">
                <button className="FormButton__Wrapper-shwrfq-0 ejUnNt">
                  <div className="FormButton__TextWrapper-shwrfq-1 ffqHvF">
                    <p className="TextStyles__MediumText-h7d1e3-9 FormButton__Title-shwrfq-2 kkctQM">Reset password</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
