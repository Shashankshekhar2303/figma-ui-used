import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[25px] pl-5 box-border max-w-full text-left text-lg text-black font-ibm-plex-sans ${className}`}
    >
      <div className="h-[581px] w-[1035px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[120px] max-w-full mq750:gap-[30px] mq1050:h-auto mq1050:gap-[60px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] shrink-0 max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[103px] max-w-full mq750:gap-[26px] mq1050:gap-[51px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[450px] max-w-full mq750:min-w-full">
              <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[20px] max-w-full border-[1px] border-solid border-gainsboro-400">
                <div className="self-stretch h-[474px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-400" />
                <img
                  className="self-stretch h-[220px] relative rounded-t rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-5-1@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-3 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px] max-w-full">
                    <div className="relative font-medium inline-block min-w-[112px] z-[1]">
                      🔬️ Education
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-3xl mq750:flex-wrap">
                      <h3 className="m-0 flex-1 relative text-inherit leading-[134.55%] font-semibold font-inherit inline-block min-w-[390px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq750:min-w-full">
                        Tax Benefits for Investment under National Pension
                        Scheme launched by Government
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
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…
                    </h3>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[10px]">
                      <img
                        className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-3-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                        <div className="relative font-semibold inline-block min-w-[96px] z-[1]">
                          Sarah West
                        </div>
                      </div>
                    </div>
                    <div className="w-[177px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-right text-sm text-dimgray-300">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                          <div className="flex flex-row items-start justify-start gap-[8px]">
                            <img
                              className="h-[18px] w-[18px] relative object-cover min-h-[18px] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/iconactionvisibility-24px@2x.png"
                            />
                            <div className="relative font-medium inline-block min-w-[69px] z-[1]">
                              1.4k views
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-9 w-[42px] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/group-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex flex-row items-start justify-start gap-[28px] text-sm">
              <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="h-9 w-9 relative rounded-2xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-2@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <div className="self-stretch relative">Activism</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="h-9 w-9 relative rounded-2xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-3@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <div className="self-stretch relative">MBA</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="h-9 w-9 relative rounded-2xl object-cover"
                    loading="lazy"
                    alt=""
                    src="/rectangle-6-4@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <div className="self-stretch relative">Philosophy</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-center text-xs">
                <div className="flex flex-col items-start justify-start gap-[60px]">
                  <div className="flex flex-col items-start justify-start gap-[34px]">
                    <div className="rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-3">
                      <div className="h-6 w-[60px] relative rounded-sm bg-whitesmoke-600 hidden" />
                      <div className="relative inline-block min-w-[36px] z-[1]">
                        Follow
                      </div>
                    </div>
                    <div className="rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-3">
                      <div className="h-6 w-[60px] relative rounded-sm bg-whitesmoke-600 hidden" />
                      <div className="relative inline-block min-w-[36px] z-[1]">
                        Follow
                      </div>
                    </div>
                    <div className="rounded-sm bg-whitesmoke-600 flex flex-row items-start justify-start py-1 px-3">
                      <div className="h-6 w-[60px] relative rounded-sm bg-whitesmoke-600 hidden" />
                      <div className="relative inline-block min-w-[36px] z-[1]">
                        Follow
                      </div>
                    </div>
                  </div>
                  <div className="relative text-royalblue text-right inline-block min-w-[60px]">
                    See More...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[692px] h-[90px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
            <div className="h-[490px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[0px] rounded bg-white box-border w-full h-full border-[1px] border-solid border-gainsboro-400" />
              <img
                className="absolute top-[0px] left-[0px] rounded-t rounded-b-none w-[692px] h-[220px] object-cover z-[1]"
                alt=""
                src="/rectangle-5-2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[692px] flex flex-row items-end justify-start shrink-0 max-w-full">
          <div className="flex-1 rounded bg-white box-border flex flex-row items-end justify-between py-5 pr-[21px] pl-[19px] min-h-[269px] max-w-full gap-[20px] border-[1px] border-solid border-gainsboro-400 mq450:flex-wrap">
            <div className="h-[271px] w-[694px] relative rounded bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro-400" />
            <div className="w-[162px] flex flex-row items-start justify-start gap-[10px]">
              <img
                className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
                alt=""
                src="/rectangle-3-3@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="self-stretch h-6 relative font-semibold inline-block z-[1]">
                  Joseph Gray
                </div>
              </div>
            </div>
            <div className="w-[177px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-right text-sm text-dimgray-300">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="h-[27px] w-[95px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
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
                <img
                  className="h-9 w-[42px] relative z-[1]"
                  alt=""
                  src="/group-2.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[692px] flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border min-h-[565px] max-w-full ml-[-692px] mq750:pb-[49px] mq750:box-border">
            <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full z-[4] border-[1px] border-solid border-gainsboro-400">
              <div className="w-[652px] h-[38px] relative hidden max-w-full text-center text-smi text-tomato">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-full h-full border-[0.7px] border-solid border-darkgray-100" />
                <div className="absolute top-[10px] left-[286px] leading-[140.4%] font-semibold">
                  Visit Website
                </div>
              </div>
              <div className="w-32 relative text-mini font-medium hidden">
                Ahmedabad, India
              </div>
              <div className="w-[142px] relative text-mini font-medium hidden">
                Fri, 12 Oct, 2018
              </div>
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/baselinetoday24px2.svg"
              />
              <div className="w-[92px] h-6 relative font-medium hidden">
                🗓️ Meetup
              </div>
              <div className="w-[600px] relative text-3xl font-semibold hidden max-w-full mq450:text-lg">{`Finance & Investment Elite Social Mixer @Lujiazui`}</div>
              <img
                className="w-12 h-12 relative rounded-3xl object-cover hidden"
                alt=""
                src="/rectangle-3-2@2x.png"
              />
              <div className="w-[102px] relative font-semibold hidden">
                Ronal Jones
              </div>
              <div className="w-[69px] relative text-sm font-medium text-dimgray-300 text-right hidden">
                1.4k views
              </div>
              <div className="w-[60px] h-6 relative font-medium hidden">
                💼️ Job
              </div>
              <div className="w-[600px] relative text-3xl leading-[134.55%] font-semibold hidden max-w-full mq450:text-lg mq450:leading-[24px]">
                Software Developer
              </div>
              <div className="w-[85px] relative text-mini font-medium hidden">
                Noida, India
              </div>
              <div className="w-[226px] relative text-mini font-medium hidden">
                Innovaccer Analytics Private Ltd.
              </div>
              <div className="w-[650px] h-9 relative hidden max-w-full text-center text-smi text-mediumseagreen">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-full h-full border-[0.7px] border-solid border-darkgray-100" />
                <div className="absolute top-[9px] left-[266px] leading-[140.4%] font-semibold">
                  Apply on Timesjobs
                </div>
              </div>
              <div className="w-40 h-[102px] relative hidden text-sm">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16),_0px_0px_2px_rgba(0,_0,_0,_0.08)] rounded bg-white w-full h-full" />
                <div className="absolute top-[4px] left-[0px] w-40 h-8 text-right">
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full opacity-[0] border-[1px] border-solid border-black" />
                  <div className="absolute top-[7px] left-[12px]">Edit</div>
                </div>
                <div className="absolute top-[35px] left-[0px] w-40 h-8">
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full opacity-[0] border-[1px] border-solid border-black" />
                  <div className="absolute top-[7px] left-[12px]">Report</div>
                </div>
                <div className="absolute top-[66px] left-[0px] w-40 h-8">
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full opacity-[0] border-[1px] border-solid border-black" />
                  <div className="absolute top-[7px] left-[12px]">Option 3</div>
                </div>
              </div>
              <div className="self-stretch h-[492px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-400" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-5 w-5 absolute !m-[0] bottom-[94px] left-[226px] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/outlinelocation-on24px-1.svg"
                />
                <img
                  className="h-7 w-7 absolute !m-[0] top-[66px] right-[20px] overflow-hidden shrink-0 object-contain z-[1]"
                  alt=""
                  src="/baselinemore-vert24px-1@2x.png"
                />
                <img
                  className="h-[220px] flex-1 relative rounded-t rounded-b-none max-w-full overflow-hidden object-cover z-[1]"
                  alt=""
                  src="/rectangle-5-2@2x.png"
                />
              </div>
              <div className="w-[672px] flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-5 w-5 absolute !m-[0] bottom-[-11px] left-[310px] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/outlinelocation-on24px-1.svg"
                />
                <img
                  className="h-5 w-5 absolute !m-[0] bottom-[-11px] left-[20px] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/outlinework-outline24px1.svg"
                />
                <img
                  className="h-9 w-[42px] absolute !m-[0] top-[-22px] right-[0px] z-[1]"
                  alt=""
                  src="/group-2.svg"
                />
                <div className="flex-1 flex flex-row items-start justify-start pt-0 pb-3 pr-0 pl-5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                      <img
                        className="h-[18px] w-[18px] absolute !m-[0] top-[-13px] right-[159px] object-cover z-[1]"
                        alt=""
                        src="/iconactionvisibility-24px@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                        <div className="w-[92px] h-6 relative font-medium inline-block z-[1]">
                          🗓️ Meetup
                        </div>
                        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-3xl">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[390px] max-w-full mq750:min-w-full">
                            <h3 className="m-0 self-stretch h-[29px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-lg">{`Finance & Investment Elite Social Mixer @Lujiazui`}</h3>
                            <div className="w-[358px] flex flex-row items-start justify-start gap-[40px] max-w-full text-mini mq450:flex-wrap mq450:gap-[20px]">
                              <div className="flex-1 flex flex-row items-start justify-start gap-[4px] min-w-[108px]">
                                <img
                                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                                  alt=""
                                  src="/baselinetoday24px2.svg"
                                />
                                <div className="h-5 flex-1 relative font-medium inline-block z-[1]">
                                  Fri, 12 Oct, 2018
                                </div>
                              </div>
                              <div className="h-5 w-[152px] flex flex-row items-start justify-start gap-[4px]">
                                <img
                                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                                  alt=""
                                  src="/outlinelocation-on24px-1.svg"
                                />
                                <div className="self-stretch flex-1 relative font-medium z-[1]">
                                  Ahmedabad, India
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <img
                              className="w-7 h-7 relative overflow-hidden shrink-0 object-contain z-[1]"
                              alt=""
                              src="/group-33@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[38px] flex flex-row items-start justify-start relative max-w-full text-center text-smi text-tomato">
                      <img
                        className="h-7 w-7 absolute !m-[0] top-[0px] right-[0px] overflow-hidden shrink-0 object-contain z-[1]"
                        alt=""
                        src="/group-33@2x.png"
                      />
                      <div className="self-stretch flex-1 rounded-lg bg-white box-border flex flex-row items-start justify-center py-2.5 px-5 max-w-full z-[1] border-[0.7px] border-solid border-darkgray-100">
                        <div className="h-[38px] w-[652px] relative rounded-lg bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray-100" />
                        <div className="self-stretch w-20 relative leading-[140.4%] font-semibold inline-block z-[1]">
                          Visit Website
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="w-40 flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
                      alt=""
                      src="/rectangle-3-2@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <div className="self-stretch h-6 relative font-semibold inline-block z-[1]">
                        Ronal Jones
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
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
