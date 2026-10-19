import {
    FaHome, FaUser, FaCog, FaEnvelope,
    FaBell, FaChartLine, FaCalendar, FaBook,
    FaFile, FaSearch, FaHeart, FaStar,
    FaQuestionCircle,
} from "react-icons/fa";

export type MENU = {
    id: number,
    icon: React.JSX.Element,
    toolTip: string,
    path: string
};

export const menuItems: MENU[] = [
    { id: 1, icon: <FaHome />, toolTip: "Home", path: "/" },
  { id: 2, icon: <FaUser />, toolTip: "Profile", path: "/profile" },
  { id: 3, icon: <FaCog />, toolTip: "Settings", path: "/settings" },
  { id: 4, icon: <FaEnvelope />, toolTip: "Messages", path: "/messages" },
  { id: 5, icon: <FaBell />, toolTip: "Notifications", path: "/notifications" },
  { id: 6, icon: <FaChartLine />, toolTip: "Analytics", path: "/analytics" },
  { id: 7, icon: <FaCalendar />, toolTip: "Calendar", path: "/calendar" },
  { id: 8, icon: <FaBook />, toolTip: "Library", path: "/library" },
  { id: 9, icon: <FaFile />, toolTip: "Documents", path: "/documents" },
  { id: 10, icon: <FaSearch />, toolTip: "Search", path: "/search" },
  { id: 11, icon: <FaHeart />, toolTip: "Favorites", path: "/favorites" },
  { id: 12, icon: <FaStar />, toolTip: "Starred", path: "/starred" },
  { id: 13, icon: <FaQuestionCircle />, toolTip: "Help", path: "/help" },
];


