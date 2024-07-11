import GroupComponent1 from "../components/group-component1";
import SocialSignup from "../components/social-signup";

const DesktopJoinGroup = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[149px] box-border gap-[12px] leading-[normal] tracking-[normal]">
      <header className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white flex flex-row items-start justify-between pt-4 px-[72px] pb-3.5 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-right text-base text-darkslategray-500 font-ibm-plex-sans mq825:pl-9 mq825:pr-9 mq825:box-border">
        <div className="h-[72px] w-[1440px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white hidden max-w-full" />
        <div className="w-[207px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
          <img
            className="w-[162.6px] h-6 relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/whole1.svg"
          />
        </div>
        <div className="w-[360px] rounded-2xl bg-whitesmoke-500 flex flex-row items-start justify-start py-2.5 px-3.5 box-border gap-[14px] max-w-full z-[1]">
          <div className="h-[42px] w-[360px] relative rounded-2xl bg-whitesmoke-500 hidden max-w-full" />
          <img
            className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
            alt=""
            src="/group-28.svg"
          />
          <input
            className="w-[242px] [border:none] [outline:none] bg-[transparent] h-[21px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-ibm-plex-sans font-medium text-sm text-dimgray-200"
            placeholder="Search for your favorite groups in ATG"
            type="text"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <a className="[text-decoration:none] relative whitespace-nowrap z-[1] text-[inherit] mq825:hidden">
                <span className="font-medium">{`Create account. `}</span>
                <b className="text-royalblue">It’s free!</b>
              </a>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
              alt=""
              src="/baselinearrow-drop-down24px1.svg"
            />
          </div>
        </div>
      </header>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-800 z-[2]" />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full mq825:pl-9 mq825:pr-9 mq825:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-base text-gray-100 font-ibm-plex-sans">
          <div className="self-stretch h-px relative box-border opacity-[0] border-t-[1px] border-solid border-gainsboro-400" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[1040px] flex flex-col items-end justify-start gap-[5px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[7px] box-border max-w-full gap-[20px] mq825:flex-wrap">
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
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
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
              <div className="self-stretch h-px relative">
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[1px] border-solid border-gainsboro-400" />
                <div className="absolute top-[0px] left-[0px] box-border w-[94px] h-px border-t-[1px] border-solid border-black" />
              </div>
              <div className="w-[904px] flex flex-row items-start justify-end py-0 px-4 box-border max-w-full text-center text-xs text-black">
                <div className="flex-1 flex flex-col items-end justify-start gap-[14px] max-w-full">
                  <div className="w-[272px] flex flex-row items-start justify-center py-0 px-5 box-border">
                    <img
                      className="h-7 w-7 relative z-[3]"
                      loading="lazy"
                      alt=""
                      src="/group-35.svg"
                    />
                  </div>
                  <div className="self-stretch h-[513px] relative max-w-full mq825:h-auto mq825:min-h-[513]">
                    <div className="absolute top-[52px] left-[632px] rounded bg-white box-border w-[177.8px] h-[35.8px] flex flex-row items-start justify-start py-[7px] px-1.5 gap-[8px] border-[0.4px] border-solid border-dimgray-300">
                      <div className="h-[35.8px] w-[177.8px] relative rounded bg-white box-border hidden border-[0.4px] border-solid border-dimgray-300" />
                      <img
                        className="h-[21px] w-[21px] relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/outlinemy-location24px.svg"
                      />
                      <input
                        className="w-[132px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-ibm-plex-sans text-sm text-gray-700"
                        placeholder="Use Current Location"
                        type="text"
                      />
                    </div>
                    <img
                      className="absolute top-[152px] left-[852px] w-5 h-5 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/outlinesearch24px.svg"
                    />
                    <div className="absolute top-[361px] left-[811px] rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-2">
                      <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-600 hidden" />
                      <div className="relative inline-block min-w-[45px] z-[1]">
                        Connect
                      </div>
                    </div>
                    <div className="absolute top-[419px] left-[811px] rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-2">
                      <div className="h-6 w-[61px] relative rounded-sm bg-whitesmoke-600 hidden" />
                      <div className="relative inline-block min-w-[45px] z-[1]">
                        Connect
                      </div>
                    </div>
                    <div className="absolute top-[477px] left-[797px] rounded-sm bg-black flex flex-row items-start justify-start py-1 px-2 text-white">
                      <div className="h-6 w-[75px] relative rounded-sm bg-black hidden" />
                      <div className="relative inline-block min-w-[59px] z-[1]">
                        Connected
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[736px] flex flex-row items-start justify-start max-w-full text-left text-sm">
                      <GroupComponent1
                        feedAvatars="/rectangle-53@2x.png"
                        article="✍️ Article"
                        whatIfFamousBrandsHadRegu="What if famous brands had regular fonts? Meet RegulaBrands!"
                        authorPicture="/rectangle-32@2x.png"
                        sarthakKamra="Sarthak Kamra"
                      />
                      <GroupComponent1
                        feedAvatars="/rectangle-5-1@2x.png"
                        article="🔬️ Education"
                        whatIfFamousBrandsHadRegu="Tax Benefits for Investment under National Pension Scheme launched by Government"
                        authorPicture="/rectangle-3-1@2x.png"
                        sarthakKamra="Sarah West"
                        propTop="unset"
                        propBottom="-431px"
                      />
                      <div className="h-[0.4px] w-[240.4px] absolute !m-[0] top-[182px] right-[-136.4px] box-border border-t-[0.4px] border-solid border-silver-200" />
                      <div className="absolute !m-[0] top-[153px] right-[-45px] text-gray-800">
                        Enter location manually
                      </div>
                      <div className="w-[220px] absolute !m-[0] top-[214px] right-[-139px] text-xs text-gray-900 inline-block">
                        Your location will help us serve better and extend a
                        personalised experience.
                      </div>
                      <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[130px] inline-block">
                        Sarthak Kamra
                      </div>
                      <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[72px] inline-block">
                        Sarah West
                      </div>
                      <div className="w-[104px] absolute !m-[0] right-[-48px] bottom-[14px] inline-block">
                        Joy Lawson
                      </div>
                      <form className="m-0 flex-1 shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-col items-start justify-start pt-0 px-0 pb-9 box-border gap-[24px] max-w-full z-[3]">
                        <div className="relative text-smi font-medium font-ibm-plex-sans text-black text-right hidden min-w-[13px]">
                          or
                        </div>
                        <div className="relative text-sm tracking-[0.1em] uppercase font-ibm-plex-sans text-black text-left hidden min-w-[78px]">
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
                        <div className="relative text-sm tracking-[0.1em] uppercase font-ibm-plex-sans text-black text-left hidden min-w-[73px]">
                          connect
                        </div>
                        <img
                          className="w-[18px] h-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/outlinegroup24px.svg"
                        />
                        <img
                          className="w-9 h-9 relative rounded-2xl object-contain hidden"
                          alt=""
                          src="/rectangle-6@2x.png"
                        />
                        <img
                          className="w-9 h-9 relative rounded-2xl object-contain hidden"
                          alt=""
                          src="/rectangle-61@2x.png"
                        />
                        <img
                          className="w-9 h-9 relative rounded-2xl object-contain hidden"
                          alt=""
                          src="/rectangle-62@2x.png"
                        />
                        <div className="self-stretch h-[513px] relative shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white hidden" />
                        <button className="cursor-pointer [border:none] py-[17px] pr-[53px] pl-[59px] bg-honeydew rounded-t-lg rounded-b-none flex flex-row items-start justify-start box-border max-w-full z-[1] hover:bg-gainsboro-500">
                          <div className="h-[50px] w-[736px] relative rounded-t-lg rounded-b-none bg-honeydew hidden max-w-full" />
                          <div className="relative text-sm leading-[16px] font-medium font-ibm-plex-sans text-seagreen text-center z-[2]">{`Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼`}</div>
                        </button>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
                          <div className="flex-1 flex flex-row flex-wrap items-end justify-center gap-[24px] max-w-full">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[208px]">
                              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                                <h2 className="m-0 relative text-5xl font-bold font-ibm-plex-sans text-black text-left z-[1] mq450:text-lgi">
                                  Create Account
                                </h2>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch rounded-t-sm rounded-b-none bg-whitesmoke-200 flex flex-row items-start justify-start py-0 px-3 gap-[72px] shrink-0 z-[2] border-[1px] border-solid border-gainsboro-100 mq450:flex-wrap">
                                  <div className="h-[46px] w-80 relative rounded-t-sm rounded-b-none bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
                                  <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                                    <div className="relative text-mini leading-[16px] font-medium font-ibm-plex-sans text-gray-100 text-left inline-block min-w-[76px] z-[1]">
                                      First Name
                                    </div>
                                  </div>
                                  <div className="h-[45px] flex flex-row items-start justify-start gap-[11px]">
                                    <div className="h-[46px] w-px relative box-border z-[1] border-r-[1px] border-solid border-gainsboro-200" />
                                    <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                                      <div className="relative text-mini leading-[16px] font-medium font-ibm-plex-sans text-gray-100 text-left inline-block min-w-[73px] z-[1]">
                                        Last Name
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch bg-whitesmoke-200 flex flex-row items-start justify-start py-[13px] px-3 shrink-0 z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
                                  <div className="h-[46px] w-80 relative bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
                                  <div className="relative text-mini leading-[16px] font-medium font-ibm-plex-sans text-gray-100 text-left inline-block min-w-[39px] z-[1]">
                                    Email
                                  </div>
                                </div>
                                <div className="self-stretch bg-whitesmoke-200 flex flex-row items-start justify-between py-3 pr-[18px] pl-3 shrink-0 gap-[20px] z-[2] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
                                  <div className="h-[46px] w-80 relative bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
                                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                                    <div className="relative text-mini leading-[16px] font-medium font-ibm-plex-sans text-gray-100 text-left inline-block min-w-[67px] z-[1]">
                                      Password
                                    </div>
                                  </div>
                                  <img
                                    className="h-[18px] w-[18px] relative object-contain min-h-[18px] z-[1]"
                                    alt=""
                                    src="/group-3-11@2x.png"
                                  />
                                </div>
                                <div className="self-stretch rounded-t-none rounded-b-sm bg-whitesmoke-200 flex flex-row items-start justify-start py-[13px] px-3 shrink-0 whitespace-nowrap z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
                                  <div className="h-[46px] w-80 relative rounded-t-none rounded-b-sm bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
                                  <div className="relative text-mini leading-[16px] font-medium font-ibm-plex-sans text-gray-100 text-left inline-block min-w-[126px] z-[1]">
                                    Confirm Password
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                                <button className="cursor-pointer [border:none] py-3 px-5 bg-royalblue flex-1 rounded-xl flex flex-row items-start justify-center whitespace-nowrap z-[1] hover:bg-dodgerblue">
                                  <div className="h-10 w-80 relative rounded-xl bg-royalblue hidden" />
                                  <div className="relative text-sm leading-[16px] font-semibold font-ibm-plex-sans text-white text-center inline-block min-w-[100px] z-[1]">
                                    Create Account
                                  </div>
                                </button>
                              </div>
                              <SocialSignup
                                signUpWithFacebook="Sign up with Facebook"
                                signUpWithGoogle="Sign up with Google"
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-end justify-start gap-[31px] min-w-[208px]">
                              <div className="relative text-smi text-right z-[1]">
                                <span className="font-ibm-plex-sans text-darkslategray-300">{`Already have an account? `}</span>
                                <span className="font-semibold font-ibm-plex-sans text-royalblue">
                                  Sign In
                                </span>
                              </div>
                              <div className="self-stretch h-[348px] flex flex-col items-end justify-start gap-[12px]">
                                <img
                                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                  alt=""
                                  src="/group-3-21@2x.png"
                                />
                                <div className="self-stretch relative text-2xs tracking-[-0.01em] leading-[16px] font-ibm-plex-sans text-gray-800 text-right z-[1]">{`By signing up, you agree to our Terms & conditions, Privacy policy`}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start gap-[48px] text-left text-sm">
                    <div className="flex flex-col items-start justify-start gap-[22px]">
                      <div className="flex flex-row items-start justify-start gap-[27px] mq450:flex-wrap">
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
                      <div className="flex flex-row items-start justify-start gap-[27px] mq450:flex-wrap">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesktopJoinGroup;
