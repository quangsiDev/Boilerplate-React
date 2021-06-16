import React from 'react';
import './style.css';

import pricing_large from './images/icons/pricing-large.svg';
import mockup_card2 from './images/mockups/mockup-card2.svg';
import mockup_content from './images/mockups/mockup-content.svg';
import mockup2_bg from './images/mockups/mockup2-bg.svg';
import mockup3 from './images/mockups//mockup3-bg.svg';
// import mockup_card2 from './images/mockups/mockup-card2.svg';

function Carousel() {
  return (
    <div className="HeroSection__Wrapper-sc-13ibgdl-3 eHSsyh">
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
      <div className="HeroSection__ContentWrapper-sc-13ibgdl-2 bJygiV">
        <div className="HeroSection__AnimationWrapper-sc-13ibgdl-0 UnmzE">
          <div className="SquareAnimation__Wrapper-sc-1524wir-0 kQohvl">
            <div className="square1" />
            <div className="square2" />
            <div className="square3" />
            <div className="square4" />
            <div className="square5" />
            <div className="square6" />
            <div className="square7" />
            <div className="square8" />
          </div>
        </div>
        <div className="HeroSection__TextWrapper-sc-13ibgdl-4 cVzGwf">
          <h1 className="TextStyles__H1-h7d1e3-0 HeroSection__Title-sc-13ibgdl-5 hIBkFg">
            Design <br />
            and code <br />
            <span>
              <span className="TextAnimation__Wrapper-sc-1oxt86b-0 kqOLaE">
                <span>R</span>
                <span>e</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
              </span>
            </span>{' '}
            apps
          </h1>
          <p className="TextStyles__MediumText-h7d1e3-9 HeroSection__Subtitle-sc-13ibgdl-6 eefuKL">
            Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about
            the best tools.
          </p>
          <button className="PurchaseButton__ButtonWrapper-zx2yjp-0 jUzeSU">
            <div className="PurchaseButton__ContentWrapper-zx2yjp-1 klIsSW">
              <div className="PurchaseButton__RingWrapper-zx2yjp-2 gvzymi">
                <svg width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="27.5"
                    cy="27.5"
                    r="26.5"
                    stroke="url(#paint0_angular)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="3 20 8 1 10 8"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(27.5 27.5) rotate(107.904) scale(34.1541)"
                    >
                      <stop offset="0.0870822" stopColor="#844FFC" />
                      <stop offset="0.69191" stopColor="#E1467C" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="PurchaseButton__IconWrapper-zx2yjp-3 kRiXyW wrapper">
                <img src={pricing_large} alt="Upgrade Now icon" className="PurchaseButton__Icon-zx2yjp-4 dJmyZy icon" />
              </div>
              <div className="PurchaseButton__TextWrapper-zx2yjp-5 fzvTzm">
                <p className="TextStyles__Caption-h7d1e3-10 PurchaseButton__Title-zx2yjp-6 jQGqhX">Upgrade Now</p>
                <p className="TextStyles__SmallText-h7d1e3-12 PurchaseButton__Subtitle-zx2yjp-7 kttYCi">
                  $19 per month
                </p>
              </div>
            </div>
          </button>
          <p className="TextStyles__SmallText-h7d1e3-12 PurchaseButton__Description-zx2yjp-8 qbtwn">
            Purchase includes access to 30+ courses, 100+ premium tutorials, 120+ hours of videos, source files and
            certificates.
          </p>
        </div>
        <div className="HomeMockups__Wrapper-sc-16y3c2v-0 dzunxg">
          <div className="HomeMockups__Mockup1-sc-16y3c2v-1 bkPsUw mockup1">
            <div className="lazyload-wrapper">
              <img src={mockup_card2} alt="Mockup" />
            </div>
          </div>
          <div className="HomeMockups__Mockup2-sc-16y3c2v-2 hKkpRc mockup2">
            <div className="lazyload-wrapper">
              <img src={mockup_card2} alt="Mockup" />
            </div>
          </div>
          <div className="HomeMockups__Mockup3-sc-16y3c2v-3 qttSU mockup3">
            <div className="lazyload-wrapper">
              <img src={mockup_content} alt="Mockup" />
            </div>
          </div>
          <div className="HomeMockups__Mockup4-sc-16y3c2v-4 csUyAM mockup4">
            <div className="lazyload-wrapper">
              <img src={mockup2_bg} alt="Mockup" />
            </div>
          </div>
          <div className="HomeMockups__Mockup5-sc-16y3c2v-5 kPVVkw mockup5">
            <div className="lazyload-wrapper">
              <img src={mockup3} alt="Mockup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
