import { useMemo } from "react";
import PropTypes from "prop-types";

const SocialSignup = ({
  className = "",
  signUpWithFacebook,
  signUpWithGoogle,
  propAlignSelf,
  propFlex,
}) => {
  const socialSignupStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] ${className}`}
      style={socialSignupStyle}
    >
      <button className="cursor-pointer py-2.5 pr-[75px] pl-[76px] bg-white self-stretch rounded-sm flex flex-row items-start justify-start gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-200 hover:bg-gainsboro-300 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-silver-100">
        <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-200" />
        <img
          className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
          alt=""
          src="/f-logo-rgbblue-1024@2x.png"
        />
        <div className="relative text-sm leading-[16px] font-ibm-plex-sans text-black text-left z-[1]">
          {signUpWithFacebook}
        </div>
      </button>
      <button className="cursor-pointer py-2.5 pr-5 pl-[21px] bg-white self-stretch rounded-sm flex flex-row items-start justify-center gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-200 hover:bg-gainsboro-300 hover:box-border hover:border-[0.6px] hover:border-solid hover:border-silver-100">
        <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-200" />
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
          alt=""
          src="/search.svg"
        />
        <div className="relative text-sm leading-[16px] font-ibm-plex-sans text-black text-left inline-block min-w-[125px] z-[1]">
          {signUpWithGoogle}
        </div>
      </button>
    </div>
  );
};

SocialSignup.propTypes = {
  className: PropTypes.string,
  signUpWithFacebook: PropTypes.string,
  signUpWithGoogle: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default SocialSignup;
