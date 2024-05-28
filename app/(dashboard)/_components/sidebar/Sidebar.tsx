import React from "react";
import NewButton from "./newButton";
import { List } from "./list";
const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-gray-100 h-full w-[60px] p-3 flex flex-col space-y-3">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
