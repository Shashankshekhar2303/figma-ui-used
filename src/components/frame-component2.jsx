import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[200px] w-[692px] h-[430px] flex flex-col items-start justify-start pt-[198px] px-0 pb-8 box-border gap-[20px] max-w-full text-left text-lg text-black font-ibm-plex-sans mq450:h-auto ${className}`}
    >
      <div className="mt-[-240px] self-stretch flex flex-row items-start justify-start pt-[141px] px-0 pb-[58px] relative gap-[19.5px] text-base text-gray-100 mq450:flex-wrap">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src="/rectangle-53@2x.png"
        />
        <div className="h-px w-[1297px] absolute !m-[0] right-[-477px] bottom-[93px] box-border opacity-[0] z-[3] border-t-[1px] border-solid border-gainsboro-400" />
        <a className="[text-decoration:none] relative text-black inline-block min-w-[93px] z-[3]">
          All Posts(32)
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[47px] z-[3]">
          Article
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[41px] z-[3]">
          Event
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[72px] z-[3]">
          Education
        </a>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[27px] z-[3]">
          Job
        </a>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-5 pb-6 box-border max-w-full shrink-0">
        <div className="flex flex-col items-start justify-start gap-[11.5px] max-w-full">
          <div className="relative font-medium inline-block min-w-[84px] z-[1]">
            ✍️ Article
          </div>
          <h3 className="m-0 w-[600px] relative text-3xl leading-[134.17%] font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[24px]">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h3>
          <h3 className="m-0 relative text-lgi leading-[134.17%] font-normal font-inherit text-dimgray-200 z-[1]">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </h3>
        </div>
      </div>
      <div className="w-[668px] flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
          <div className="relative font-semibold inline-block min-w-[125px] z-[1]">
            Sarthak Kamra
          </div>
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-right text-sm text-dimgray-300">
            <div className="relative font-medium inline-block min-w-[69px] z-[1]">
              1.4k views
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[472px] absolute !m-[0] top-[-42px] right-[0px] left-[0px]">
        <div className="absolute top-[0px] left-[0px] rounded bg-white box-border w-full h-full border-[1px] border-solid border-gainsboro-400" />
        <img
          className="absolute top-[276px] left-[644px] w-7 h-7 z-[1]"
          loading="lazy"
          alt=""
          src="/group-34.svg"
        />
        <img
          className="absolute top-[419px] left-[495px] w-[18px] h-[18px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/iconactionvisibility-24px@2x.png"
        />
        <img
          className="absolute top-[404px] left-[20px] rounded-3xl w-12 h-12 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-32@2x.png"
        />
        <img
          className="absolute top-[410px] left-[630px] w-[42px] h-9 z-[1]"
          loading="lazy"
          alt=""
          src="/group-2.svg"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
