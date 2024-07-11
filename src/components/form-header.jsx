import PropTypes from "prop-types";

const FormHeader = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[19px] text-left text-lg text-black font-ibm-plex-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <h3 className="m-0 relative text-inherit font-bold font-inherit z-[1]">
          Create Account
        </h3>
        <img
          className="h-6 w-6 relative object-cover min-h-[24px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-3-1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-smi text-gray-100">
        <div className="self-stretch rounded-t-sm rounded-b-none bg-whitesmoke-200 flex flex-row items-start justify-start py-0 px-3 gap-[82px] shrink-0 z-[2] border-[1px] border-solid border-gainsboro-100">
          <div className="h-10 w-80 relative rounded-t-sm rounded-b-none bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative leading-[16px] font-medium inline-block min-w-[66px] z-[1]">
              First Name
            </div>
          </div>
          <div className="h-10 flex flex-row items-start justify-start gap-[11px]">
            <div className="h-[41px] w-px relative box-border z-[1] border-r-[1px] border-solid border-gainsboro-200" />
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="relative leading-[16px] font-medium inline-block min-w-[64px] z-[1]">
                Last Name
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-whitesmoke-200 flex flex-row items-start justify-start py-2.5 px-3 shrink-0 z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
          <div className="h-10 w-80 relative bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
          <div className="relative leading-[16px] font-medium inline-block min-w-[34px] z-[1]">
            Email
          </div>
        </div>
        <div className="self-stretch bg-whitesmoke-200 flex flex-row items-start justify-between py-2.5 px-[11px] shrink-0 gap-[20px] z-[2] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
          <div className="h-10 w-80 relative bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
          <div className="relative leading-[16px] font-medium inline-block min-w-[59px] z-[1]">
            Password
          </div>
          <img
            className="h-4 w-4 relative object-contain min-h-[16px] z-[1]"
            alt=""
            src="/group-3-2@2x.png"
          />
        </div>
        <div className="self-stretch rounded-t-none rounded-b-sm bg-whitesmoke-200 flex flex-row items-start justify-start py-2.5 px-3 shrink-0 whitespace-nowrap z-[1] mt-[-1px] border-[1px] border-solid border-gainsboro-100">
          <div className="h-10 w-80 relative rounded-t-none rounded-b-sm bg-whitesmoke-200 box-border hidden border-[1px] border-solid border-gainsboro-100" />
          <div className="relative leading-[16px] font-medium inline-block min-w-[109px] z-[1]">
            Confirm Password
          </div>
        </div>
      </div>
    </div>
  );
};

FormHeader.propTypes = {
  className: PropTypes.string,
};

export default FormHeader;
