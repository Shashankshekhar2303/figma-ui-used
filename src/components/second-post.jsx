import PropTypes from "prop-types";

const SecondPost = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start shrink-0 text-left text-sm text-black font-ibm-plex-sans ${className}`}
    >
      <div className="self-stretch h-[307px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white z-[1]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white w-full h-full hidden" />
        <img
          className="absolute top-[0px] left-[0px] rounded-t rounded-b-none w-[360px] h-[120px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <div className="absolute top-[134px] left-[16px] w-[326px] flex flex-col items-start justify-start gap-[21px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="relative font-medium inline-block min-w-[65px] z-[2]">
                <span>{`✍️ `}</span>
                <span className="text-darkslategray-200">Article</span>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[18px] text-base text-gray-200">
                <div className="flex-1 relative font-semibold z-[2]">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </div>
                <img
                  className="h-7 w-7 relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div>
            <div className="relative text-darkslategray-100 z-[2]">
              I’ve worked in UX for the better part of a decade. F..
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-smi text-gray-200">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[37px] w-[37px] relative rounded-3xl object-cover min-h-[37px] z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-31@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-semibold inline-block min-w-[91px] z-[2]">
                    Sarthak Kamra
                  </div>
                  <div className="relative text-xs font-medium text-darkslategray-100 inline-block min-w-[59px] z-[3]">
                    1.4k views
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[9px] px-2 bg-whitesmoke-300 rounded flex flex-row items-start justify-start gap-[4px] z-[2]">
              <div className="h-9 w-[70px] relative rounded bg-whitesmoke-300 hidden" />
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                alt=""
                src="/baselineshare24px.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative text-xs font-ibm-plex-sans text-gray-200 text-left inline-block min-w-[32px] z-[1]">
                  Share
                </div>
              </div>
            </button>
          </div>
        </div>
        <img
          className="absolute top-[235px] left-[288px] w-[54px] h-[54px] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/group-61@2x.png"
        />
      </div>
      <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
    </div>
  );
};

SecondPost.propTypes = {
  className: PropTypes.string,
};

export default SecondPost;
