import { Outlet } from "react-router-dom";
import Header from "./home/Header";
import Sidebar from "./home/Sidebar";

function AppLayout() {
  function collapse() {}

  return (
    <div className="flex h-screen gap-4 p-4">
      <div className="flex h-full w-auto flex-col gap-5">
        <Header />
        <Sidebar />
      </div>

      <main className="w-full rounded-lg bg-neutral-900 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
