import React from 'react';
import './style.css';
import check_icon from './images/icons/check-dark.svg';
import button_icon from './images/icons/credit-transparent.svg';
import pen_icon from './images/icons/pen-transparent.svg';
import remove_icon from './images/icons/remove.svg';
import add_icon from './images/icons/add.svg';
import { Footer } from '../Footer/Footer';

interface PropsPricingSection {}
const isValid = true;

function PricingSection(props: PropsPricingSection) {
  return isValid ? (
    <div>
      <div
        className="PricingSection__Wrapper-sc-6wu6o0-0 kxJGdR pb-10 pt-20"
        style={{ background: 'linear-gradient(rgb(31, 31, 71), rgb(31 31 71))' }}
      >
        <div className="PricingSection__ContentWrapper-sc-6wu6o0-1 huBLJJ">
          <div className="PricingSection__TextWrapper-sc-6wu6o0-2 jVhEuO">
            <h2 className="TextStyles__H2-h7d1e3-1 PricingSection__Title-sc-6wu6o0-3 hXihrZ">Ready to start?</h2>
            <p className="TextStyles__MediumText-h7d1e3-9 PricingSection__Subtitle-sc-6wu6o0-4 iQzJSu">
              Get access to all our premium courses, tutorials, downloads, certificates and priority support.
            </p>
          </div>
          <div className="PricingCards__Wrapper-hzh9a6-0 cHxeML">
            <div className="Switch__Wrapper-sc-1o2w1cq-0 byeWFf">
              <input
                id="react-switch-input"
                className="Switch__Input-sc-1o2w1cq-1 jCJhlj react-switch-checkbox"
                type="checkbox"
              />
              <label className="Switch__Label-sc-1o2w1cq-2 cbgNWN react-switch-label" htmlFor="react-switch-input">
                <p className="TextStyles__MediumText-h7d1e3-9 Switch__Title-sc-1o2w1cq-4 bgksWO">Monthly</p>
                <p className="TextStyles__MediumText-h7d1e3-9 Switch__Title2-sc-1o2w1cq-5 iRosYZ">Annual</p>
                <span className="Switch__Button-sc-1o2w1cq-3 eHTSrd react-switch-button" />
              </label>
            </div>
            <div className="PricingCards__CardsWrapper-hzh9a6-1 fKUtcJ">
              <div className="PricingCards__CardWrapper-hzh9a6-2 zvmql">
                <div className="PricingCards__Background-hzh9a6-7 PricingCards__BasicBackground-hzh9a6-8 gQoHHU background background1" />
                <div className="PricingCards__Card-hzh9a6-3 PricingCards__BasicCard-hzh9a6-4 fuZjSK card">
                  <div className="PricingCard__Wrapper-o3lf00-0 jHpAOm">
                    <p className="TextStyles__Caption2-h7d1e3-11 PricingCard__Title-o3lf00-1 hJPfpI">BASIC</p>
                    <h1 className="TextStyles__H1-h7d1e3-0 PricingCard__Subtitle-o3lf00-2 fYxLZT">Free</h1>
                    <p className="TextStyles__Caption-h7d1e3-10 PricingCard__Subtext-o3lf00-3 bA-DAlP">Trial</p>
                    <div className="PricingCard__FeatureWrapper-o3lf00-4 kGSXBW">
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Free<span> courses</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          5 Premium<span> Videos</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Notify me<span>, Like</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="PurchaseButtonPurple__Wrapper-lz800w-0 bqhFla">
                    <div className="PurpleIcon__GreyCircle-hr0jjp-0 hihTJf">
                      <div className="PurpleIcon__PurpleCircle-hr0jjp-1 fiqFdl">
                        <img src={pen_icon} alt="Subscribe icon" className="PurpleIcon__Icon-hr0jjp-2 hqzaol" />
                      </div>
                    </div>
                    <div className="PurchaseButtonPurple__TextWrapper-lz800w-1 gkmxvC">
                      <p className="TextStyles__MediumText-h7d1e3-9 PurchaseButtonPurple__Title-lz800w-2 fOrBan">
                        Start now
                      </p>
                      <p className="TextStyles__SmallText-h7d1e3-12 PurchaseButtonPurple__Subtitle-lz800w-3 cCAFYG" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="PricingCards__CardWrapper-hzh9a6-2 zvmql">
                <div className="PricingCards__Background-hzh9a6-7 PricingCards__ProBackground-hzh9a6-9 eJpgti background" />
                <div className="PricingCards__Card-hzh9a6-3 PricingCards__ProCard-hzh9a6-5 enERlM card">
                  <div className="PricingCard__Wrapper-o3lf00-0 jHpAOm">
                    <p className="TextStyles__Caption2-h7d1e3-11 PricingCard__Title-o3lf00-1 hJPfpI">PRO</p>
                    <h1 className="TextStyles__H1-h7d1e3-0 PricingCard__Subtitle-o3lf00-2 fYxLZT">$19</h1>
                    <p className="TextStyles__Caption-h7d1e3-10 PricingCard__Subtext-o3lf00-3 bA-DAlP">
                      per month, billed monthly
                    </p>
                    <div className="PricingCard__FeatureWrapper-o3lf00-4 kGSXBW">
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          All courses<span> and videos</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Source files<span>, ePub</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Certificates<span>, Tests</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Premium<span> tutorials</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          UI<span>, icons, illustrations</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Commercial<span> use</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="PurchaseButtonPurple__Wrapper-lz800w-0 bqhFla">
                    <div className="PurpleIcon__GreyCircle-hr0jjp-0 hihTJf">
                      <div className="PurpleIcon__PurpleCircle-hr0jjp-1 fiqFdl">
                        <img src={button_icon} alt="Subscribe icon" className="PurpleIcon__Icon-hr0jjp-2 hqzaol" />
                      </div>
                    </div>
                    <div className="PurchaseButtonPurple__TextWrapper-lz800w-1 gkmxvC">
                      <p className="TextStyles__MediumText-h7d1e3-9 PurchaseButtonPurple__Title-lz800w-2 fOrBan">
                        Subscribe
                      </p>
                      <p className="TextStyles__SmallText-h7d1e3-12 PurchaseButtonPurple__Subtitle-lz800w-3 cCAFYG" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="PricingCards__CardWrapper-hzh9a6-2 zvmql">
                <div className="PricingCards__Background-hzh9a6-7 PricingCards__TeamBackground-hzh9a6-10 cilFBa background" />
                <div className="PricingCards__Card-hzh9a6-3 PricingCards__TeamCard-hzh9a6-6 dBrnSH card">
                  <div className="PricingCard__Wrapper-o3lf00-0 jHpAOm">
                    <p className="TextStyles__Caption2-h7d1e3-11 PricingCard__Title-o3lf00-1 hJPfpI">TEAM</p>
                    <h1 className="TextStyles__H1-h7d1e3-0 PricingCard__Subtitle-o3lf00-2 fYxLZT">$25</h1>
                    <p className="TextStyles__Caption-h7d1e3-10 PricingCard__Subtext-o3lf00-3 bA-DAlP">
                      per member, per month, billed monthly
                    </p>
                    <div className="PricingCard__FeatureWrapper-o3lf00-4 kGSXBW">
                      <div className="PricingCard__TeamWrapper-o3lf00-5 czucuK">
                        <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                          <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                          <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                            5 users
                            <span />
                          </p>
                        </div>
                        <button className="OperatorButton__Button-sc-14lvzsh-0 eGgmko">
                          <img
                            src={remove_icon}
                            alt="Icon image"
                            className="OperatorButton__Icon-sc-14lvzsh-1 kCNMdo"
                          />
                        </button>
                        <button className="OperatorButton__Button-sc-14lvzsh-0 eGgmko">
                          <img src={add_icon} alt="Icon image" className="OperatorButton__Icon-sc-14lvzsh-1 kCNMdo" />
                        </button>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Manage<span> subscriptions</span>
                        </p>
                      </div>
                      <div className="FeatureRow__Wrapper-w6yw5n-0 eCtHta">
                        <img src={check_icon} alt="check" className="FeatureRow__Icon-w6yw5n-1 ZxjXX" />
                        <p className="TextStyles__Caption-h7d1e3-10 FeatureRow__Text-w6yw5n-2 kzSsoO">
                          Team<span> progress</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="PurchaseButtonPurple__Wrapper-lz800w-0 bqhFla">
                    <div className="PurpleIcon__GreyCircle-hr0jjp-0 hihTJf">
                      <div className="PurpleIcon__PurpleCircle-hr0jjp-1 fiqFdl">
                        <img src={button_icon} alt="Subscribe icon" className="PurpleIcon__Icon-hr0jjp-2 hqzaol" />
                      </div>
                    </div>
                    <div className="PurchaseButtonPurple__TextWrapper-lz800w-1 gkmxvC">
                      <p className="TextStyles__MediumText-h7d1e3-9 PurchaseButtonPurple__Title-lz800w-2 fOrBan">
                        Subscribe
                      </p>
                      <p className="TextStyles__SmallText-h7d1e3-12 PurchaseButtonPurple__Subtitle-lz800w-3 cCAFYG" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="TextStyles__Caption-h7d1e3-10 PricingSection__Caption-sc-6wu6o0-5 inonFJ">
            Save 47% on an annual plan. We support PayPal for an individual annual plan only. Any question?{' '}
            <a href="mailto:support@designcode.io">contact us</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    // =========================================================================================================================
    <div className="text-center mt-10 bg-gray-800">
      <div
        className="flex flex-col items-center lg:inline-grid lg:items-stretch space-y-12 lg:space-y-0 text-sm lg:-mb-5"
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        <div className="lg:order-1 relative z-20 w-full max-w-[23.125rem] lg:w-auto lg:max-w-none">
          <div
            className="absolute inset-x-0 top-5 bottom-11 bg-gradient-to-b from-teal-400 to-indigo-500 opacity-15"
            style={{ filter: 'blur(52px)' }}
          />
          <div className="relative bg-gradient-to-b from-teal-400 to-gray-900 rounded-xl p-px shadow-md">
            <div className="rounded-xl bg-gray-900 pt-16 lg:pt-16 lg:pb-8">
              <div className="lg:px-12 xl:px-16">
                <h2 className="text-white font-semibold uppercase tracking-wide text-center mb-2">
                  Application UI + Marketing{' '}
                  <span className="absolute -top-3 left-0 right-0">
                    <span className="inline-flex bg-teal-400 text-gray-900 uppercase text-[0.688rem] leading-4 tracking-widest py-1 px-2 border-t border-b border-transparent rounded-lg">
                      Bundle
                    </span>
                  </span>
                </h2>
                <dl className="text-white flex flex-col items-center">
                  <div className="mb-6">
                    <dt className="sr-only">Price</dt>
                    <dd className="text-base font-medium text-gray-400">
                      <span className="flex items-center justify-center">
                        <del>$298</del>
                        <ins className="text-5xl tracking-tight text-teal-400 font-extrabold no-underline mx-3">
                          $249
                        </ins>
                        <span className="text-white">USD</span>
                      </span>
                    </dd>
                  </div>
                  <div className="space-y-4">
                    <dt className="sr-only">Features</dt>
                    <dd className="flex items-center">
                      <svg width={12} height={8} fill="none" className="text-teal-400 mr-3">
                        <path
                          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      All application UI components
                    </dd>
                    <dd className="flex items-center">
                      <svg width={12} height={8} fill="none" className="text-teal-400 mr-3">
                        <path
                          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      All marketing components
                    </dd>
                    <dd className="flex items-center">
                      <svg width={12} height={8} fill="none" className="text-teal-400 mr-3">
                        <path
                          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Figma assets
                    </dd>
                    <dd className="flex items-center">
                      <svg width={12} height={8} fill="none" className="text-teal-400 mr-3">
                        <path
                          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Lifetime access
                    </dd>
                    <dd className="flex items-center">
                      <svg width={12} height={8} fill="none" className="text-teal-400 mr-3">
                        <path
                          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Use on unlimited projects
                    </dd>
                    <dd className="flex items-center">
                      <svg width={12} height={8} fill="none" className="text-teal-400 mr-3">
                        <path
                          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Free updates
                    </dd>
                    <dd className="flex items-center">
                      <svg width={12} height={8} fill="none" className="text-teal-400 mr-3">
                        <path
                          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Community access
                    </dd>
                  </div>
                </dl>
                <a
                  href="/checkout/4d5ccd7c-c0a3-4440-9f31-401a093dd7ba"
                  className="mt-8 sm:mt-10 lg:mt-12 block mx-auto text-center w-60 bg-teal-400 text-teal-900 hover:bg-teal-300 rounded-lg font-semibold p-3 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                >
                  Get this package
                </a>
              </div>
              <p className="flex justify-center">
                <a
                  href="#team-pricing"
                  className="flex items-center bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full whitespace-nowrap py-1 px-3"
                >
                  <span>
                    Have a team? <span className="text-teal-400 font-medium">View team pricing</span>
                  </span>
                  <svg width={11} height={10} fill="none" className="ml-1.5 flex-none">
                    <path
                      d="M5.593 9.277l4.639-4.638L5.593 0l-.895.89 3.107 3.102H0v1.293h7.805L4.698 8.392l.895.885z"
                      fill="#22D3EE"
                    />
                  </svg>
                </a>
              </p>
              <div className="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-30 mt-8" />
            </div>
          </div>
        </div>
        <div className="border border-transparent flex flex-col lg:pt-16 lg:pb-[5.25rem] lg:px-12 xl:px-20">
          <h2 className="text-white font-semibold uppercase tracking-wide text-center mb-2">Application UI</h2>
          <dl className="text-white flex flex-col items-center mb-auto">
            <div className="mb-6">
              <dt className="sr-only">Price</dt>
              <dd className="text-base font-medium text-gray-400">
                <span className="flex items-center justify-center">
                  <span className="text-5xl tracking-tight text-white font-extrabold mx-3">$149</span>
                  <span className="text-white">USD</span>
                </span>
              </dd>
            </div>
            <div className="space-y-4">
              <dt className="sr-only">Features</dt>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                All application UI components
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Figma assets
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Lifetime access
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Use on unlimited projects
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Free updates
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Community access
              </dd>
            </div>
          </dl>
          <a
            href="/checkout/0ed326ca-c1fc-440b-b1ba-bdfb01c43185"
            className="mt-8 sm:mt-10 lg:mt-12 block mx-auto text-center w-60 bg-gray-700 text-gray-200 hover:bg-gray-600 rounded-lg font-semibold p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Get this package
          </a>
          <div className="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-30 mt-12" />
        </div>
        <div className="border border-transparent flex flex-col lg:order-1 lg:pt-16 pb-[5.25rem] lg:px-12 xl:px-20">
          <h2 className="text-white font-semibold uppercase tracking-wide text-center mb-2">Marketing</h2>
          <dl className="text-white flex flex-col items-center mb-auto">
            <div className="mb-6">
              <dt className="sr-only">Price</dt>
              <dd className="text-base font-medium text-gray-400">
                <span className="flex items-center justify-center">
                  <span className="text-5xl tracking-tight text-white font-extrabold mx-3">$149</span>
                  <span className="text-white">USD</span>
                </span>
              </dd>
            </div>
            <div className="space-y-4">
              <dt className="sr-only">Features</dt>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                All marketing components
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Figma assets
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Lifetime access
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Use on unlimited projects
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Free updates
              </dd>
              <dd className="flex items-center">
                <svg width={12} height={8} fill="none" className="text-gray-400 mr-3">
                  <path
                    d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Community access
              </dd>
            </div>
          </dl>
          <a
            href="/checkout/1ab56599-ff3e-4666-9686-edda6c81c82a"
            className="mt-8 sm:mt-10 lg:mt-12 block mx-auto text-center w-60 bg-gray-700 text-gray-200 hover:bg-gray-600 rounded-lg font-semibold p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Get this package
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PricingSection;
