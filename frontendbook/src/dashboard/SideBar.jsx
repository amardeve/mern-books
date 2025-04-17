

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImage from "../assets/profile.png";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo className="bg-white shadow-sm py-1.4 px-3 h-10 rounded-lg">
        <div className="flex justify-between w-full">
          <img
            src={user?.photoURL || userImage}
            alt="User profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-gray-900/65 ml-1 py-1 px-2 rounded-lg text-sm">
            {user?.displayName || "Demo User"}
          </p>
        </div>
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard"
            icon={HiChartPie}
            className={isActive("/admin/dashboard") ? "bg-blue-100 text-blue-600" : ""}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
            className={isActive("/admin/dashboard/upload") ? "bg-blue-100 text-blue-600" : ""}
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/manage"
            icon={HiInbox}
            className={isActive("/admin/dashboard/manage") ? "bg-blue-100 text-blue-600" : ""}
          >
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item
            href="/login"
            icon={HiArrowSmRight}
            className={isActive("/login") ? "bg-blue-100 text-blue-600" : ""}
          >
            Sign In
          </Sidebar.Item>
          <Sidebar.Item
            href="/logout"
            icon={HiTable}
            className={isActive("/logout") ? "bg-blue-100 text-blue-600" : ""}
          >
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item> */}
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
