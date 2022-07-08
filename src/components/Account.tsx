import React from "react";
import { useDispatch } from "react-redux";
import {
  exit,
  notification,
  meta,
  profile,
  reestr,
  security,
  download,
  account,
} from "../assets";
import "../assets/styles/account.sass";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    dispatch(logout());
  };

  return (
    <div className="account__container">
      <div className="account__title">
        <h2>Личный кабинет</h2>
      </div>
      <div className="cabinet__container">
        <div className="account__menu">
          <div className="menu_table active">
            <div className="menu__icon">
              <img src={profile} alt="profile" />
            </div>
            <p className="text">Мои данные</p>
          </div>
          <div className="menu_table">
            <div className="menu__icon">
              <img src={notification} alt="notification" />
            </div>
            <p>Уведомления</p>
          </div>
          <div className="menu_table">
            <div className="menu__icon">
              <img src={reestr} alt="reestr" />
            </div>
            <p>Реестры</p>
          </div>
          <div className="menu_table">
            <div className="menu__icon">
              <img src={meta} alt="meta" />
            </div>
            <p>Метаданные</p>
          </div>
          <div className="menu_table">
            <div className="menu__icon">
              <img src={security} alt="security" />
            </div>
            <p>Безопасность</p>
          </div>
          <div className="menu_table">
            <div className="menu__icon">
              <img src={download} alt="download" />
            </div>
            <p>Мои загрузки</p>
          </div>
          <div className="menu_table">
            <div className="menu__icon">
              <img src={exit} alt="exit" />
            </div>
            <p onClick={handleLogout} className="inactive">
              Выход
            </p>
          </div>
        </div>
        <div className="account__information">
          <div className="account__header">
            <img src={account} alt="account" />
            <div>Здравствуй, Захар!</div>
          </div>
          <div className="line" />
          <div className="account__general">
            <div>Основные данные</div>
            <div className="account__info">
              <div className="account__name">
                <p className="account__label">Имя</p>
                <input
                  className="account__input"
                  type="text"
                  placeholder="Имя"
                />
              </div>
              <div className="account__name">
                <p className="account__label">Фамилия</p>
                <input
                  className="account__input"
                  type="text"
                  placeholder="Фамилия"
                />
              </div>
              <div className="account__name">
                <p className="account__label">Отчество</p>
                <input
                  className="account__input"
                  type="text"
                  placeholder="Отчество"
                />
              </div>
              <div className="account__name">
                <p className="account__label">Страна</p>
                <input
                  className="account__input check"
                  type="text"
                  placeholder="Страна"
                />
              </div>
              <div className="account__name">
                <p className="account__label">Город</p>
                <input
                  className="account__input check"
                  type="text"
                  placeholder="Город"
                />
              </div>
              <div className="account__name">
                <p className="account__label">Мобильный телефон</p>
                <input
                  className="account__input"
                  type="text"
                  placeholder="Мобильный телефон"
                />
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="account__password_container">
            <div>Пароль</div>
            <div className="passwords__container">
              <div className="account__name">
                <p className="account__label">Новый пароль</p>
                <input className="account__input password" type="password" />
              </div>
              <div className="account__name">
                <p className="account__label">Подтверждение пароля</p>
                <input className="account__input password" type="password" />
              </div>
            </div>
          </div>
          <input className="account__save" type="button" value="Сохранить" />
        </div>
      </div>
    </div>
  );
};

export default Account;
