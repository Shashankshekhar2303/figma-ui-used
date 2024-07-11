import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white flex flex-row items-start justify-between pt-4 px-[72px] pb-3.5 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-sm text-dimgray-200 font-ibm-plex-sans mq725:pl-9 mq725:pr-9 mq725:box-border ${className}`}
    >
      <div className="h-[72px] w-[1440px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white hidden max-w-full" />
      <div className="w-[207px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
        <img
          className="w-[162.6px] h-6 relative overflow-hidden shrink-0 object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/whole@2x.png"
        />
      </div>
      <div className="w-[360px] rounded-2xl bg-whitesmoke-500 flex flex-row items-start justify-start py-2.5 px-3.5 box-border gap-[14px] max-w-full z-[1] mq975:w-[118px]">
        <div className="h-[42px] w-[360px] relative rounded-2xl bg-whitesmoke-500 hidden max-w-full" />
        <img
          className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
          alt=""
          src="/group-28.svg"
        />
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 mq975:hidden">
          <div className="relative font-medium whitespace-nowrap z-[1] mq725:hidden">
            Search for your favorite groups in ATG
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-right text-base text-darkslategray-500">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <a className="[text-decoration:none] relative whitespace-nowrap z-[1] text-[inherit] mq725:hidden">
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
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
