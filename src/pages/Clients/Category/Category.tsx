import React, { useEffect, useState } from 'react';

import HTML_ICON from '../../../assets/icon/html-5-circle.svg';
import CSS_ICON from '../../../assets/icon/css-circle.svg';
import JS_ICON from '../../../assets/icon/javascript-circle.svg';
import REACT_ICON from '../../../assets/icon/react-circle.svg';
import SASS_ICON from '../../../assets/icon/sass-circle.svg';
import NODEJS_ICON from '../../../assets/icon/nodejs-circle.svg';
import httpServ from '../../../services/http.service';
import { Footer } from '../../../components/Footer/Footer';
import QuestionListBase from '../../../components/QuestionListBase/QuestionListBase';

interface CategoryProps {}

const Category = (props: CategoryProps) => {
  const [data, setData] = useState([]);

  const [typeQuestion, setTypeQuestion] = useState('');

  useEffect(() => {
    httpServ.getAllMultipleChoice().then((res: any) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="HeroSection__WaveWrapper-sc-13ibgdl-1 hLWLFK">
        <div className="HeroWaves__Wave-sxbzz9-0 HeroWaves__Wave1-sxbzz9-2 bXnDvb" />
        <div className="HeroWaves__BackgroundBlur-sxbzz9-1 cDDgVz" />
        <div className="HeroWaves__Wave-sxbzz9-0 HeroWaves__Wave2-sxbzz9-3 jHdieN" />
        <div className="HeroWaves__Wave-sxbzz9-0 HeroWaves__Wave3-sxbzz9-4 haRxZf">
          <svg style={{ position: 'absolute' }}>
            <clipPath id="clip">
              <path d="M1175.65 35.7644C962.846 -46.1285 865.751 35.6288 643.768 54.6084C421.786 73.588 391.68 33.0436 226.292 14.4975C60.9034 -4.0486 11.1228 90.8729 -67.9998 110.654C-67.9998 198.586 -67.9998 516 -67.9998 516L1508.19 516L1508.19 8.45359C1508.19 8.45359 1388.84 117.807 1175.65 35.7644Z" />
            </clipPath>
          </svg>
        </div>
        <div className="Wave__Stars-sc-9u5jyl-0 dNzWzy" />
      </div>
      <main className="max-w-screen-2xl m-auto pt-16 relative overflow-hidden">
        <span className="text-3xl m-2 font-semibold flex justify-items-center items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Category {}
        </span>
        <div className="category-group-base ml-2">
          <div>
            <div className="card-row grid grid-cols-6 gap-5 w-96 mt-5">
              <div className="text-">
                <button className="">
                  <img src={HTML_ICON} alt="HTML_ICON" className="icon-category" />
                </button>
              </div>
              <div className="text-sm">
                <button>
                  <img src={CSS_ICON} alt="CSS_ICON" className="icon-category" />
                </button>
              </div>
              <div className="text-sm">
                <button>
                  <img src={JS_ICON} alt="JS_ICON" className="icon-category" />
                </button>
              </div>
              <div className="text-sm">
                <button>
                  <img src={REACT_ICON} alt="REACT_ICON" className="icon-category" />
                </button>
              </div>
              <div className="text-sm">
                <button>
                  <img src={SASS_ICON} alt="SASS_ICON" className="icon-category" />
                </button>
              </div>
              <div className="text-sm">
                <button>
                  <img src={NODEJS_ICON} alt="NODEJS_ICON" className="icon-category" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="assess-bar">
          <div className="dark:bg-gray-900 py-6 flex flex-col justify-center">
            <div className="grid lg:grid-cols-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
              <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 dark:text-gray-300 font-semibold">0/{data?.length} Solved</p>
                </div>
              </div>
              <div className="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 dark:text-gray-300 font-semibold">Easy 0</p>
                </div>
              </div>
              <div className="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 dark:text-gray-300 font-semibold">Medium 0</p>
                </div>
              </div>
              <div className="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 dark:text-gray-300 font-semibold">Hard 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="question-list-base">
          <QuestionListBase data={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
