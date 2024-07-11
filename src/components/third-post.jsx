import { useMemo } from "react";
import PropTypes from "prop-types";

const ThirdPost = ({ className = "", propHeight, propFlex }) => {
  const thirdPostStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <section
      className={`self-stretch h-[374px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white flex flex-col items-start justify-start pt-3 px-0 pb-5 box-border gap-[14px] max-w-full z-[1] text-left text-sm text-black font-ibm-plex-sans ${className}`}
      style={thirdPostStyle}
    >
      <div className="self-stretch h-[374px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white hidden" />
      <img
        className="self-stretch relative rounded-t rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[2]"
        alt=""
        src="/rectangle-52@2x.png"
      />
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[6px]">
              <div className="w-[72px] h-[19px] relative font-medium inline-block z-[2]">
                <span>{`🗓️ `}</span>
                <span className="text-darkslategray-200">Meetup</span>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] text-base">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[18px]">
                  <div className="self-stretch w-[280px] relative font-semibold inline-block shrink-0 z-[2]">{`Finance & Investment Elite Social Mixer @Lujiazui`}</div>
                  <img
                    className="h-7 w-7 relative z-[2]"
                    alt=""
                    src="/group-3.svg"
                  />
                </div>
                <div className="w-[300px] h-4 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] text-xs text-gray-200">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[2px]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                      alt=""
                      src="/baselinetoday24px.svg"
                    />
                    <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                      Fri, 12 Oct, 2018
                    </div>
                  </div>
                  <div className="self-stretch w-[118px] flex flex-row items-start justify-start gap-[2px]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                      alt=""
                      src="/outlinelocation-on24px.svg"
                    />
                    <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                      Ahmedabad, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[34px] rounded-lg bg-white box-border flex flex-row items-start justify-center py-2 px-5 whitespace-nowrap max-w-full z-[2] text-center text-smi text-tomato border-[0.7px] border-solid border-darkgray-100">
              <div className="h-[34px] w-[328px] relative rounded-lg bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray-100" />
              <div className="self-stretch w-20 relative leading-[140.4%] font-semibold inline-block z-[1]">
                Visit Website
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between py-0 pr-0.5 pl-0 gap-[20px] text-smi text-gray-200">
            <div className="w-[123px] flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[37px] w-[37px] relative rounded-3xl object-cover min-h-[37px] z-[2]"
                alt=""
                src="/rectangle-38@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch h-[17px] relative font-semibold inline-block z-[2]">
                    Ronal Jones
                  </div>
                  <div className="w-14 h-4 relative text-xs font-medium text-darkslategray-100 inline-block z-[3]">
                    800 views
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[70px] rounded bg-whitesmoke-300 flex flex-row items-start justify-start py-[9px] px-2 box-border gap-[4px] z-[2] text-xs">
              <div className="h-9 w-[70px] relative rounded bg-whitesmoke-300 hidden" />
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                alt=""
                src="/baselineshare24px.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="self-stretch h-4 relative inline-block z-[1]">
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ThirdPost.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
};

export default ThirdPost;
