import PropTypes from "prop-types";

const Feed = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[14px] shrink-0 max-w-full z-[1] text-left text-sm text-black font-ibm-plex-sans ${className}`}
    >
      <div className="self-stretch h-[328px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white hidden" />
      <div className="self-stretch h-[120px] relative rounded-t rounded-b-none bg-[url('/public/rectangle-51@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-4 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[87px] h-[19px] relative font-medium inline-block z-[2]">
                <span>{`🔬️ `}</span>
                <span className="text-darkslategray-200">Education</span>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[18px] text-base text-gray-200">
                <div className="w-[280px] relative font-semibold inline-block shrink-0 z-[2]">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </div>
                <img
                  className="h-7 w-7 relative z-[2]"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-[18px] relative text-darkslategray-100 inline-block z-[2]">
              I’ve worked in UX for the better part of a decade. F..
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-smi text-gray-200">
            <div className="w-[118px] flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[37px] w-[37px] relative rounded-3xl object-cover min-h-[37px] z-[2]"
                alt=""
                src="/rectangle-36@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch h-[17px] relative font-semibold inline-block z-[2]">
                    Sarah West
                  </div>
                  <div className="w-[59px] h-4 relative text-xs font-medium text-darkslategray-100 inline-block z-[3]">
                    4.8k views
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
    </div>
  );
};

Feed.propTypes = {
  className: PropTypes.string,
};

export default Feed;
