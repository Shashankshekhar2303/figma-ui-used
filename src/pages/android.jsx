import PostList from "../components/post-list";
import SecondPost from "../components/second-post";
import SecondPostContent from "../components/second-post-content";
import ThirdPost from "../components/third-post";
import FourthPost from "../components/fourth-post";

const Android = () => {
  return (
    <div className="w-full h-[640px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[12px] leading-[normal] tracking-[normal] text-left text-sm text-gray-200 font-ibm-plex-sans">
      <img
        className="w-full h-[236px] absolute !m-[0] top-[24px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <PostList joinGroup="Join Group" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-[18px] pl-4 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <b className="relative tracking-[0.01em] inline-block min-w-[73px]">
              Posts(368)
            </b>
          </div>
          <div className="rounded bg-whitesmoke-300 flex flex-row items-start justify-start py-1.5 px-2.5 gap-[11px] text-smi">
            <div className="h-8 w-[106px] relative rounded bg-whitesmoke-300 hidden" />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative font-medium inline-block min-w-[55px] z-[1]">
                Filter: All
              </div>
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
              alt=""
              src="/baselinearrow-drop-down24px.svg"
            />
          </div>
        </div>
      </div>
      <SecondPost />
      <main className="self-stretch flex flex-col items-start justify-start shrink-0 max-w-full">
        <SecondPostContent />
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <ThirdPost />
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
        <FourthPost />
        <div className="self-stretch h-1.5 relative bg-whitesmoke-400" />
      </main>
    </div>
  );
};

export default Android;
