import "./navbar.css";
import { IoMdNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Notification App</span>
      <div className="icons">
        <div className="icon">
          <IoMdNotifications />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <FaMessage />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <IoIosSettings />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
