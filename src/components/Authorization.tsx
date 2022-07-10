import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arrow, validate } from "../assets";
import { loginItem } from "./data";
import "../assets/styles/authorization.sass";
import { login, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Authorization: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const dispatchFunction = () => {
    dispatch(
      login({
        name: name,
        password: password,
      })
    );
  };

  const returnHome = () => {
    navigate("/");
  };

  const handleClick = () => {
    dispatchFunction();
  };

  const handleRealTimeValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    e.currentTarget.id === "name" ? setName(value) : setPassword(value);
    inputValidation("name", name, loginItem.login);
    inputValidation("password", password, loginItem.password);
  };

  const inputValidation = (id: string, field: string, objectField: string) => {
    const element = document.getElementById(id);
    const name_icon = document.getElementById("name_icon");
    const password_icon = document.getElementById("password_icon");
    if (field === objectField && id === "name") {
      element?.classList.add("authorization__input_success");
      name_icon?.classList.add("validate_icon");
    } else if (field === objectField && id === "paswwrod") {
      element?.classList.add("authorization__input_success");
      password_icon?.classList.add("validate_icon");
    } else {
      element?.classList.add("authorization__input_error");
    }
  };

  return (
    <>
      {!user ||
        (user.name === loginItem.login && user.password === loginItem.password
          ? navigate("/profile")
          : null)}
      <div className="authorization__container">
        <div className="authorization__back_container">
          <div className="authorization__back">
            <img
              onClick={returnHome}
              className="authorization__arrow_back"
              src={arrow}
              alt="back"
            />
          </div>
          <p onClick={returnHome}>Главная</p>
        </div>
        <div className="authorization">
          <h2 className="authorization__title">Авторизация</h2>
          <div className="authorization__form">
            <form className="main__form">
              <div className="authorization__login">
                <label className="authorization__label">Имя</label>
                <div className="validation__container">
                  <input
                    id="name"
                    className="authorization__input"
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    onInput={handleRealTimeValidation}
                  />
                  <img id="name_icon" src={validate} alt="validate" />
                </div>
              </div>
              <div className="authorization__password">
                <label className="authorization__label">Пароль</label>
                <div className="validation__container">
                  <input
                    id="password"
                    className="authorization__input"
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onInput={handleRealTimeValidation}
                  />
                  <img id="password_icon" src={validate} alt="validate" />
                </div>
              </div>
              <div className="remember">
                <input className="authorization__check" type="checkbox" />
                <p className="authorization__remember">
                  Запомнить меня на этом компьютере
                </p>
              </div>
              <input
                className="aurhorization__enter"
                onClick={handleClick}
                type="button"
                value="Вход"
              />
            </form>
            <a className="forgot__password" href="https://www.google.com/">
              Забыли свой пароль?
            </a>
          </div>
          <div className="additional_auth">
            <input
              className="authorization__additional"
              type="button"
              value="Авторизация с использованием ЕС ИФЮЛ"
            />
            <input
              className="authorization__additional"
              type="button"
              value="Авторизация с использованием МСИ"
            />
          </div>
          <div className="registration__container">
            <p className="no_account">У вас нет аккаунта?</p>
            <a className="create_account" href="https://www.google.com/">
              Нажмите сюда чтобы создать
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authorization;
