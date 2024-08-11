import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header({ onCloseSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="rounded-lg bg-neutral-900 text-gray-300">
        <ul className="flex flex-col justify-between gap-6 p-6 pr-40">
          <li
            className="flex cursor-pointer items-center gap-3 text-xl font-semibold duration-300 hover:text-white"
            onClick={() => {
              navigate("/search");
              onCloseSidebar();
            }}
          >
            <FaSearch />
            <span>Search</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
