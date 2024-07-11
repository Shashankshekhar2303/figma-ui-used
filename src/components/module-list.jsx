import FrameComponent2 from "./frame-component2";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const ModuleList = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch h-[430px] relative max-w-full mq450:h-auto mq450:min-h-[430] ${className}`}
    >
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="absolute top-[140px] left-[200px] w-[1040px] h-px">
        <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[3] border-t-[1px] border-solid border-gainsboro-400" />
        <div className="absolute top-[0px] left-[0px] box-border w-[94px] h-px z-[4] border-t-[1px] border-solid border-black" />
      </div>
      <button className="cursor-pointer py-1.5 px-[9px] bg-white absolute top-[92px] left-[1106px] rounded flex flex-row items-start justify-start gap-[6px] z-[3] border-[0.8px] border-solid border-darkgray-200">
        <div className="h-9 w-[134px] relative rounded bg-white box-border hidden border-[0.8px] border-solid border-darkgray-200" />
        <img
          className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
          alt=""
          src="/outlineexit-to-app24px.svg"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <a className="[text-decoration:none] relative text-mini font-medium font-ibm-plex-sans text-dimgray-100 text-left inline-block min-w-[86px] z-[1]">
            Leave Group
          </a>
        </div>
      </button>
      <div className="absolute top-[92px] left-[957px] rounded bg-whitesmoke-600 flex flex-row items-start justify-start py-[7px] pr-1.5 pl-3 gap-[10px] z-[3]">
        <div className="h-9 w-[133px] relative rounded bg-whitesmoke-600 hidden" />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <a className="[text-decoration:none] relative text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[83px] z-[1]">
            Write a Post
          </a>
        </div>
        <img
          className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
          alt=""
          src="/baselinearrow-drop-down24px2.svg"
        />
      </div>
      <div className="absolute top-[225px] left-[995px] box-border w-[243.4px] h-[0.4px] border-t-[0.4px] border-solid border-silver-200" />
      <div className="absolute top-[196px] left-[1017px] text-sm font-ibm-plex-sans text-left inline-block min-w-[127px]">
        <span className="text-black">|</span>
        <span className="text-gray-500">Enter your location</span>
      </div>
      <img
        className="absolute top-[196px] left-[995px] w-[18px] h-[18px] overflow-hidden"
        loading="lazy"
        alt=""
        src="/outlinelocation-on24px-2.svg"
      />
      <div className="absolute top-[257px] left-[1018px] text-xs font-ibm-plex-sans text-gray-900 text-left inline-block w-[220px]">
        Your location will help us serve better and extend a personalised
        experience.
      </div>
      <img
        className="absolute top-[258px] left-[995px] w-4 h-4 overflow-hidden"
        loading="lazy"
        alt=""
        src="/baselineerror-outline24px1.svg"
      />
      <div className="absolute top-[343px] left-[1017px] text-sm tracking-[0.1em] uppercase font-ibm-plex-sans text-black text-left">
        REcommended Groups
      </div>
      <img
        className="absolute top-[385px] left-[995px] rounded-2xl w-9 h-9 object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-6-1@2x.png"
      />
      <div className="absolute top-[394px] left-[1043px] text-sm font-ibm-plex-sans text-black text-left inline-block w-[104px]">
        Leisure
      </div>
      <div className="absolute top-[391px] left-[1162px] rounded-sm bg-black flex flex-row items-start justify-start py-1 px-3">
        <div className="h-6 w-[73px] relative rounded-sm bg-black hidden" />
        <div className="relative text-xs font-ibm-plex-sans text-white text-right inline-block min-w-[49px] z-[1]">
          Followed
        </div>
      </div>
      <div className="absolute top-[343px] left-[995px] w-[18px] h-[18px]">
        <img className="absolute top-[0px] left-[0px] w-full h-full" alt="" />
        <img
          className="absolute top-[3.5px] left-[6.8px] w-[9px] h-[10.8px] z-[1]"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[0.8px] left-[0.8px] w-[16.5px] h-[15px] z-[2]"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <img
        className="absolute top-[195px] left-[1218px] w-5 h-5 overflow-hidden"
        loading="lazy"
        alt=""
        src="/baselineclear24px.svg"
      />
    </form>
  );
};

ModuleList.propTypes = {
  className: PropTypes.string,
};

export default ModuleList;
