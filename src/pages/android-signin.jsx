import HeaderContent from "../components/header-content";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import SecondPostContent from "../components/second-post-content";
import ThirdPost from "../components/third-post";
import FourthPost from "../components/fourth-post";

const AndroidSignin = () => {
  return (
    <div className="w-full h-[640px] relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <img
        className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/group-4.svg"
      />
      <main className="self-stretch h-[627px] relative shrink-0 max-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-[360px] h-[236px] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <HeaderContent iconnavigationarrowBack24="/iconnavigationarrow-back-24px.svg" />
        <section className="absolute top-[302px] left-[0px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white w-[360px] h-[307px] z-[1]" />
        <img
          className="absolute top-[302px] left-[0px] rounded-t rounded-b-none w-[360px] h-[120px] object-cover z-[2]"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <form className="m-0 absolute top-[154px] left-[0px] shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-t-lg rounded-b-none bg-white w-full flex flex-col items-start justify-start pt-[22px] px-5 pb-28 box-border gap-[19px] max-w-full z-[5]">
          <div className="w-[360px] h-1.5 relative bg-whitesmoke-400 hidden max-w-full z-[0]" />
          <b className="relative text-mid hidden font-ibm-plex-sans text-white text-left z-[1]">
            Computer Engineering
          </b>
          <div className="relative text-xs font-ibm-plex-sans text-white text-left hidden z-[2]">
            142,765 Computer Engineers follow this
          </div>
          <div className="w-[106px] h-8 relative hidden z-[3]">
            <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-300 w-full h-full" />
            <div className="absolute top-[8px] left-[10px] text-smi font-medium font-ibm-plex-sans text-gray-200 text-left inline-block min-w-[55px]">
              Filter: All
            </div>
            <img
              className="absolute top-[6px] left-[76px] w-5 h-5 overflow-hidden"
              alt=""
              src="/baselinearrow-drop-down24px.svg"
            />
          </div>
          <b className="relative text-sm tracking-[0.01em] hidden font-ibm-plex-sans text-gray-200 text-left min-w-[73px] z-[4]">
            Posts(368)
          </b>
          <div className="relative text-sm font-medium font-ibm-plex-sans text-left hidden min-w-[65px] z-[5]">
            <span className="text-black">{`✍️ `}</span>
            <span className="text-darkslategray-200">Article</span>
          </div>
          <div className="w-[280px] relative text-base font-semibold font-ibm-plex-sans text-gray-200 text-left hidden z-[6]">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </div>
          <div className="relative text-sm font-ibm-plex-sans text-darkslategray-100 text-left hidden z-[7]">
            I’ve worked in UX for the better part of a decade. F..
          </div>
          <img
            className="w-[37px] h-[37px] absolute !m-[0] bottom-[27px] left-[16px] rounded-3xl object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/rectangle-31@2x.png"
          />
          <div className="relative text-smi font-semibold font-ibm-plex-sans text-gray-200 text-left hidden min-w-[91px] z-[9]">
            Sarthak Kamra
          </div>
          <div className="relative text-xs font-medium font-ibm-plex-sans text-darkslategray-100 text-left hidden min-w-[59px] z-[10]">
            1.4k views
          </div>
          <div className="w-[70px] h-9 relative hidden z-[11]">
            <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-300 w-full h-full" />
            <img
              className="absolute top-[9px] left-[8px] w-[18px] h-[18px] overflow-hidden"
              alt=""
              src="/baselineshare24px.svg"
            />
            <div className="absolute top-[10px] left-[30px] text-xs font-ibm-plex-sans text-gray-200 text-left inline-block min-w-[32px]">
              Share
            </div>
          </div>
          <img
            className="w-[54px] h-[54px] absolute !m-[0] right-[18px] bottom-[25px] object-contain z-[3]"
            loading="lazy"
            alt=""
            src="/group-61@2x.png"
          />
          <div className="w-[360px] h-[462px] relative shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-t-lg rounded-b-none bg-white hidden max-w-full z-[13]" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <h3 className="m-0 relative text-lg font-bold font-ibm-plex-sans text-black text-left z-[1]">
              Welcome back!
            </h3>
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-32.svg"
            />
          </div>
          <FrameComponent1 />
          <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[3px] gap-[20px]">
            <button className="cursor-pointer [border:none] py-2.5 pr-[53px] pl-[54px] bg-royalblue rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1]">
              <div className="h-9 w-[150px] relative rounded-xl bg-royalblue hidden" />
              <div className="relative text-smi leading-[16px] font-semibold font-ibm-plex-sans text-white text-center inline-block min-w-[43px] z-[1]">
                Sign In
              </div>
            </button>
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="relative text-smi [text-decoration:underline] font-medium font-ibm-plex-sans text-darkslategray-100 text-right inline-block min-w-[110px] z-[1]">
                or, Create Account
              </div>
            </div>
          </div>
          <FrameComponent />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[43px] pl-[37px]">
            <div className="flex-1 relative text-2xs tracking-[-0.01em] leading-[16px] font-medium font-ibm-plex-sans text-gray-200 text-center z-[1]">
              Forgot Password?
            </div>
          </div>
        </form>
      </main>
      <SecondPostContent />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[4]" />
      <div className="self-stretch h-[629px] flex flex-col items-start justify-start shrink-0 max-w-full">
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <ThirdPost propHeight="unset" propFlex="1" />
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <FourthPost />
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
      </div>
    </div>
  );
};

export default AndroidSignin;
