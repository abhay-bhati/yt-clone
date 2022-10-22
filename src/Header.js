import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtube logo"
        />
      </div>
      <div className="header__middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputBtn" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallOutlinedIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsNoneSharpIcon className="header__icon" />
        <Avatar
          style={{ height: "32px" }}
          className="header__icon"
          alt="profile image"
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
