import "../assets/styles/header.sass";
import {
  account,
  calendar,
  check,
  logo,
  notification,
  user,
} from "../assets/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUser } from "../features/userSlice";
import { loginItem } from "./data";

const Header: React.FC = () => {
  const data = useSelector(selectUser);
  const [text, setText] = useState("Вход в аккаунт");
  const [image, setImage] = useState(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (data !== null) {
      if (
        data.name === loginItem.login &&
        data.password === loginItem.password
      ) {
        setText("Захар Палазник");
        setImage(account);
      }
    }
  }, [data]);

  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="logo" />
        <input type="text" className="header__search" placeholder="Поиск" />
      </div>
      <div className="header__login">
        <div className="header__circle">
          <img className="header__calendar" src={calendar} alt="calendar" />
        </div>
        <div className="header__circle">
          <img
            className="header__notification"
            src={notification}
            alt="notification"
          />
          <div className="header__notificationcount">4</div>
        </div>
        <div className="header__line" />
        <div className="header__user">
          <div className="header__circle">
            <img className="header__circle_image" src={image} alt="user" />
          </div>
          <p className="header__enter" onClick={() => navigate("/auth")}>
            {text}
          </p>
          <img className="header__arrow" src={check} alt="check" />
        </div>
      </div>
    </div>
  );
};

export default Header;
