import PostItems from "./post-items";
import PropTypes from "prop-types";

const PostContainer = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[450px] max-w-full text-left text-lg text-black font-ibm-plex-sans mq725:min-w-full ${className}`}
    >
      <PostItems
        postItemIcons="/rectangle-53@2x.png"
        article="✍️ Article"
        whatIfFamousBrandsHadRegu="What if famous brands had regular fonts? Meet RegulaBrands!"
        postItemUserIcons="/rectangle-32@2x.png"
        sarthakKamra="Sarthak Kamra"
        group2="/group-2.svg"
      />
      <PostItems
        postItemIcons="/rectangle-5-1@2x.png"
        article="🔬️ Education"
        whatIfFamousBrandsHadRegu="Tax Benefits for Investment under National Pension Scheme launched by Government"
        postItemUserIcons="/rectangle-3-1@2x.png"
        sarthakKamra="Sarah West"
        group2="/group-21@2x.png"
      />
      <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[20px] max-w-full border-[1px] border-solid border-gainsboro-400">
        <div className="self-stretch h-[492px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-400" />
        <img
          className="self-stretch h-[220px] relative rounded-t rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          alt=""
          src="/rectangle-5-2@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="relative font-medium inline-block min-w-[92px] z-[1]">
              🗓️ Meetup
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-3xl">
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px] max-w-full mq725:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[390px] max-w-full mq725:min-w-full">
                  <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit z-[1] mq450:text-lg">{`Finance & Investment Elite Social Mixer @Lujiazui`}</h3>
                </div>
                <div className="h-8 w-9 relative">
                  <img
                    className="absolute top-[0px] left-[0px] rounded w-full h-full object-contain z-[1]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="absolute top-[2px] left-[4px] w-7 h-7 overflow-hidden object-contain z-[2]"
                    alt=""
                    src="/group-33@2x.png"
                  />
                </div>
              </div>
              <form className="m-0 self-stretch h-[102px] relative max-w-full">
                <button className="cursor-pointer py-[9px] px-5 bg-white absolute top-[42px] left-[0px] rounded-lg box-border w-[652px] flex flex-row items-start justify-center max-w-full z-[1] border-[0.7px] border-solid border-darkgray-100 hover:bg-gainsboro-300 hover:box-border hover:border-[0.7px] hover:border-solid hover:border-slategray">
                  <div className="h-[38px] w-[652px] relative rounded-lg bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray-100" />
                  <div className="relative text-smi leading-[140.4%] font-semibold font-ibm-plex-sans text-tomato text-center inline-block min-w-[80px] z-[1]">
                    Visit Website
                  </div>
                </button>
                <img
                  className="absolute top-[6px] left-[206px] w-5 h-5 overflow-hidden object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/outlinelocation-on24px1@2x.png"
                />
                <div className="absolute top-[6px] left-[230px] text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[128px] z-[1]">
                  Ahmedabad, India
                </div>
                <div className="absolute top-[6px] left-[24px] text-mini font-medium font-ibm-plex-sans text-black text-left inline-block w-[142px] z-[1]">
                  Fri, 12 Oct, 2018
                </div>
                <img
                  className="absolute top-[6px] left-[0px] w-5 h-5 overflow-hidden object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/baselinetoday24px1@2x.png"
                />
                <div className="absolute top-[0px] left-[492px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16),_0px_0px_2px_rgba(0,_0,_0,_0.08)] rounded bg-white w-40 flex flex-col items-start justify-start py-1 px-0 box-border z-[2]">
                  <div className="self-stretch h-[102px] relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.16),_0px_0px_2px_rgba(0,_0,_0,_0.08)] rounded bg-white hidden z-[1]" />
                  <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-3 z-[1] border-[1px] border-solid border-black">
                    <div className="h-8 w-40 relative box-border hidden opacity-[0] border-[1px] border-solid border-black" />
                    <a className="[text-decoration:none] relative text-sm font-ibm-plex-sans text-black text-right inline-block min-w-[25px] z-[1]">
                      Edit
                    </a>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-3 z-[2] mt-[-1px] border-[1px] border-solid border-black">
                    <div className="h-8 w-40 relative box-border hidden opacity-[0] border-[1px] border-solid border-black" />
                    <div className="relative text-sm font-ibm-plex-sans text-black text-left inline-block min-w-[43px] z-[1]">
                      Report
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-3 z-[3] mt-[-1px] border-[1px] border-solid border-black">
                    <div className="h-8 w-40 relative box-border hidden opacity-[0] border-[1px] border-solid border-black" />
                    <div className="relative text-sm font-ibm-plex-sans text-black text-left inline-block min-w-[54px] z-[1]">
                      Option 3
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
                  alt=""
                  src="/rectangle-3-2@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <div className="relative font-semibold inline-block min-w-[102px] z-[1]">
                    Ronal Jones
                  </div>
                </div>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-right text-sm text-dimgray-300">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-[18px] w-[18px] relative object-cover min-h-[18px] z-[1]"
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
      <div className="self-stretch rounded bg-white box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-[32px] max-w-full border-[1px] border-solid border-gainsboro-400 mq725:gap-[16px]">
        <div className="w-[694px] h-[271px] relative rounded bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro-400" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
          <div className="relative font-medium inline-block min-w-[60px] z-[1]">
            💼️ Job
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[16px] max-w-full text-3xl">
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq725:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[390px] max-w-full mq725:min-w-full">
                <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[24px]">
                  Software Developer
                </h3>
                <div className="flex flex-row items-start justify-start gap-[40px] max-w-full text-mini mq450:flex-wrap mq450:gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/outlinework-outline24px1.svg"
                    />
                    <div className="relative font-medium z-[1]">
                      Innovaccer Analytics Private Ltd.
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                      alt=""
                      src="/outlinelocation-on24px-1.svg"
                    />
                    <div className="relative font-medium inline-block min-w-[85px] z-[1]">
                      Noida, India
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
            <button className="cursor-pointer py-2 px-5 bg-white self-stretch rounded-3xs box-border flex flex-row items-start justify-center max-w-full z-[1] border-[0.7px] border-solid border-darkgray-100 hover:bg-gainsboro-300 hover:box-border hover:border-[0.7px] hover:border-solid hover:border-slategray">
              <div className="h-9 w-[650px] relative rounded-3xs bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray-100" />
              <div className="relative text-smi leading-[140.4%] font-semibold font-ibm-plex-sans text-mediumseagreen text-center inline-block min-w-[118px] z-[1]">
                Apply on Timesjobs
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
              alt=""
              src="/rectangle-3-3@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="relative font-semibold inline-block min-w-[104px] z-[1]">
                Joseph Gray
              </div>
            </div>
          </div>
          <div className="w-[177px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-right text-sm text-dimgray-300">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[18px] w-[18px] relative object-cover min-h-[18px] z-[1]"
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
  );
};

PostContainer.propTypes = {
  className: PropTypes.string,
};

export default PostContainer;
