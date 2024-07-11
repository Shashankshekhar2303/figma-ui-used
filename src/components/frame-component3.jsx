import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="flex-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white flex flex-row items-start justify-between pt-4 px-[72px] pb-3.5 box-border max-w-full gap-[20px] text-right text-base text-darkslategray-500 font-ibm-plex-sans mq750:pl-9 mq750:pr-9 mq750:box-border">
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
              <a className="[text-decoration:none] relative whitespace-nowrap z-[1] text-[inherit] mq750:hidden">
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
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
