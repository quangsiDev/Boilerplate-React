import React, { SetStateAction, useEffect, useState } from 'react';
import user from '../../assets/img/1455555011_users-10_icon-icons.com_53271.png';
import localStorageServ from '../../services/locaStorage.service';
import MobileHeader_UserMenu from '../MobileHeader__UserMenu/MobileHeader_UserMenu';

import logo_mobile from '../../assets/img/iconTitle.png';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <>
      <div className="absolute z-50 w-full">
        <nav
          className="w-full flex lg:px-8 px-4 py-1 text-white items-center relative justify-between md:justify-start"
          // style={{
          //   background: 'linear-gradient(189.16deg, rgb(144, 118, 231) 13.57%, rgb(67, 22, 219) 98.38%)',
          // }}
        >
          <div className="flex text-xl font-bold tracking-wider space-x-2 md:mx-0">
            <a href="/">
              <img
                width={150}
                height={50}
                src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg"
                alt="logo"
              />
            </a>
          </div>

          <>
            <ul className="text-gray-300 text-base md:flex md:space-x-2 p-2 md:px-0 md:space-y-0 space-y-1 md:relative absolute top-full flex-col md:flex-row left-0 right-0 m-auto hidden">
              <li>
                <a
                  href="#"
                  className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
                >
                  Learning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="#/category"
                  className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  href="#/challenge"
                  className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
                >
                  Challenge
                </a>
              </li>
              <li>
                <a
                  href="#/pricing"
                  className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
                >
                  Pricing
                </a>
              </li>
            </ul>

            <MobileHeader_UserMenu />
            {/* <div className=" sub-dropdown ml-auto flex space-x-2 items-center relative space-y-1">
              <a className=" rounded-full overflow-hidden ring-white ring-2 m-auto cursor-pointer">
                <img className=" w-8 h-8" src={user} />
              </a>
              <ul className="sub-dropdown-content absolute invisible shadow-xl overflow-hidden top-full right-0 bg-blue-400 rounded text-white w-36 flex flex-col transition-all duration-500">
                <li>
                  <a href="/#/profile" className="w-full block px-4 py-2  text-white text-base hover:text-blue-700">
                    Your Profile
                  </a>
                </li>
                <li>
                  <a href="/#/login" className="w-full block px-4 py-2 text-white text-base hover:text-blue-700">
                    Log out
                  </a>
                </li>
              </ul>
            </div> */}
          </>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
