import GroupComponent from "../components/group-component";
import Content from "../components/content";
import PostContainer from "../components/post-container";

const NotLoggedInDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[98px] box-border leading-[normal] tracking-[normal] text-left text-[36px] text-white font-ibm-plex-sans">
      <GroupComponent />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-end pt-[286px] pb-20 pr-5 pl-[200px] box-border relative gap-[4px] bg-[url('/public/rectangle2@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq725:pl-[100px] mq725:box-border mq450:pl-5 mq450:pt-[186px] mq450:pb-[52px] mq450:box-border">
          <div className="w-[1440px] h-[440px] relative bg-[url('/public/rectangle2@2x.png')] bg-cover bg-no-repeat bg-[top] hidden max-w-full z-[0]" />
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.6))] z-[1]" />
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[2] mq450:text-3xl mq975:text-[29px]">
            Computer Engineering
          </h1>
          <div className="relative text-lg inline-block max-w-full z-[2]">
            142,765 Computer Engineers follow this
          </div>
        </div>
      </div>
      <Content />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1040px] flex flex-row items-start justify-start gap-[105px] max-w-full text-left text-sm text-black font-ibm-plex-sans mq725:gap-[26px] mq975:flex-wrap mq1050:gap-[52px]">
          <PostContainer />
          <div className="w-[243px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[243px] mq975:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[31.6px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                        alt=""
                        src="/outlinelocation-on24px-2.svg"
                      />
                      <div className="relative inline-block min-w-[77px]">
                        Noida, India
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/baselineedit24px.svg"
                  />
                </div>
                <div className="self-stretch h-[0.4px] relative box-border border-t-[0.4px] border-solid border-silver-200" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs text-gray-900">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/baselineerror-outline24px@2x.png"
                  />
                </div>
                <div className="flex-1 relative">
                  Your location will help us serve better and extend a
                  personalised experience.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotLoggedInDesktop;
