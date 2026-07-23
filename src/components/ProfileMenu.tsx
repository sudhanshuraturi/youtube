import { LogOut } from "lucide-react";
import ThemeSwitcher from "../utils/ThemeSwitcher";

const ProfileMenu = () => {
  return (
    <>
      {" "}
      <button className="btn btn-circle btn-ghost" popoverTarget="profile-menu">
        <div className="w-6 h-6 display-block fill-current">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
            className="pointer-events-none display-inherit w-full h-full"
          >
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 016.447 15.276 7 7 0 00-12.895 0A9 9 0 0112 3Zm0 2a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001L11.899 16a5 5 0 014.904 3.61A8.96 8.96 0 0112 21a8.96 8.96 0 01-4.804-1.391 5 5 0 014.704-3.608Z"></path>
          </svg>
        </div>
      </button>
      <div
        id="profile-menu"
        popover="auto"
        className="dropdown bg-base-100 rounded-box shadow-lg "
      >
        <ul className="menu w-25">
          <li>
            <span className="flex gap-1">
              Theme
              <ThemeSwitcher />
            </span>
          </li>
          <li>
            <span className="flex gap-1">
              Logout
              <LogOut size={"16"} />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileMenu;
