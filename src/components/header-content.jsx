import PropTypes from "prop-types";

const HeaderContent = ({ className = "", iconnavigationarrowBack24 }) => {
  return (
    <section
      className={`absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.6))] w-full flex flex-row items-start justify-between pt-3.5 pb-[194px] pr-[18px] pl-4 box-border max-w-full gap-[20px] z-[1] ${className}`}
    >
      <div className="h-[236px] w-[360px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.6))] hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <img
          className="w-6 h-6 relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src={iconnavigationarrowBack24}
        />
      </div>
      <button className="cursor-pointer py-[5px] px-2 bg-[transparent] rounded flex flex-row items-start justify-start z-[2] border-[0.8px] border-solid border-white">
        <div className="h-7 w-[85px] relative rounded box-border hidden border-[0.8px] border-solid border-white" />
        <a className="[text-decoration:none] relative text-xs font-medium font-ibm-plex-sans text-white text-left inline-block min-w-[69px] z-[1]">
          Leave Group
        </a>
      </button>
    </section>
  );
};

HeaderContent.propTypes = {
  className: PropTypes.string,
  iconnavigationarrowBack24: PropTypes.string,
};

export default HeaderContent;
