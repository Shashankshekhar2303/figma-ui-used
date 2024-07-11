import PropTypes from "prop-types";

const PostList = ({ className = "", joinGroup }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start shrink-0 max-w-full text-left text-mid text-white font-ibm-plex-sans ${className}`}
    >
      <img
        className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/group-4.svg"
      />
      <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.6))] flex flex-col items-start justify-start pt-3.5 px-4 pb-8 box-border gap-[122px] max-w-full z-[1]">
        <div className="w-[360px] h-[236px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.6))] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-6 h-6 relative z-[2]"
              loading="lazy"
              alt=""
              src="/iconnavigationarrow-back-24px.svg"
            />
          </div>
          <button className="cursor-pointer py-[5px] px-2 bg-[transparent] rounded flex flex-row items-start justify-start z-[2] border-[0.8px] border-solid border-white">
            <div className="h-7 w-[76px] relative rounded box-border hidden border-[0.8px] border-solid border-white" />
            <a className="[text-decoration:none] relative text-xs font-medium font-ibm-plex-sans text-white text-left inline-block min-w-[60px] z-[1]">
              {joinGroup}
            </a>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2]">
            Computer Engineering
          </h3>
          <div className="relative text-xs z-[2]">
            142,765 Computer Engineers follow this
          </div>
        </div>
      </div>
    </div>
  );
};

PostList.propTypes = {
  className: PropTypes.string,
  joinGroup: PropTypes.string,
};

export default PostList;
