import { Outlet } from "react-router-dom";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import Header from "./home/Header";
import Sidebar from "./home/Sidebar";
import HomeHeader from "./home/HomeHeader";

function AppLayout() {
  const [sidebar, setSidebar] = useState(false);

  function handleSidebar() {
    setSidebar(!sidebar);
  }

  function handleCloseSidebar() {
    setSidebar(false);
  }

  return (
    <div className="flex h-screen gap-4 p-4">
      <div className="hidden h-full w-auto flex-col gap-5 md:flex">
        <Header />
        <Sidebar />
      </div>

      {/*  */}
      <div className="z-40 block md:hidden" onClick={handleSidebar}>
        {sidebar ? <IoClose size={20} /> : <IoMenu size={20} />}
      </div>
      <div
        className={
          sidebar ? "flex h-full w-auto flex-col gap-5" : "fixed left-[-100%]"
        }
      >
        <Header onCloseSidebar={handleCloseSidebar} />
        <Sidebar onCloseSidebar={handleCloseSidebar} />
      </div>
      {/*  */}

      <main
        className={
          sidebar
            ? "hidden"
            : "flex w-full flex-col gap-10 overflow-y-auto rounded-lg bg-neutral-900 px-5 py-2"
        }
      >
        <HomeHeader />
        <div className="px-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
