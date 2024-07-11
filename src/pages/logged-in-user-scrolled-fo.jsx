import ModuleList from "../components/module-list";
import FrameComponent from "../components/frame-component";

const LoggedInUserScrolledFo = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[13px] leading-[normal] tracking-[normal]">
      <div className="self-stretch h-[122px] relative bg-white hidden" />
      <ModuleList />
      <FrameComponent />
    </div>
  );
};

export default LoggedInUserScrolledFo;
