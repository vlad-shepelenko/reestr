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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
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
                  {name ? (
                    <input
                      id="name"
                      className={
                        !name || name === "admin"
                          ? "authorization__input_success"
                          : "authorization__input_error"
                      }
                      type="text"
                      placeholder="Введите имя"
                      value={name}
                      onChange={handleNameChange}
                    />
                  ) : (
                    <input
                      id="name"
                      type="text"
                      placeholder="Введите имя"
                      value={name}
                      onChange={handleNameChange}
                    />
                  )}
                  <img
                    className={name === "admin" ? "validate_icon" : ""}
                    id="name_icon"
                    src={validate}
                    alt="validate"
                  />
                </div>
                <div
                  id="incorrect_login"
                  className={
                    !name || name === "admin" ? "error_hidden" : "error_visible"
                  }
                >
                  Неправильный логин
                </div>
              </div>
              <div className="authorization__password">
                <label className="authorization__label">Пароль</label>
                <div className="validation__container">
                  {password ? (
                    <input
                      id="password"
                      className={
                        !password || password === "12345"
                          ? "authorization__input_success"
                          : "authorization__input_error"
                      }
                      type="password"
                      placeholder="Введите пароль"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  ) : (
                    <input
                      id="password"
                      type="password"
                      placeholder="Введите пароль"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  )}
                  <img
                    id="password_icon"
                    className={password === "12345" ? "validate_icon" : ""}
                    src={validate}
                    alt="validate"
                  />
                </div>
                <div
                  id="incorrect_password"
                  className={
                    !password || password === "12345"
                      ? "error_hidden"
                      : "error_visible"
                  }
                >
                  Неправильный пароль
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
              <a className="forgot__password" href="https://www.google.com/">
                Забыли свой пароль?
              </a>
            </form>
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
