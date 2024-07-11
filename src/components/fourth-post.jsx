import PropTypes from "prop-types";

const FourthPost = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white flex flex-col items-start justify-start py-5 px-4 box-border gap-[32px] max-w-full z-[1] text-left text-sm text-black font-ibm-plex-sans ${className}`}
    >
      <div className="w-[360px] h-[237px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[6px]">
          <div className="w-[47px] h-[19px] relative font-medium inline-block z-[2]">
            <span>{`💼️ `}</span>
            <span className="text-darkslategray-200">Job</span>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-base">
            <div className="self-stretch flex flex-row items-start justify-start gap-[18px]">
              <div className="h-[21px] flex-1 relative font-semibold inline-block z-[2]">
                Software Developer - II
              </div>
              <img
                className="h-7 w-7 relative z-[2]"
                alt=""
                src="/group-3.svg"
              />
            </div>
            <div className="w-[267px] h-4 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] text-xs text-gray-200">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[2px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                  alt=""
                  src="/outlinework-outline24px.svg"
                />
                <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                  Innovaccer Analytic...
                </div>
              </div>
              <div className="self-stretch w-[85px] flex flex-row items-start justify-start gap-[2px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                  alt=""
                  src="/outlinelocation-on24px.svg"
                />
                <div className="self-stretch flex-1 relative tracking-[-0.01em] font-medium z-[2]">
                  Noida, India
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[34px] rounded-lg bg-white box-border flex flex-row items-start justify-center py-2 px-5 whitespace-nowrap max-w-full z-[2] text-center text-smi text-mediumseagreen border-[0.7px] border-solid border-darkgray-100">
          <div className="h-[34px] w-[328px] relative rounded-lg bg-white box-border hidden max-w-full border-[0.7px] border-solid border-darkgray-100" />
          <div className="self-stretch w-[118px] relative leading-[140.4%] font-semibold inline-block z-[1]">
            Apply on Timesjobs
          </div>
        </div>
      </div>
      <footer className="self-stretch flex flex-row items-end justify-between py-0 pr-0.5 pl-0 gap-[20px] text-left text-smi text-gray-200 font-ibm-plex-sans">
        <div className="w-[124px] flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-[37px] w-[37px] relative rounded-3xl object-cover min-h-[37px] z-[2]"
            alt=""
            src="/rectangle-310@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch h-[17px] relative font-semibold inline-block z-[2]">
                Joseph Gray
              </div>
              <div className="w-[59px] h-4 relative text-xs font-medium text-darkslategray-100 inline-block z-[3]">
                1.7k views
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
      </footer>
    </section>
  );
};

FourthPost.propTypes = {
  className: PropTypes.string,
};

export default FourthPost;
