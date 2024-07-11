import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  feedAvatars,
  article,
  whatIfFamousBrandsHadRegu,
  authorPicture,
  sarthakKamra,
  propTop,
  propBottom,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className={`w-[694px] !m-[0] absolute top-[-18px] left-[-152px] rounded bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full text-left text-lg text-black font-ibm-plex-sans border-[1px] border-solid border-gainsboro-400 ${className}`}
      style={groupDivStyle}
    >
      <div className="self-stretch h-[474px] relative rounded bg-white box-border hidden border-[1px] border-solid border-gainsboro-400" />
      <img
        className="self-stretch h-[220px] relative rounded-t rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src={feedAvatars}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pr-[22px] pl-5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px] max-w-full">
          <div className="relative font-medium inline-block min-w-[84px] z-[1]">
            {article}
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-3xl">
            <h3 className="m-0 flex-1 relative text-inherit leading-[134.17%] font-semibold font-inherit inline-block min-w-[380px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq825:min-w-full">
              {whatIfFamousBrandsHadRegu}
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
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-12 w-12 relative rounded-3xl object-cover z-[1]"
              loading="lazy"
              alt=""
              src={authorPicture}
            />
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="relative font-semibold inline-block min-w-[125px] z-[1]">
                {sarthakKamra}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-right text-sm text-dimgray-300">
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
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  feedAvatars: PropTypes.string,
  article: PropTypes.string,
  whatIfFamousBrandsHadRegu: PropTypes.string,
  authorPicture: PropTypes.string,
  sarthakKamra: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propBottom: PropTypes.any,
};

export default GroupComponent1;
