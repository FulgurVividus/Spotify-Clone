import { Outlet } from "react-router-dom";
import Header from "./home/Header";
import Sidebar from "./home/Sidebar";
import HomeHeader from "./home/HomeHeader";

function AppLayout() {
  return (
    <div className="flex h-screen gap-4 p-4">
      <div className="flex h-full w-auto flex-col gap-5">
        <Header />
        <Sidebar />
      </div>

      <main className="flex w-full flex-col gap-10 rounded-lg bg-neutral-900 pb-2 pl-5 pr-5 pt-2">
        <HomeHeader />
        <div className="pl-2 pr-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
