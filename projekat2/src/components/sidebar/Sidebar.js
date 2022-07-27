import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const SideBarItems = SidebarItems;
  return (
    <div className="sidebar">
      {SideBarItems.map((item, key) => {
        return (
          <Link className="link" key={key} to={item.link}>
            <div> {item.item}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
