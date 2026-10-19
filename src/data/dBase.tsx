import {
    FaHome, FaUser, FaCog, FaEnvelope,
    FaBell, FaChartLine, FaCalendar, FaBook,
    FaFile, FaSearch, FaHeart, FaStar,
    FaQuestionCircle,
} from "react-icons/fa";

export type MENU = {
    id: number,
    icon: React.JSX.Element,
    text: string,
    path: string
};

export const menuItems: MENU[] = [
    { id: 1, icon: <FaHome />, text: "Home", path: "/" },
  { id: 2, icon: <FaUser />, text: "Profile", path: "/profile" },
  { id: 3, icon: <FaCog />, text: "Settings", path: "/settings" },
  { id: 4, icon: <FaEnvelope />, text: "Messages", path: "/messages" },
  { id: 5, icon: <FaBell />, text: "Notifications", path: "/notifications" },
  { id: 6, icon: <FaChartLine />, text: "Analytics", path: "/analytics" },
  { id: 7, icon: <FaCalendar />, text: "Calendar", path: "/calendar" },
  { id: 8, icon: <FaBook />, text: "Library", path: "/library" },
  { id: 9, icon: <FaFile />, text: "Documents", path: "/documents" },
  { id: 10, icon: <FaSearch />, text: "Search", path: "/search" },
  { id: 11, icon: <FaHeart />, text: "Favorites", path: "/favorites" },
  { id: 12, icon: <FaStar />, text: "Starred", path: "/starred" },
  { id: 13, icon: <FaQuestionCircle />, text: "Help", path: "/help" },
];


