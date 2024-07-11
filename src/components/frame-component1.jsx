import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white w-full flex flex-row items-start justify-start pt-4 px-[72px] pb-3.5 box-border gap-[162px] max-w-full z-[3] text-left text-sm text-black font-ibm-plex-sans lg:gap-[81px] lg:pl-9 lg:pr-9 lg:box-border mq450:gap-[20px] mq750:gap-[40px] ${className}`}
    >
      <div className="h-[72px] w-[1440px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white hidden max-w-full" />
      <div className="w-[306px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
        <img
          className="w-[162.6px] h-6 relative overflow-hidden shrink-0 z-[4]"
          alt=""
          src="/whole1.svg"
        />
      </div>
      <div className="w-[360px] rounded-2xl bg-whitesmoke-500 flex flex-row items-start justify-start py-2.5 px-3.5 box-border gap-[14px] max-w-full z-[4]">
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
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <img
              className="w-9 h-9 relative rounded-2xl object-cover z-[4]"
              alt=""
              src="/owner-icon@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[104px] whitespace-nowrap z-[4]">
              Siddharth Goyal
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-[22px] h-[22px] relative overflow-hidden shrink-0 z-[4]"
              alt=""
              src="/baselinearrow-drop-down24px2.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
