import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function HomeHeader() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function goForward() {
    navigate(1);
  }

  return (
    <>
      <nav className="flex flex-col rounded-lg bg-gradient-to-b from-red-400 p-2">
        <div className="flex items-center justify-between">
          <div className="z-50 flex gap-2">
            <button
              title="Go Back"
              className={`home-header-btn z-50`}
              onClick={goBack}
            >
              <RxCaretLeft />
            </button>

            <button
              title="Go Forward"
              className={`home-header-btn z-50`}
              onClick={goForward}
            >
              <RxCaretRight />
            </button>
          </div>

          {/* account button */}
          <div className="z-50 rounded-full bg-black p-1 duration-300 hover:scale-105">
            <button
              className="rounded-full bg-green-600 pb-1 pl-2 pr-2 pt-1 text-sm font-bold"
              onClick={() => navigate("/profile")}
            >
              {/* TODO: make it dynamic */}
              <span className="text-black">M</span>
            </button>
          </div>
        </div>

        <div></div>
      </nav>
    </>
  );
}

export default HomeHeader;
