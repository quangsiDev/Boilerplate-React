import React from 'react';
import { FacebookFilled, YoutubeFilled, MailOutlined } from '@ant-design/icons';

interface Props {}

export const Footer = (props: Props) => {
  return (
    <>
      <footer
        className="border-gray-500 border-t pt-10 mt-5"
        style={{
          background: 'rgb(31, 31, 71)',
        }}
      >
        <div className="text-gray-200 max-w-7xl m-auto">
          <div className="mb-10">
            <h2 className="uppercase text-gray-400 mb-6 px-2">TP. Hồ Chí Minh</h2>
            <div className="md:flex">
              <div className="m-2 md:w-1/4 text-xs md:text-sm my-4">
                <h3 className="md:text-lg text-base text-gray-200">Trụ sở: 112 Cao Thắng, Quận 3</h3>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">Hotline: 096.105.1014 – 077.886.1911</h6>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">
                  Địa chỉ: Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM{/*Đ*/}
                </h6>
              </div>
              <div className="m-2 md:w-1/4 text-xs md:text-sm my-4">
                <h3 className="md:text-lg text-base text-gray-200">459 Sư Vạn Hạnh, Quận 10</h3>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">Hotline: 096.105.1014 – 077.886.1911</h6>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">
                  Địa chỉ: Tầng 2, toà nhà WinHome, 459 Sư Vạn hạnh, Quận 10, TPHCM{/*Đ*/}
                </h6>
              </div>
              <div className="m-2 md:w-1/4 text-xs md:text-sm my-4">
                <h3 className="md:text-lg text-base text-gray-200">82 Ung Văn Khiêm, Bình Thạnh</h3>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">Hotline: 096.105.1014 – 077.886.1911</h6>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">
                  Địa chỉ: 82 Ung Văn Khiêm, Bình Thạnh, TPHCM{/*Đ*/}
                </h6>
              </div>
              <div className="m-2 md:w-1/4 text-xs md:text-sm my-4">
                <h3 className="md:text-lg text-base text-gray-200">
                  110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò Vấp
                </h3>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">Hotline: 096.105.1014 – 077.886.1911</h6>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">
                  Địa chỉ: 110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò Vấp, TPHCM{/*Đ*/}
                </h6>
              </div>
              <p />
            </div>
            <div className="md:flex">
              <div className="m-2 md:w-1/4 text-xs md:text-sm my-4">
                <h3 className="md:text-lg text-base text-gray-200">56 Lê Cảnh Tuân, Tân Phú</h3>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">Hotline: 096.105.1014 – 077.886.1911</h6>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">
                  Địa chỉ: 56 Lê Cảnh Tuân, Tân Phú, TPHCM{/*Đ*/}
                </h6>
              </div>
              <div className="m-2 md:w-1/4 text-xs md:text-sm my-4">
                <h3 className="md:text-lg text-base text-gray-200">
                  6C Đường số 8, Linh Tây, Thủ Đức (gần ĐH Cảnh Sát)
                </h3>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">Hotline: 096.105.1014 – 077.886.1911</h6>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">
                  Địa chỉ: 6C Đường số 8, Linh Tây, Thủ Đức, TPHCM{/*Đ*/}
                </h6>
              </div>
            </div>
            <p />
          </div>
          <div className="mb-10">
            <h2 className="uppercase text-gray-400 mb-6 px-2">Đà Nẵng</h2>
            <div className="md:flex">
              <div className="m-2 text-sm my-2">
                <h3 className="text-lg text-gray-200">103 Nguyễn Hữu Dật, Hải Châu</h3>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">Hotline: 096.105.1014 – 077.886.1911</h6>
                <h6 className="text-gray-400 hover:text-gray-100 font-medium">
                  Địa chỉ: 103 Nguyễn Hữu Dật, Hải Châu, ĐN
                </h6>
                <p />
              </div>
              <p />
            </div>
            <p />
          </div>
        </div>

        <div className="max-w-7xl m-auto text-gray-800 md:flex flex-wrap justify-left">
          <div className="p-5 md:w-1/2 sm:w-6/12 text-gray-400">
            <img
              width={250}
              height={50}
              src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg"
              alt="logo"
            />
            <p className="mt-5">
              Educative CyberSoft is an online platform that helps users to learn, practice coding skills and join the
              online coding contests.
            </p>
          </div>

          <div className="flex flex-wrap md:w-1/2 sm:w-6/12 justify-around">
            <div className="p-5 ">
              <p className="text-xs uppercase text-gray-200 font-medium mb-6">LINKS</p>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Learning
              </a>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Training
              </a>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Fights
              </a>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Game
              </a>
            </div>
            <div className="p-5 ">
              <p className="text-xs uppercase text-gray-200 font-medium mb-6">INFORMATION</p>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                About Us
              </a>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Terms of Use
              </a>
            </div>
            <div className="p-5 ">
              <p className="text-xs uppercase text-gray-200 font-medium mb-6">HELP</p>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Help
              </a>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Discussion
              </a>
              <a href="#" className="my-3 block text-gray-400 hover:text-gray-100 text-sm font-medium duration-700">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:flex pb-5 px-3 m-auto pt-5
      border-t border-gray-500 text-gray-200 text-sm 
      flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">
            © Bản quyền CyberSoft 2017 - 2021 - Empower by{' '}
            <a
              href="https://cybersoft.edu.vn"
              target="_blank"
              className="font-bold text-yellow-300 hover:text-gray-200"
            >
              CyberSoft
            </a>
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-base">
            <a href="#" className="w-6 mx-1" title="Facebook" target="_blank">
              <FacebookFilled />
            </a>
            <a href="#" className="w-6 mx-1" title="Youtube" target="_blank">
              <YoutubeFilled />
            </a>
            <a href="#" className="w-6 mx-1" title="Email" target="_blank">
              <MailOutlined />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
