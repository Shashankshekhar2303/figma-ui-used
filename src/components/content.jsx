import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[72px] pb-[27px] box-border max-w-full text-left text-base text-gray-100 font-ibm-plex-sans mq725:pl-9 mq725:pr-9 mq725:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
        <div className="self-stretch h-px relative box-border opacity-[0] border-t-[1px] border-solid border-gainsboro-400" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1040px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq975:flex-wrap">
              <div className="w-[358px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[19.5px] mq450:flex-wrap">
                  <div className="relative text-black inline-block min-w-[93px]">
                    All Posts(32)
                  </div>
                  <div className="relative inline-block min-w-[47px]">
                    Article
                  </div>
                  <div className="relative inline-block min-w-[41px]">
                    Event
                  </div>
                  <div className="relative inline-block min-w-[72px]">
                    Education
                  </div>
                  <div className="relative inline-block min-w-[27px]">Job</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px] text-mini text-black mq450:flex-wrap">
                <div className="rounded bg-whitesmoke-600 flex flex-row items-start justify-start py-[7px] pr-1.5 pl-3 gap-[10px]">
                  <div className="h-9 w-[133px] relative rounded bg-whitesmoke-600 hidden" />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative font-medium inline-block min-w-[83px] z-[1]">
                      Write a Post
                    </div>
                  </div>
                  <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0 object-contain min-h-[22px] z-[1]"
                    alt=""
                    src="/baselinearrow-drop-down24px-1@2x.png"
                  />
                </div>
                <button className="cursor-pointer [border:none] py-[7px] px-2.5 bg-royalblue rounded flex flex-row items-start justify-start gap-[6px]">
                  <div className="h-9 w-[125px] relative rounded bg-royalblue hidden" />
                  <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
                    alt=""
                    src="/baselinegroup-add24px.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative text-mini font-medium font-ibm-plex-sans text-white text-left inline-block min-w-[75px] z-[1]">
                      Join Group
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch h-px relative">
              <div className="absolute top-[0px] left-[0px] box-border w-full h-full border-t-[1px] border-solid border-gainsboro-400" />
              <div className="absolute top-[0px] left-[0px] box-border w-[94px] h-px border-t-[1px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
