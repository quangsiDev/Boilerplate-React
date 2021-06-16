import React, { useEffect, useState } from 'react';

import hamburger_menu from '../../assets/icon/hamburger-menu.svg';
import courses from '../../assets/icon/courses.svg';
import tutorials from '../../assets/icon/tutorials.svg';
import livestreams from '../../assets/icon/livestreams.svg';
import pricing from '../../assets/icon/pricing.svg';
import calendar from '../../assets/icon/calendar.svg';
import downloads from '../../assets/icon/downloads.svg';
import search from '../../assets/icon/search.svg';
import x from '../../assets/icon/x.svg';

import './style.css';
import UserMenu from '../UserMenu/UserMenu';

interface MobileHeader_UserMenuProps {}

function MobileHeader_UserMenu(props: MobileHeader_UserMenuProps) {
  const [isScroll, setScroll] = useState<boolean>(false);

  const handleScroll = async () => {
    setScroll(!isScroll);
  };

  return (
    <div className="MobileHeader__Wrapper-sc-1luo1od-0 jLxbtT">
      <div className="MobileHeader__Button-sc-1luo1od-1 cA-dKST" onClick={() => handleScroll()}>
        {screen.width < 576 && isScroll ? (
          <img
            src={x}
            alt="hamburger icon"
            className="MobileHeader__Icon-sc-1luo1od-2 kfMDDp"
            style={{ opacity: 0.5 }}
          />
        ) : (
          <img src={hamburger_menu} alt="hamburger icon" className="MobileHeader__Icon-sc-1luo1od-2 kfMDDp" />
        )}
      </div>
      <div
        id="mobile-header-overlay"
        className={`MobileHeader__TooltipWrapper-sc-1luo1od-3 bWFUQU ${
          //visibility-scroll
          isScroll
            ? screen.width < 576
              ? 'visibility-scroll-mobile'
              : 'visibility-scroll'
            : screen.width < 576
            ? 'hidden-scroll'
            : ''
        }`}
      >
        {screen.width <= 768 ? (
          <div className="mobile_header">
            <div>
              <a href="#" style={{ textDecoration: 'none' }}>
                <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                  <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                    <img src={courses} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                    <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Learning</p>
                  </div>
                </div>
              </a>
              <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
            </div>
            <div>
              <a href="#" style={{ textDecoration: 'none' }}>
                <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                  <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                    <img src={tutorials} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                    <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Training</p>
                  </div>
                </div>
              </a>
              <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
            </div>
            <div>
              <a href="#/category" style={{ textDecoration: 'none' }}>
                <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                  <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                    <img src={livestreams} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                    <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Category</p>
                  </div>
                </div>
              </a>
              <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
            </div>
            <div>
              <a href="#" style={{ textDecoration: 'none' }}>
                <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                  <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                    <img src={pricing} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                    <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Pricing</p>
                  </div>
                </div>
              </a>
              <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
            </div>
            <div>
              <a href="#" style={{ textDecoration: 'none' }}>
                <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                  <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                    <img src={calendar} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                    <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Evaluating</p>
                  </div>
                </div>
              </a>
              <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
            </div>
            <div>
              <a href="#" style={{ textDecoration: 'none' }}>
                <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                  <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                    <img src={downloads} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                    <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Context</p>
                  </div>
                </div>
              </a>
              <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
            </div>
            <div>
              <a href="#" style={{ textDecoration: 'none' }}>
                <div className="MenuRow__Wrapper-sc-13qvlzc-0 FxJgk">
                  <div className="MenuRow__Container-sc-13qvlzc-1 hLxpEF">
                    <img src={search} alt="icon" className="MenuRow__Icon-sc-13qvlzc-2 jDIfTu" />
                    <p className="TextStyles__Caption-h7d1e3-10 MenuRow__Title-sc-13qvlzc-3 eTYfuI">Search</p>
                  </div>
                </div>
              </a>
              <div className="MobileHeader__Separator-sc-1luo1od-4 hYpNMl" />
            </div>
          </div>
        ) : (
          ''
        )}
        <UserMenu />
      </div>
    </div>
  );
}

export default MobileHeader_UserMenu;
