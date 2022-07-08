import "../assets/styles/footer.sass";
import { logo } from "../assets/index";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__logo">
            <div className="footer__logo_head">
              <img className="footer__logoicon" src={logo} alt="logo" />
              <p className="footer__about">
                Открытое акционерное общество <br />
                «Реестр ПО» начало практическую
                <br />
                деятельность с 1 марта 2014 г
              </p>
            </div>
            <div className="footer__developer_container">
              <p className="footer__developer">Разработчик</p>
              <p className="footer__organization">
                ОАО «Агентство сервисизации и реинжиниринга»
              </p>
              <p className="footer__address">Минск, улица Клары Цеткин, 24</p>
            </div>
          </div>
          <div className="footer__information">
            <div>
              <p className="footer__caption">Информация</p>
            </div>
            <div>
              <ul className="footer__list">
                <li>Реестры</li>
                <li>Новости</li>
                <li>Документы</li>
                <li>Вопросы</li>
              </ul>
            </div>
          </div>
          <div className="footer__support">
            <div>
              <p className="footer__caption">Техническая поддержка</p>
            </div>
            <div className="foooter__support_content">
              <div className="footer__supportContent">
                Ежедневно с 8.00 до 19.00, <br /> за исключением выходных
                (суббота,
                <br />
                воскресенье) и праздничных дней.
              </div>
              <div className="footer__lineShort"></div>
              <p className="footer__phone">+375 25 111 22 33</p>
              <p className="footer__phone">+375 29 222 44 55</p>
              <p className="footer__mail">ReestrPOsupport@mail.ru</p>
            </div>
          </div>
          <div className="footer__contacts">
            <div>
              <p className="footer__caption">Контакты</p>
            </div>
            <div className="footer__content_phone">
              <p className="footer__phone">+375 25 111 22 33</p>
              <p className="footer__phone">+375 29 222 44 55</p>
              <p className="footer__mail">ReestrPOsupport@mail.ru</p>
              <p className="footer__addressContacts">
                220004 г. Минск, ул. Карла Маркса, 38
              </p>
              <a href="https://www.google.com/">Связаться с поддержкой</a>
            </div>
          </div>
        </div>
        <div className="footer__copy_section">
          <div className="footer__lineTall" />
          <p className="footer__copyrights">
            © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
