import HeaderContent from "../components/header-content";
import FormHeader from "../components/form-header";
import Feed from "../components/feed";
import EventContent from "../components/event-content";
import FourthPost from "../components/fourth-post";

const AndroidSignup = () => {
  return (
    <div className="w-full h-[640px] relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-whitesmoke-100 flex flex-row items-start justify-end py-[7px] px-3 box-border shrink-0 top-[0] z-[99] sticky max-w-full">
        <div className="h-6 w-[360px] relative bg-whitesmoke-100 hidden max-w-full" />
        <img
          className="h-2.5 w-[51px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/group-31@2x.png"
        />
      </header>
      <main className="self-stretch h-[627px] relative shrink-0 max-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-[360px] h-[236px] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <HeaderContent iconnavigationarrowBack24="/iconnavigationarrow-back-24px1@2x.png" />
        <section className="absolute top-[302px] left-[0px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] bg-white w-[360px] h-[307px] z-[1]" />
        <img
          className="absolute top-[302px] left-[0px] rounded-t rounded-b-none w-[360px] h-[120px] object-cover z-[2]"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <form className="m-0 absolute top-[154px] left-[0px] shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-t-lg rounded-b-none bg-white w-full flex flex-col items-start justify-start pt-[22px] px-5 pb-[18px] box-border gap-[22px] max-w-full z-[5]">
          <div className="w-[360px] h-1.5 relative bg-whitesmoke-400 hidden max-w-full" />
          <b className="relative text-mid hidden font-ibm-plex-sans text-white text-left">
            Computer Engineering
          </b>
          <div className="relative text-xs font-ibm-plex-sans text-white text-left hidden">
            142,765 Computer Engineers follow this
          </div>
          <div className="w-[106px] h-8 relative hidden">
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
          <b className="relative text-sm tracking-[0.01em] hidden font-ibm-plex-sans text-gray-200 text-left min-w-[73px]">
            Posts(368)
          </b>
          <div className="relative text-sm font-medium font-ibm-plex-sans text-left hidden min-w-[65px]">
            <span className="text-black">{`✍️ `}</span>
            <span className="text-darkslategray-200">Article</span>
          </div>
          <div className="w-[280px] relative text-base font-semibold font-ibm-plex-sans text-gray-200 text-left hidden">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </div>
          <div className="relative text-sm font-ibm-plex-sans text-darkslategray-100 text-left hidden">
            I’ve worked in UX for the better part of a decade. F..
          </div>
          <img
            className="w-[37px] h-[37px] relative rounded-3xl object-cover hidden"
            alt=""
            src="/rectangle-31@2x.png"
          />
          <img className="w-7 h-7 relative hidden" alt="" src="/group-3.svg" />
          <div className="relative text-smi font-semibold font-ibm-plex-sans text-gray-200 text-left hidden min-w-[91px]">
            Sarthak Kamra
          </div>
          <div className="relative text-xs font-medium font-ibm-plex-sans text-darkslategray-100 text-left hidden min-w-[59px]">
            1.4k views
          </div>
          <div className="w-[70px] h-9 relative hidden">
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
            className="w-[54px] h-[54px] relative hidden"
            alt=""
            src="/group-611.svg"
          />
          <div className="w-[360px] h-[462px] relative shadow-[0px_8px_24px_rgba(0,_0,_0,_0.25)] rounded-t-lg rounded-b-none bg-white hidden max-w-full" />
          <FormHeader />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <button className="cursor-pointer [border:none] py-2.5 pr-7 pl-[29px] bg-royalblue rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1]">
              <div className="h-9 w-[150px] relative rounded-xl bg-royalblue hidden" />
              <div className="relative text-smi leading-[16px] font-semibold font-ibm-plex-sans text-white text-center inline-block min-w-[93px] z-[1]">
                Create Account
              </div>
            </button>
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="relative text-smi [text-decoration:underline] font-medium font-ibm-plex-sans text-darkslategray-100 text-center inline-block min-w-[60px] z-[1]">
                or, Sign In
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <button className="cursor-pointer py-2.5 pr-5 pl-[21px] bg-white self-stretch rounded-sm flex flex-row items-start justify-center gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-200">
              <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-200" />
              <img
                className="h-4 w-4 relative object-contain min-h-[16px] z-[1]"
                alt=""
                src="/f-logo-rgbblue-1024@2x.png"
              />
              <div className="relative text-smi leading-[16px] font-ibm-plex-sans text-black text-left z-[1]">
                Sign up with Facebook
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-5 bg-white self-stretch rounded-sm flex flex-row items-start justify-center gap-[10px] whitespace-nowrap z-[1] border-[0.6px] border-solid border-gainsboro-200">
              <div className="h-[38px] w-80 relative rounded-sm bg-white box-border hidden border-[0.6px] border-solid border-gainsboro-200" />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                alt=""
                src="/search.svg"
              />
              <div className="relative text-smi leading-[16px] font-ibm-plex-sans text-black text-left inline-block min-w-[116px] z-[1]">
                Sign up with Google
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[43px] pl-[37px]">
            <div className="flex-1 relative text-2xs tracking-[-0.01em] leading-[16px] font-ibm-plex-sans text-gray-200 text-center z-[1]">{`By signing up, you agree to our Terms & conditions, Privacy policy`}</div>
          </div>
        </form>
      </main>
      <Feed />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[4]" />
      <div className="self-stretch h-[629px] flex flex-col items-start justify-start shrink-0 max-w-full">
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <EventContent />
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <FourthPost />
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
      </div>
    </div>
  );
};

export default AndroidSignup;
