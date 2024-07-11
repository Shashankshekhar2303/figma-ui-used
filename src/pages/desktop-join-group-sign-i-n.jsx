import FrameComponent3 from "../components/frame-component3";
import GroupComponent1 from "../components/group-component1";
import SocialSignup from "../components/social-signup";

const DesktopJoinGroupSignIN = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[7px] leading-[normal] tracking-[normal]">
      <FrameComponent3 />
      <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-[71px] pl-[72px] box-border max-w-full mq750:pl-9 mq750:pr-[35px] mq750:box-border">
        <div className="self-stretch flex-1 relative box-border opacity-[0] max-w-full border-t-[1px] border-solid border-gainsboro-400" />
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-800 z-[2]" />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1040px] flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-base text-black font-ibm-plex-sans">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-gray-100 mq750:flex-wrap">
            <div className="w-[358px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[19.5px] mq450:flex-wrap">
                <a className="[text-decoration:none] relative text-black inline-block min-w-[93px]">
                  All Posts(32)
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[47px]">
                  Article
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[41px]">
                  Event
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[72px]">
                  Education
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[27px]">
                  Job
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px] max-w-full">
              <button className="cursor-pointer py-1.5 px-[9px] bg-white rounded flex flex-row items-start justify-start gap-[6px] border-[0.8px] border-solid border-silver-300">
                <div className="h-9 w-[134px] relative rounded bg-white box-border hidden border-[0.8px] border-solid border-silver-300" />
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
                  alt=""
                  src="/outlineexit-to-app24px1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <a className="[text-decoration:none] relative text-mini font-medium font-ibm-plex-sans text-gray-400 text-left inline-block min-w-[86px] z-[1]">
                    Leave Group
                  </a>
                </div>
              </button>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <button className="cursor-pointer [border:none] py-[7px] px-2.5 bg-whitesmoke-600 rounded flex flex-row items-start justify-start gap-[6px]">
                  <div className="h-9 w-[133px] relative rounded bg-whitesmoke-600 hidden" />
                  <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
                    alt=""
                    src="/baselineedit24px1.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <a className="[text-decoration:none] relative text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[83px] z-[1]">
                      Write a Post
                    </a>
                  </div>
                </button>
                <img
                  className="h-9 w-9 relative min-h-[36px]"
                  loading="lazy"
                  alt=""
                  src="/group-58.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[34px] relative">
            <div className="absolute top-[0px] left-[0px] box-border w-[1041px] h-px border-t-[1px] border-solid border-gainsboro-400" />
            <div className="absolute top-[0px] left-[0px] box-border w-[94px] h-px border-t-[1px] border-solid border-black" />
            <img
              className="absolute right-[138px] bottom-[0px] w-7 h-7 z-[3]"
              loading="lazy"
              alt=""
              src="/group-35.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-4 box-border max-w-full text-sm">
            <div className="w-[872px] flex flex-row flex-wrap items-end justify-start gap-[2px] max-w-full">
              <div className="flex-1 flex flex-col items-end justify-start min-h-[457px] max-w-full mq675:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[736px] flex flex-row items-start justify-start relative max-w-full">
                    <GroupComponent1
                      feedAvatars="/rectangle-53@2x.png"
                      article="✍️ Article"
                      whatIfFamousBrandsHadRegu="What if famous brands had regular fonts? Meet RegulaBrands!"
                      authorPicture="/rectangle-32@2x.png"
                      sarthakKamra="Sarthak Kamra"
                      propTop="-18px"
                      propBottom="unset"
                    />
                    <div className="h-[0.4px] w-[240.4px] absolute !m-[0] top-[182px] right-[-136.4px] box-border border-t-[0.4px] border-solid border-silver-200" />
                    <div className="absolute !m-[0] top-[153px] right-[-45px] text-gray-800">
                      Enter location manually
                    </div>
                    <div className="w-[220px] absolute !m-[0] right-[-139px] bottom-[211px] text-xs text-gray-900 inline-block">
                      Your location will help us serve better and extend a
                      personalised experience.
                    </div>
                    <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[74px] inline-block">
                      Sarthak Kamra
                    </div>
                    <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[16px] inline-block">
                      Sarah West
                    </div>
                    <div className="flex-1 shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[24px] max-w-full z-[3]">
                      <div className="relative text-smi font-medium text-right hidden min-w-[13px]">
                        or
                      </div>
                      <div className="relative tracking-[0.1em] uppercase hidden min-w-[78px]">
                        Location
                      </div>
                      <img
                        className="w-[18px] h-[18px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/outlinelocation-on24px-2.svg"
                      />
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/baselineerror-outline24px1.svg"
                      />
                      <div className="relative tracking-[0.1em] uppercase hidden min-w-[73px]">
                        connect
                      </div>
                      <img
                        className="w-[18px] h-[18px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/outlinegroup24px.svg"
                      />
                      <img
                        className="w-9 h-9 relative rounded-2xl object-cover hidden"
                        alt=""
                        src="/rectangle-6@2x.png"
                      />
                      <img
                        className="w-9 h-9 relative rounded-2xl object-cover hidden"
                        alt=""
                        src="/rectangle-61@2x.png"
                      />
                      <div className="self-stretch h-[457px] relative shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white hidden" />
                      <button className="cursor-pointer [border:none] py-[17px] pr-[53px] pl-[59px] bg-honeydew rounded-t-lg rounded-b-none flex flex-row items-start justify-start box-border max-w-full z-[1] hover:bg-gainsboro-500 mq750:pl-[29px] mq750:pr-[26px] mq750:box-border">
                        <div className="h-[50px] w-[736px] relative rounded-t-lg rounded-b-none bg-honeydew hidden max-w-full" />
                        <div className="relative text-sm leading-[16px] font-medium font-ibm-plex-sans text-seagreen text-center z-[2]">{`Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼`}</div>
                      </button>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-9 pl-[35px] box-border max-w-full text-5xl">
                        <div className="flex-1 flex flex-col items-end justify-start gap-[24px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq675:flex-wrap">
                            <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[80px] z-[1] mq450:text-lgi">
                              Sign In
                            </h2>
                            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-right text-smi text-darkslategray-300">
                              <div className="relative z-[1]">
                                <span>{`Don’t have an account yet? `}</span>
                                <span className="font-semibold text-royalblue">
                                  Create new for free!
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-mini text-gray-100 mq750:flex-wrap">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[23.5px] min-w-[209px] max-w-full">
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
                                  <div className="self-stretch flex flex-col items-start justify-start">
                                    <div className="self-stretch rounded-t-sm rounded-b-none bg-whitesmoke-200 flex flex-row items-start justify-start py-[13px] px-3 z-[2] border-[1px] border-solid border-gainsboro-100">
                                      <div className="h-[46px] w-80 relative rounded-t-sm rounded-b-none bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
                                      <div className="relative leading-[16px] font-medium inline-block min-w-[39px] z-[1]">
                                        Email
                                      </div>
                                    </div>
                                    <div className="self-stretch rounded-t-none rounded-b-sm bg-whitesmoke-200 flex flex-row items-start justify-between py-3 pr-[18px] pl-3 gap-[20px] z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
                                      <div className="h-[46px] w-80 relative rounded-t-none rounded-b-sm bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
                                      <input
                                        className="w-[67px] [border:none] [outline:none] bg-[transparent] h-[17px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-ibm-plex-sans font-medium text-mini text-gray-100"
                                        placeholder="Password"
                                        type="text"
                                      />
                                      <img
                                        className="h-[18px] w-[18px] relative object-cover min-h-[18px] z-[2]"
                                        alt=""
                                        src="/group-3-11@2x.png"
                                      />
                                    </div>
                                  </div>
                                  <button className="cursor-pointer [border:none] py-3 px-5 bg-royalblue self-stretch rounded-xl flex flex-row items-start justify-center whitespace-nowrap z-[1] hover:bg-dodgerblue">
                                    <div className="h-10 w-80 relative rounded-xl bg-royalblue hidden" />
                                    <div className="relative text-sm leading-[16px] font-semibold font-ibm-plex-sans text-white text-center inline-block min-w-[46px] z-[1]">
                                      Sign In
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                                <SocialSignup
                                  signUpWithFacebook="Sign in with Facebook"
                                  signUpWithGoogle="Sign in with Google"
                                  propAlignSelf="unset"
                                  propFlex="1"
                                />
                              </div>
                              <div className="self-stretch relative text-xs tracking-[-0.01em] leading-[16px] font-medium text-black text-center z-[1]">
                                Forgot Password?
                              </div>
                            </div>
                            <img
                              className="h-80 flex-1 relative max-w-full overflow-hidden object-cover min-w-[208px] z-[1]"
                              alt=""
                              src="/group-3-12@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[177.8px] h-[35.8px] rounded bg-white box-border flex flex-row items-start justify-start py-[7px] px-1.5 gap-[8px] mt-[-405px] text-gray-700 border-[0.4px] border-solid border-dimgray-300">
                  <div className="h-[35.8px] w-[177.8px] relative rounded bg-white box-border hidden border-[0.4px] border-solid border-dimgray-300" />
                  <img
                    className="h-[21px] w-[21px] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/outlinemy-location24px.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative z-[1]">Use Current Location</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3.5 text-center text-xs">
                <div className="flex flex-col items-end justify-start gap-[189px]">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/outlinesearch24px.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[34px]">
                    <div className="rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-2">
                      <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-600 hidden" />
                      <div className="relative inline-block min-w-[45px] z-[1]">
                        Connect
                      </div>
                    </div>
                    <div className="rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-2">
                      <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-600 hidden" />
                      <div className="relative inline-block min-w-[45px] z-[1]">
                        Connect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1024px] h-[368px] flex flex-row items-start justify-between pt-0 px-0 pb-[149px] box-border gap-[20px] max-w-full text-lg mq675:h-auto mq675:pb-[97px] mq675:box-border">
            <div className="w-[694px] rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-[calc(100%_-_260px)] shrink-0 border-[1px] border-solid border-gainsboro-400">
              <div className="self-stretch h-[474px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-400" />
              <img
                className="self-stretch h-[220px] relative rounded-t rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-5-1@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pr-[22px] pl-5 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px] max-w-full">
                  <div className="relative font-medium inline-block min-w-[112px] z-[1]">
                    🔬️ Education
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-3xl">
                    <h3 className="m-0 flex-1 relative text-inherit leading-[134.55%] font-semibold font-inherit inline-block min-w-[390px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq675:min-w-full">
                      Tax Benefits for Investment under National Pension Scheme
                      launched by Government
                    </h3>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-7 h-7 relative overflow-hidden shrink-0 object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-33@2x.png"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 relative text-lgi leading-[134.17%] font-normal font-inherit text-dimgray-200 z-[1]">
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </h3>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="w-[154px] flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
                      alt=""
                      src="/rectangle-3-1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <div className="self-stretch h-6 relative font-semibold inline-block z-[1]">
                        Sarah West
                      </div>
                    </div>
                  </div>
                  <div className="h-[33px] w-[95px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border text-right text-sm text-dimgray-300">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-[18px] w-[18px] relative object-cover min-h-[18px] z-[1]"
                        alt=""
                        src="/iconactionvisibility-24px@2x.png"
                      />
                      <div className="self-stretch flex-1 relative font-medium z-[1]">
                        1.4k views
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-sm">
              <div className="self-stretch flex flex-col items-end justify-start gap-[48px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12.5px]">
                    <img
                      className="h-9 w-9 relative rounded-2xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-62@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <div className="self-stretch relative">Joy Lawson</div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-center text-xs text-white">
                      <div className="rounded-sm bg-black flex flex-row items-start justify-start py-1 px-2">
                        <div className="h-6 w-[75px] relative rounded-sm bg-black hidden" />
                        <div className="relative inline-block min-w-[59px] z-[1]">
                          Connected
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[27px]">
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <img
                        className="h-9 w-9 relative rounded-2xl object-cover"
                        loading="lazy"
                        alt=""
                        src="/rectangle-63@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                        <div className="relative">John Doe</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-center text-xs">
                      <div className="rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-2">
                        <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-600 hidden" />
                        <div className="relative inline-block min-w-[45px] z-[1]">
                          Connect
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[27px]">
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <img
                        className="h-9 w-9 relative rounded-2xl object-cover"
                        loading="lazy"
                        alt=""
                        src="/owner-icon@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                        <div className="relative inline-block min-w-[104px]">
                          Siddharth Goyal
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-center text-xs">
                      <div className="rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-2">
                        <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-600 hidden" />
                        <div className="relative inline-block min-w-[45px] z-[1]">
                          Connect
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-2 text-royalblue">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="relative inline-block min-w-[70px] shrink-0">
                      See More...
                    </div>
                    <img
                      className="h-[18px] w-[13.6px] relative min-h-[18px] shrink-0"
                      loading="lazy"
                      alt=""
                      src="/subtract.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesktopJoinGroupSignIN;
