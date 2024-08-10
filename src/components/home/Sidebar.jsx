import { VscLibrary } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Sidebar({ onCloseSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <aside className="flex h-full flex-col overflow-y-auto rounded-lg bg-neutral-900 p-6 pr-40 text-gray-300">
        <div
          className="flex cursor-pointer items-center gap-3 text-xl font-semibold duration-300 hover:text-white"
          onClick={() => {
            navigate("/library");
            onCloseSidebar();
          }}
        >
          <VscLibrary />
          <h2>Library</h2>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
