import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/home");
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl capitalize">page not found 404</h1>
          <button
            className="rounded-xl border-none bg-green-800 p-5 capitalize shadow-2xl shadow-gray-300/90 outline-none duration-300 hover:bg-green-700 hover:text-black"
            onClick={goHome}
          >
            go home
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
